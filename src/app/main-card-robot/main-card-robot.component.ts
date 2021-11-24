import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-card-robot',
  templateUrl: './main-card-robot.component.html',
  styleUrls: ['./main-card-robot.component.css']
})
export class MainCardRobotComponent implements OnInit {
  disExecProgram : boolean = false;
  robot = {
    id : 1,
    nom : "Edmon",
    statut : "En arrêt",
    adresse_ip : "192.168.1.15",
    programmes: ["Programme 1", "Programme 2","Programme 3","Programme 4"],
    programme_execute : "Programme 2",
    KPIs :[
      {
        "label": "Temps d'exécution",
        "valeur": "00:10:30"
      },
      {
        "label": "Prises",
        "valeur": 10
      },
      {        
        "label": "Erreurs",
         "valeur": 3
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
    if(!this.robot.programme_execute)
        this.disExecProgram = true
  }

  onChangeProgram(event){
    event.target.value ? this.disExecProgram = false : this.disExecProgram = true;
  }

}
