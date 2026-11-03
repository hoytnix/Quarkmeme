export interface CustomAgentMapping {
  id:
    | 'captain-core'
    | 'scholar-robin'
    | 'shipwright-franky'
    | 'navigator-nami'
    | 'doctor-chopper'
    | 'chef-sanji'
    | 'sniper-usopp';
  role:
    | 'Captain'
    | 'Scholar'
    | 'Shipwright'
    | 'Navigator'
    | 'Doctor'
    | 'Cook'
    | 'Sniper';
  characterName: string;
  thematicTitle: string;
  systemPrompt: string;
  routingDescription: string;
  avatarIcon?: string;
}

export interface CustomUniverseResponse {
  universeName: string;
  defaultGroup: string;
  tagline: string;
  leaderTitle: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  characters: CustomAgentMapping[];
}
