import { Lead } from "./leads";

export type ProspectCandidate = Lead & {
  sourceLabel: string;
  sourceUrl: string;
};

export const prospectCandidates: ProspectCandidate[] = [
  {
    id: 101,
    company: "Xperdoo",
    website: "https://www.xperdoo.fr/",
    contact: "Associé fondateur à identifier",
    linkedin: "",
    score: 91,
    stage: "Découvert",
    tags: ["Odoo", "PME", "ERP"],
    why: "Partenaire Odoo orienté TPE/PME, avec plus de 50 entreprises accompagnées et une moyenne d'environ 10 utilisateurs par référence. Le portefeuille est assez large pour faire émerger des besoins IA adjacents sans viser une grosse ESN.",
    angle: "Proposer un renfort AI Engineering ponctuel pour les demandes qui sortent du standard Odoo : recherche sur les données métier, traitement documentaire, agents et intégrations LLM.",
    message: "Bonjour,\n\nJe suis tombé sur Xperdoo en regardant les intégrateurs Odoo qui accompagnent beaucoup de TPE/PME.\n\nJe suis AI Engineer / DevOps et je cherche quelques partenaires Odoo avec qui intervenir ponctuellement lorsqu'un client demande une brique IA qui sort du standard : agent connecté aux données, RAG, traitement documentaire, intégration LLM ou evals.\n\nL'idée n'est pas de faire de la régie, mais de prendre un lot technique bien défini et de vous rendre quelque chose que votre équipe peut reprendre derrière.\n\nEst-ce que vous commencez déjà à voir ce type de demandes ?",
    sourceLabel: "Odoo Partner Directory",
    sourceUrl: "https://www.odoo.com/fr_FR/partners/xperdoo-12252362"
  },
  {
    id: 102,
    company: "SAS ANOR",
    website: "https://www.anor-group.fr/",
    contact: "Cyrille",
    linkedin: "",
    score: 88,
    stage: "Découvert",
    tags: ["Odoo", "PME/ETI", "ERP"],
    why: "Partenaire Odoo historique avec 43 références, une taille moyenne de 7 utilisateurs et des PME/ETI dans de nombreux secteurs. Le contact direct public rend l'approche commerciale simple.",
    angle: "Se positionner comme capacité externe sur des lots IA courts lorsque leurs consultants Odoo rencontrent une demande spécifique.",
    message: "Bonjour Cyrille,\n\nJe suis tombé sur ANOR en regardant les partenaires Odoo qui accompagnent des PME sur des projets assez variés.\n\nJe suis AI Engineer / DevOps et je cherche quelques intégrateurs avec qui prendre ponctuellement les lots IA qui sortent du périmètre ERP classique : agents, RAG, traitement documentaire, intégrations LLM et evals.\n\nEst-ce que ce type de demande commence à apparaître chez certains de vos clients ?",
    sourceLabel: "Odoo Partner Directory",
    sourceUrl: "https://www.odoo.com/partners/sas-anor-29986768"
  },
  {
    id: 103,
    company: "EFFISCIENCE",
    website: "https://www.effiscience.fr/",
    contact: "Direction / responsable Odoo à identifier",
    linkedin: "",
    score: 86,
    stage: "Découvert",
    tags: ["Odoo", "Industrie", "PME"],
    why: "Intégrateur Odoo à taille humaine spécialisé dans les PME industrielles de 5 à 50 M€ de CA. Les environnements industriels offrent des cas concrets autour de documentation, support, qualité et données opérationnelles.",
    angle: "Parler de lots IA très opérationnels, pas de conseil abstrait : assistant documentaire, recherche métier, extraction ou agent connecté aux données Odoo.",
    message: "Bonjour,\n\nJe suis tombé sur EFFISCIENCE en regardant les intégrateurs Odoo spécialisés dans les PME industrielles.\n\nJe suis AI Engineer / DevOps et je cherche quelques partenaires avec qui prendre ponctuellement des briques IA très bornées autour des données métier : recherche documentaire, agents, RAG, extraction et intégrations LLM.\n\nEst-ce que vos clients industriels commencent à vous demander ce type d'usage ?",
    sourceLabel: "Odoo Partner Directory",
    sourceUrl: "https://www.odoo.com/fr_FR/partners/effiscience-11281139"
  },
  {
    id: 104,
    company: "HubEasy",
    website: "https://www.hubeasy.fr/fr",
    contact: "Rafik, co-fondateur",
    linkedin: "",
    score: 90,
    stage: "Découvert",
    tags: ["HubSpot", "CRM", "PME/ETI"],
    why: "Agence HubSpot orientée PME/ETI avec un profil très intégration : Salesforce, Shopify, LMS et autres outils connectés au CRM. C'est un bon point d'entrée pour des agents et workflows IA nécessitant davantage de code.",
    angle: "Compléter leur savoir-faire HubSpot par un renfort AI Engineering sur les cas qui nécessitent RAG, agents, evals ou backend spécifique.",
    message: "Bonjour Rafik,\n\nJe suis tombé sur HubEasy en regardant les intégrateurs HubSpot qui vont assez loin sur les connexions entre le CRM et les outils métier.\n\nJe suis AI Engineer / DevOps et je cherche quelques agences avec qui intervenir ponctuellement lorsque le besoin client dépasse l'automatisation CRM classique : agent connecté aux données, RAG, intégration LLM, evals ou backend spécifique.\n\nEst-ce que vous voyez déjà passer ce genre de demandes ?",
    sourceLabel: "HubEasy",
    sourceUrl: "https://www.hubeasy.fr/fr/contact"
  },
  {
    id: 105,
    company: "EVOGEST",
    website: "https://ecosystem.hubspot.com/fr/marketplace/explore/solutions-partners",
    contact: "Direction / associé à identifier",
    linkedin: "",
    score: 84,
    stage: "Découvert",
    tags: ["HubSpot", "ERP", "PME"],
    why: "Intégrateur de logiciels ERP/CRM pour petites et moyennes entreprises. Leur positionnement transverse HubSpot, EBP, matériel et réseau crée des besoins clients qui peuvent dépasser leur cœur de métier.",
    angle: "Être le spécialiste externe pour une brique IA précise plutôt qu'une offre IA générale.",
    message: "Bonjour,\n\nJe suis tombé sur EVOGEST en regardant les intégrateurs CRM/ERP qui travaillent avec des PME.\n\nJe suis AI Engineer / DevOps et je cherche quelques partenaires avec qui prendre ponctuellement des lots IA bien définis lorsqu'un client demande quelque chose qui sort du périmètre CRM/ERP classique.\n\nEst-ce que vous commencez à avoir ce type de demandes autour d'agents, recherche sur les données métier ou automatisations LLM ?",
    sourceLabel: "HubSpot Solutions Directory",
    sourceUrl: "https://ecosystem.hubspot.com/fr/marketplace/explore/solutions-partners"
  }
];
