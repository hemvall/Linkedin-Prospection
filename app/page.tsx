"use client";

import { useEffect, useMemo, useState } from "react";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useDroppable, useSensor, useSensors } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { supabase } from "../lib/supabase";
import { leads as initialLeads, Lead, LeadStage } from "../data/leads";
import { prospectCandidates } from "../data/discovery";

const stages: LeadStage[] = ["Découvert","Qualifié","À ajouter","Connecté","Message prêt","Contacté","Répondu"];

function DraggableLead({lead,onOpen}:{lead:Lead,onOpen:(lead:Lead)=>void}){
  const {attributes,listeners,setNodeRef,transform,isDragging}=useDraggable({id:String(lead.id),data:{lead}});
  const style={transform:CSS.Translate.toString(transform),opacity:isDragging?.35:1};
  return <article ref={setNodeRef} style={style} className="lead-card draggable" {...listeners} {...attributes} onClick={()=>{if(!isDragging) onOpen(lead)}}>
    <div className="lead-top"><div className="company-dot">{lead.company.charAt(0)}</div><div className="lead-name"><strong>{lead.company}</strong><span>{lead.contact}</span></div><div className={"score "+(lead.score>=90?"hot":"")}>{lead.score}</div></div>
    <p>{lead.why}</p><div className="tags">{lead.tags.map(t=><span key={t}>{t}</span>)}</div><div className="card-footer"><span>Voir le dossier</span><span>↗</span></div>
  </article>
}
function DropColumn({stage,children}:{stage:LeadStage,children:React.ReactNode}){
  const {setNodeRef,isOver}=useDroppable({id:stage});
  return <div ref={setNodeRef} className={"stack drop-zone "+(isOver?"is-over":"")}>{children}</div>
}

