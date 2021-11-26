import { IRobot } from './models/IRobot';

export const ROBOTS: IRobot[] = [
  {
    id: 1,
    nom: 'Edmon',
    statut: 'En marche',
    adresse_ip: '192.168.1.15',
    programmes: ['Programme 1', 'Programme 2', 'Programme 3', 'Programme 4'],
    programme_execute: 'Programme 2',
    KPIs: [
      {
        label: "Temps d'exécution",
        valeur: '00:10:30',
      },
      {
        label: 'Prises',
        valeur: 10,
      },
      {
        label: 'Erreurs',
        valeur: 3,
      },
    ],
  },
  {
    id: 2,
    nom: 'Ned',
    statut: 'En marche',
    adresse_ip: '192.168.1.15',
    programmes: ['Programme 1', 'Programme 2', 'Programme 3'],
    programme_execute: 'Programme 3',
    KPIs: [
      {
        label: "Temps d'exécution",
        valeur: '00:05:10',
      },
      {
        label: 'Prises',
        valeur: 7,
      },
      {
        label: 'Erreurs',
        valeur: 0,
      },
    ],
  },
  {
    id: 3,
    nom: 'John',
    statut: 'En arrêt',
    adresse_ip: '192.168.1.15',
    programmes: ['Programme 1', 'Programme 2', 'Programme 3', 'Programme 4'],
    programme_execute: null,
    KPIs: [
      {
        label: "Temps d'exécution",
        valeur: null,
      },
      {
        label: 'Prises',
        valeur: null,
      },
      {
        label: 'Erreurs',
        valeur: null,
      },
    ],
  },
  {
    id: 4,
    nom: 'Doe',
    statut: 'En pause',
    adresse_ip: '192.168.1.15',
    programmes: ['Programme 1', 'Programme 2', 'Programme 3', 'Programme 4'],
    programme_execute: 'Programme 4',
    KPIs: [
      {
        label: "Temps d'exécution",
        valeur: '00:08:30',
      },
      {
        label: 'Prises',
        valeur: 23,
      },
      {
        label: 'Erreurs',
        valeur: 5,
      },
    ],
  },
  {
    id: 5,
    nom: 'Pepper',
    statut: 'En pause',
    adresse_ip: '192.168.1.15',
    programmes: ['Programme 1', 'Programme 2', 'Programme 3', 'Programme 4'],
    programme_execute: 'Programme 2',
    KPIs: [
      {
        label: "Temps d'exécution",
        valeur: '00:10:30',
      },
      {
        label: 'Prises',
        valeur: 10,
      },
      {
        label: 'Erreurs',
        valeur: 3,
      },
    ],
  },
  {
    id: 6,
    nom: 'Sophia',
    statut: 'En arrêt',
    adresse_ip: '192.168.1.15',
    programmes: ['Programme 1', 'Programme 2', 'Programme 3', 'Programme 4'],
    programme_execute: 'Programme 2',
    KPIs: [
      {
        label: "Temps d'exécution",
        valeur: null,
      },
      {
        label: 'Prises',
        valeur: null,
      },
      {
        label: 'Erreurs',
        valeur: null,
      },
    ],
  }
];