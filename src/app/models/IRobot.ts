export interface IRobot {
    id: number;
    nom: string;
    statut: string;
    adresse_ip: string;
    KPIs: Array<{label:string, valeur}>;
    programmes: Array<String>;
    programme_execute : string;
  }