export default function Home(){
  const [leads,setLeads] = useState<Lead[]>([]);
  const [loading,setLoading] = useState(true);
  const [activeLead,setActiveLead] = useState<Lead|null>(null);
  const sensors=useSensors(useSensor(PointerSensor,{activationConstraint:{distance:6}}));
  const [selected,setSelected] = useState<Lead | null>(initialLeads[4]);
  const [query,setQuery] = useState("");
  const [discoverOpen,setDiscoverOpen] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);
  const [profileOpen,setProfileOpen] = useState(false);
  const [view,setView] = useState<"pipeline"|"list"|"priority">("pipeline");
  const [compact,setCompact] = useState(false);
  const [scoreMin,setScoreMin] = useState(0);
  const [stageFilter,setStageFilter] = useState<LeadStage|"Tous">("Tous");

  useEffect(()=>{ void loadLeads(); },[]);

  async function loadLeads(){
    setLoading(true);
    const {data,error}=await supabase.from("prospects").select("*").order("position",{ascending:true}).order("id",{ascending:true});
    if(error){ console.error(error); setLeads(initialLeads); }
    else if(!data?.length){
      const seed=initialLeads.map((lead,index)=>({...lead,linkedin:lead.linkedin??"",position:index}));
      const {data:inserted,error:seedError}=await supabase.from("prospects").insert(seed).select();
      if(seedError){console.error(seedError);setLeads(initialLeads)} else setLeads((inserted??[]) as Lead[]);
    } else setLeads(data as Lead[]);
    setLoading(false);
  }

  const filtered = useMemo(() => leads.filter(l =>
    [l.company,l.contact,...l.tags].join(" ").toLowerCase().includes(query.toLowerCase())
    && l.score>=scoreMin
    && (stageFilter==="Tous" || l.stage===stageFilter)
    && (view!=="priority" || l.score>=90)
  ),[leads,query,scoreMin,stageFilter,view]);

  const addCandidate=async(candidate: Lead)=>{
    if(leads.some(l=>l.company===candidate.company)) return;
    const payload={...candidate,id:undefined,linkedin:candidate.linkedin??"",position:leads.filter(l=>l.stage===candidate.stage).length};
    const {data,error}=await supabase.from("prospects").insert(payload).select().single();
    if(error) return console.error(error);
    setLeads(prev=>[...prev,data as Lead]);
  };

  const updateStage=async(id:number, stage:LeadStage)=>{
    const before=leads;
    setLeads(prev=>prev.map(l=>l.id===id?{...l,stage}:l));
    setSelected(prev=>prev?.id===id?{...prev,stage}:prev);
    const {error}=await supabase.from("prospects").update({stage,position:leads.filter(l=>l.stage===stage).length}).eq("id",id);
    if(error){console.error(error);setLeads(before)}
  };

  const saveLead=async(id:number, patch:Partial<Lead>)=>{
    const before=leads;
    setLeads(prev=>prev.map(l=>l.id===id?{...l,...patch}:l));
    setSelected(prev=>prev?.id===id?{...prev,...patch}:prev);
    const {error}=await supabase.from("prospects").update(patch).eq("id",id);
    if(error){console.error(error);setLeads(before)}
  };

  const onDragStart=(event:DragStartEvent)=>setActiveLead(event.active.data.current?.lead as Lead);
  const onDragEnd=async(event:DragEndEvent)=>{
    setActiveLead(null);
    if(!event.over) return;
    const id=Number(event.active.id);
    const stage=event.over.id as LeadStage;
    if(!stages.includes(stage)) return;
    const lead=leads.find(l=>l.id===id);
    if(!lead || lead.stage===stage) return;
    await updateStage(id,stage);
  };

  const kpis = [
    ["Prospects", leads.length],
    ["Qualifiés", leads.filter(l=>["Qualifié","À ajouter","Connecté","Message prêt","Contacté","Répondu"].includes(l.stage)).length],
    ["À ajouter", leads.filter(l=>l.stage==="À ajouter").length],
    ["Messages prêts", leads.filter(l=>l.stage==="Message prêt").length],
    ["Réponses", leads.filter(l=>l.stage==="Répondu").length],
  ];

  return <main className="app-shell">
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">LP</div>
        <div>
          <div className="brand-title">Prospection</div>
          <div className="brand-sub">AI Partner Pipeline</div>
        </div>
      </div>
      <div className="header-actions">
        <div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher un prospect..." /></div>
        <div className="menu-wrap"><button className="icon-btn" title="Filtres" onClick={()=>setMenuOpen(v=>!v)}>≡</button>
        {menuOpen&&<div className="popover filter-pop"><strong>Affichage</strong><label>Étape<select value={stageFilter} onChange={e=>setStageFilter(e.target.value as LeadStage|"Tous")}><option>Tous</option>{stages.map(s=><option key={s}>{s}</option>)}</select></label><label>Score minimum<input type="range" min="0" max="100" step="5" value={scoreMin} onChange={e=>setScoreMin(Number(e.target.value))}/><span>{scoreMin}+</span></label><button onClick={()=>setCompact(v=>!v)}>{compact?"Cartes confortables":"Cartes compactes"}</button><button onClick={()=>{setScoreMin(0);setStageFilter("Tous");setQuery("")}}>Réinitialiser</button></div>}</div>
        <div className="menu-wrap"><button className="avatar" onClick={()=>setProfileOpen(v=>!v)}>LS</button>
        {profileOpen&&<div className="popover profile-pop"><div className="profile-row"><div className="profile-avatar">LS</div><div><strong>Louis Serrano</strong><span>AI Engineer</span></div></div><a href="https://lserrano.dev" target="_blank">Ouvrir le portfolio ↗</a><button onClick={()=>setDiscoverOpen(true)}>Trouver des prospects</button><button onClick={()=>setView("list")}>Vue liste</button></div>}</div>
      </div>
    </header>

    <section className="hero">
      <div>
        <div className="eyebrow">PIPELINE COMMERCIAL</div>
        <h1>Prospects qualifiés</h1>
        <p>Les bons comptes, la bonne personne, le bon angle. Tu gardes la validation humaine.</p>
      </div>
      <div className="hero-actions"><button className="secondary" onClick={()=>setDiscoverOpen(true)}>Trouver des prospects</button><button className="primary">+ Ajouter un prospect</button></div>
    </section>

    <section className="kpis">
      {kpis.map(([label,value])=><div className="kpi" key={label as string}><span>{label}</span><strong>{value}</strong></div>)}
    </section>

    <section className="board-panel">
      <div className="board-head">
        <div className="tabs"><button className={"tab "+(view==="pipeline"?"active":"")} onClick={()=>setView("pipeline")}>Pipeline</button><button className={"tab "+(view==="list"?"active":"")} onClick={()=>setView("list")}>Tous</button><button className={"tab "+(view==="priority"?"active":"")} onClick={()=>setView("priority")}>Priorité haute</button></div>
        <div className="board-meta">{filtered.length} prospects</div>
      </div>
      {loading ? <div className="loading-state">Chargement du pipeline...</div> : view==="list" ?
      <div className="lead-table-wrap"><table className="lead-table"><thead><tr><th>Entreprise</th><th>Contact</th><th>Étape</th><th>Score</th><th>Tags</th><th></th></tr></thead><tbody>{filtered.map(lead=><tr key={lead.id} onClick={()=>setSelected(lead)}><td><strong>{lead.company}</strong></td><td>{lead.contact}</td><td><span className="stage-pill">{lead.stage}</span></td><td>{lead.score}</td><td><div className="tags">{lead.tags.slice(0,2).map(t=><span key={t}>{t}</span>)}</div></td><td>↗</td></tr>)}</tbody></table></div> :
      <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className={"board "+(compact?"compact-board":"")}>
          {stages.map(stage=>{
            const rows=filtered.filter(l=>l.stage===stage);
            return <div className="column" key={stage}>
              <div className="column-title"><span>{stage}</span><b>{rows.length}</b></div>
              {rows.length>4&&<div className="column-hint">{rows.length} prospects · scroll ↓</div>}
              <DropColumn stage={stage}>
                {rows.map(lead=><DraggableLead key={lead.id} lead={lead} onOpen={setSelected}/>)}
                {rows.length===0 && <div className="empty">Déposer ici</div>}
              </DropColumn>
            </div>
          })}
        </div>
        <DragOverlay>{activeLead?<div className="lead-card drag-overlay"><strong>{activeLead.company}</strong><span>{activeLead.contact}</span></div>:null}</DragOverlay>
      </DndContext>}
    </section>

    {discoverOpen && <div className="overlay" onClick={()=>setDiscoverOpen(false)}>
      <aside className="drawer discovery-drawer" onClick={e=>e.stopPropagation()}>
        <div className="drawer-head">
          <div><div className="eyebrow">DISCOVERY QUEUE</div><h2>Nouveaux prospects</h2><p>Candidats pré-qualifiés selon ton ICP.</p></div>
          <button className="close" onClick={()=>setDiscoverOpen(false)}>×</button>
        </div>
        <div className="candidate-list">
          {prospectCandidates.map(candidate=>{
            const already=leads.some(l=>l.company===candidate.company);
            return <article className="candidate-card" key={candidate.id}>
              <div className="candidate-head">
                <div><div className="candidate-company">{candidate.company}</div><div className="candidate-contact">{candidate.contact}</div></div>
                <div className={"score "+(candidate.score>=90?"hot":"")}>{candidate.score}</div>
              </div>
              <p>{candidate.why}</p>
              <div className="tags">{candidate.tags.map(t=><span key={t}>{t}</span>)}</div>
              <div className="candidate-source">Source : <a href={candidate.sourceUrl} target="_blank">{candidate.sourceLabel}</a></div>
              <div className="candidate-actions">
                <a href={candidate.website} target="_blank">Vérifier</a>
                <button disabled={already} onClick={()=>addCandidate(candidate)}>{already?"Déjà ajouté":"Ajouter au pipeline"}</button>
              </div>
            </article>
          })}
        </div>
      </aside>
    </div>}

    {selected && <div className="overlay" onClick={()=>setSelected(null)}>
      <aside className="drawer" onClick={e=>e.stopPropagation()}>
        <div className="drawer-head">
          <div>
            <div className="eyebrow">DOSSIER PROSPECT</div>
            <h2>{selected.company}</h2>
            <p>{selected.contact}</p>
          </div>
          <button className="close" onClick={()=>setSelected(null)}>×</button>
        </div>

        <div className="drawer-actions">
          <a className="action-link" href={selected.website} target="_blank">Site entreprise ↗</a>
          {selected.linkedin ? <a className="action-link" href={selected.linkedin} target="_blank">LinkedIn ↗</a> : <span className="action-link disabled">LinkedIn à compléter</span>}
        </div>

        <div className="detail-grid">
          <div className="detail-card"><span>Fit score</span><strong>{selected.score}/100</strong></div>
          <div className="detail-card">
            <span>Étape</span>
            <select value={selected.stage} onChange={e=>updateStage(selected.id,e.target.value as LeadStage)}>
              {stages.map(s=><option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <section className="drawer-section"><h3>Pourquoi c'est un bon match</h3><p>{selected.why}</p></section>
        <section className="drawer-section"><h3>Angle recommandé</h3><p>{selected.angle}</p></section>
        <section className="drawer-section crm-section"><div className="section-title"><h3>Suivi</h3><span className="save-hint">sauvegarde auto</span></div><label>Relance<input type="date" value={selected.follow_up_at??""} onChange={e=>saveLead(selected.id,{follow_up_at:e.target.value||null})}/></label><label>Notes<textarea className="notes-area" value={selected.notes??""} onChange={e=>saveLead(selected.id,{notes:e.target.value})} placeholder="Contexte, réponse, prochaine action..." /></label></section>
        <section className="drawer-section message-section">
          <div className="section-title"><h3>Message préparé</h3><button onClick={()=>navigator.clipboard.writeText(selected.message)}>Copier</button></div>
          <textarea value={selected.message} readOnly />
        </section>
      </aside>
    </div>}
  </main>
}
