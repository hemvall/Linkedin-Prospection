export type LeadStage =
  | "Découvert"
  | "Qualifié"
  | "À ajouter"
  | "Connecté"
  | "Message prêt"
  | "Contacté"
  | "Répondu";

export type Lead = {
  id: number;
  company: string;
  website: string;
  contact: string;
  linkedin?: string;
  score: number;
  stage: LeadStage;
  tags: string[];
  why: string;
  angle: string;
  message: string;
  position?: number;
  notes?: string;
  follow_up_at?: string | null;
  contacted_at?: string | null;
  replied_at?: string | null;
};

export const leads: Lead[] = [
  {
    id: 1,
    company: "Hors du Commun",
    website: "https://www.odoo.com/fr_FR/partners/hors-du-commun-lyon-22414312",
    contact: "Billy Felicie",
    linkedin: "https://www.linkedin.com/in/billyfelicie/",
    score: 94,
    stage: "À ajouter",
    tags: ["Odoo", "PME", "IA"],
    why: "Petite structure Odoo avec un décideur directement accessible. Billy communique déjà sur l'arrivée de l'IA dans Odoo, ce qui suggère un intérêt concret pour des usages IA métier.",
    angle: "Positionner Louis comme renfort AI Engineering sur les besoins IA qui sortent du standard Odoo : agents, RAG, traitement documentaire, intégrations LLM et évaluation.",
    message: "Bonjour Billy,\n\nJe suis tombé sur tes posts autour d'Odoo 20 et notamment toute la partie IA qui commence à arriver dans les usages métier.\n\nJe bosse comme AI Engineer / DevOps et je cherche justement à collaborer avec quelques intégrateurs plutôt que d'aller chercher directement des PME.\n\nL'idée n'est pas de faire du placement ou des missions de plusieurs mois : si un de tes clients a un besoin IA qui sort du standard Odoo, agent connecté aux données, RAG, traitement documentaire, intégration LLM, evals, etc., je peux prendre ce lot technique de façon autonome, éventuellement en marque blanche, puis vous rendre le code et la doc.\n\nEst-ce que tu commences déjà à avoir ce genre de demandes chez tes clients ?"
  },
  {
    id: 2,
    company: "Acus Conseil",
    website: "https://www.acus-conseil.fr/",
    contact: "Stéphane De Vreyer",
    linkedin: "",
    score: 92,
    stage: "À ajouter",
    tags: ["Odoo", "PME", "Data"],
    why: "Acus accompagne des PME sur la centralisation des outils et des données. C'est un terrain naturel pour des assistants métier, RAG, traitement documentaire et agents connectés à l'ERP.",
    angle: "Proposer un renfort ponctuel sur les usages IA autour des données Odoo, sans régie longue.",
    message: "Bonjour Stéphane,\n\nJe suis tombé sur Acus en regardant les intégrateurs Odoo qui accompagnent des PME sur la centralisation de leurs outils et données.\n\nPetite question : est-ce que certains de vos clients commencent à vous demander des usages IA autour de ces données, au-delà de ce qu'Odoo propose nativement ?\n\nJe suis AI Engineer / DevOps et je cherche justement 2-3 intégrateurs avec qui collaborer ponctuellement sur ce type de sujets : agents connectés aux données métier, RAG, traitement documentaire, intégrations LLM, etc.\n\nL'idée serait de pouvoir prendre en sous-traitance un lot technique bien défini lorsqu'un besoin se présente, principalement en asynchrone, puis de vous livrer quelque chose que votre équipe peut reprendre derrière.\n\nEst-ce que c'est un sujet que vous commencez à rencontrer ?"
  },
  {
    id: 3,
    company: "Synalit",
    website: "https://synalit.com/",
    contact: "Alexandre Gosselin",
    linkedin: "",
    score: 91,
    stage: "À ajouter",
    tags: ["Odoo", "Jeune agence", "PME"],
    why: "Jeune intégrateur Odoo avec une équipe réduite et des fondateurs directement impliqués dans les projets. Bon timing pour devenir leur renfort IA ponctuel avant internalisation.",
    angle: "Se positionner comme la personne à appeler lorsqu'un client demande une brique IA hors standard Odoo.",
    message: "Bonjour Alexandre,\n\nJe suis tombé sur Synalit en regardant les intégrateurs Odoo qui accompagnent des PME sur la centralisation de leurs outils et données.\n\nPetite question : est-ce que vous commencez à voir apparaître chez vos clients des demandes autour de l'IA qui sortent du standard Odoo ?\n\nJe suis AI Engineer / DevOps et je cherche justement 2-3 intégrateurs avec qui collaborer ponctuellement sur ce type de sujets : agents connectés aux données métier, RAG, traitement documentaire, intégrations LLM, etc.\n\nL'idée serait de pouvoir prendre en sous-traitance un lot technique bien défini lorsqu'un besoin se présente, principalement en asynchrone, puis de vous livrer quelque chose que votre équipe peut reprendre derrière.\n\nEst-ce que c'est un sujet que vous commencez à rencontrer ?"
  },
  {
    id: 4,
    company: "A-K-I",
    website: "https://www.a-k-i.fr/",
    contact: "Kenan Le Guen",
    linkedin: "",
    score: 90,
    stage: "Qualifié",
    tags: ["Odoo", "Automatisation", "PME"],
    why: "A-K-I centralise des processus métiers complets dans Odoo. Les projets mêlent ventes, achats, stocks, production et facturation, donc beaucoup de données exploitables par l'IA.",
    angle: "Questionner sur les demandes d'assistants ou d'agents IA une fois les process clients consolidés dans Odoo.",
    message: "Bonjour Kenan,\n\nJe suis tombé sur A-K-I en regardant les intégrateurs Odoo qui vont assez loin dans la centralisation des process clients.\n\nJe me demandais si vous commencez à voir apparaître des demandes autour de l'exploitation de ces données par des assistants ou agents IA.\n\nJe suis AI Engineer / DevOps et je cherche quelques intégrateurs avec qui prendre ponctuellement ce type de lots techniques en sous-traitance, principalement en asynchrone, puis vous laisser quelque chose que l'équipe peut reprendre derrière.\n\nEst-ce que c'est déjà un sujet chez certains de vos clients ?"
  },
  {
    id: 5,
    company: "Skillseize",
    website: "https://www.skillseize.fr/",
    contact: "Jonathan Mutschler",
    linkedin: "",
    score: 93,
    stage: "Message prêt",
    tags: ["Odoo", "Indépendant", "PME"],
    why: "Intégrateur Odoo indépendant, donc décideur directement accessible. Il centralise déjà les données et outils des PME, ce qui crée naturellement des opportunités IA adjacentes.",
    angle: "Devenir son renfort AI Engineering ponctuel quand un client demande un usage IA qu'il ne souhaite pas développer lui-même.",
    message: "Bonjour Jonathan,\n\nQuestion un peu particulière : maintenant que tu centralises les données de tes clients dans Odoo, est-ce que certains commencent à te demander des usages IA dessus ?\n\nJe suis AI Engineer / DevOps et je cherche justement 2-3 intégrateurs Odoo avec qui collaborer ponctuellement sur ce type de sujets : agents connectés aux données, RAG, traitement documentaire, intégrations LLM, etc.\n\nL'idée serait de prendre en sous-traitance un lot technique bien défini, principalement en asynchrone, puis de livrer quelque chose que vous pouvez reprendre derrière.\n\nEst-ce que c'est un besoin que tu commences à voir apparaître chez tes clients ?"
  },
  {
    id: 6,
    company: "OPTIDOO",
    website: "https://www.optidoo.fr/",
    contact: "Simon Guillemain",
    linkedin: "",
    score: 88,
    stage: "Qualifié",
    tags: ["Odoo", "Automatisation"],
    why: "Petite structure Odoo orientée automatisation. Bon fit pour une collaboration sur des besoins IA périphériques que l'équipe ne souhaite pas internaliser.",
    angle: "Renfort IA externalisé pour agents, RAG, intégrations LLM et automatisations avancées.",
    message: "Bonjour Simon,\n\nJe suis tombé sur OPTIDOO en regardant les intégrateurs Odoo orientés automatisation.\n\nEst-ce que certains de vos clients commencent à vous demander des briques IA qui dépassent le standard Odoo : agents, RAG, traitement documentaire ou intégrations LLM ?\n\nJe suis AI Engineer / DevOps et je cherche quelques intégrateurs avec qui prendre ponctuellement ce type de lots en sous-traitance, sans régie longue.\n\nCurieux de savoir si vous voyez déjà ce genre de demandes."
  },
  {
    id: 7,
    company: "Teoplan",
    website: "https://www.teoplan.com/",
    contact: "Sébastien Tahot",
    linkedin: "",
    score: 89,
    stage: "Message prêt",
    tags: ["Odoo", "Automatisation", "Solo"],
    why: "Structure très légère orientée Odoo et automatisation des process PME. Un partenaire externe peut absorber les demandes IA sans recrutement.",
    angle: "Être la personne à appeler lorsqu'un besoin IA spécifique apparaît chez un client.",
    message: "Bonjour Sébastien,\n\nJe suis tombé sur Teoplan en regardant les intégrateurs qui accompagnent les PME sur Odoo et l'automatisation de leurs process.\n\nPetite question : est-ce que tes clients commencent à te demander des choses autour de l'IA une fois leurs données centralisées dans Odoo ?\n\nJe suis AI Engineer / DevOps et je cherche justement quelques intégrateurs avec qui travailler ponctuellement sur ces sujets : agent connecté aux données, RAG, traitement documentaire, intégration LLM, etc.\n\nL'idée serait simplement que lorsqu'un besoin IA un peu spécifique arrive chez un client, je puisse prendre le lot technique en sous-traitance plutôt que tu aies à développer cette compétence en interne.\n\nEst-ce que tu vois déjà passer ce genre de demandes ?"
  },
  {
    id: 8,
    company: "Yuzu Corp",
    website: "https://www.yuzucorp.com/",
    contact: "Harry Marteau",
    linkedin: "https://www.linkedin.com/in/harry-marteau/",
    score: 87,
    stage: "Message prêt",
    tags: ["HubSpot", "RevOps", "B2B"],
    why: "Agence HubSpot B2B avec accès direct à la donnée CRM et aux workflows commerciaux. Terrain idéal pour agents sales/support et automatisations IA connectées au CRM.",
    angle: "Prendre ponctuellement les besoins AI Engineering qui sortent du périmètre habituel de l'agence.",
    message: "Bonjour Harry,\n\nJe suis tombé sur Yuzu en regardant les agences qui accompagnent des équipes B2B autour de HubSpot et de leurs problématiques CRM.\n\nJe me demandais : est-ce que vous commencez à avoir des clients qui vous demandent d'aller plus loin avec l'IA sur leurs données HubSpot, par exemple agents commerciaux, exploitation du CRM, recherche sur la connaissance client ou automatisations plus poussées ?\n\nJe suis AI Engineer / DevOps et je cherche quelques partenaires avec qui intervenir ponctuellement lorsque ce type de besoin sort du périmètre habituel de l'agence.\n\nL'idée n'est pas de faire de la régie, mais de prendre un lot technique précis en sous-traitance, le construire et vous laisser quelque chose que votre équipe peut reprendre derrière.\n\nCurieux de savoir si c'est déjà un sujet chez vos clients."
  },
  {
    id: 9,
    company: "LOOKAHEAD",
    website: "https://lookahead.fr/",
    contact: "Luka Gallagher",
    linkedin: "",
    score: 80,
    stage: "Découvert",
    tags: ["n8n", "Make", "Automation"],
    why: "Prestataire automatisation proche techniquement du positionnement visé. Moins évident que les intégrateurs Odoo, mais intéressant pour absorber les projets trop orientés code, LLMOps ou infrastructure.",
    angle: "Se présenter comme renfort technique sur la partie AI Engineering/LLMOps lorsque les automatisations deviennent trop spécifiques.",
    message: "Bonjour Luka,\n\nJe suis tombé sur LOOKAHEAD en regardant les structures qui font de l'automatisation pour les PME.\n\nJe suis AI Engineer / DevOps et je cherche quelques partenaires avec qui prendre ponctuellement la partie plus technique de certains projets : RAG, agents, intégrations LLM, evals ou déploiement.\n\nEst-ce qu'il t'arrive d'avoir des demandes clients qui dépassent le périmètre n8n/Make et nécessitent davantage de code ou d'infra ?"
  },
  {
    id: 10,
    company: "Advences",
    website: "https://www.advences.com/",
    contact: "Ridha Bouasker",
    linkedin: "",
    score: 82,
    stage: "Découvert",
    tags: ["Odoo", "ERP", "IA"],
    why: "Intégrateur Odoo plus structuré, déjà sensibilisé aux agents IA. Potentiel de volume client plus important, même si la concurrence interne est plus forte.",
    angle: "Renfort ponctuel sur des POC et lots AI Engineering nécessitant une expertise spécifique ou de la bande passante.",
    message: "Bonjour Ridha,\n\nJe suis tombé sur Advences en regardant les intégrateurs Odoo qui commencent déjà à aborder les usages agents et IA.\n\nJe suis AI Engineer / DevOps et je cherche à travailler ponctuellement avec quelques intégrateurs sur des lots techniques courts : agents connectés aux données métier, RAG, evals, intégrations LLM et déploiement.\n\nEst-ce que vous avez parfois besoin de capacité externe sur ce type de sujets lorsque le besoin client est bien défini ?"
  }
];
