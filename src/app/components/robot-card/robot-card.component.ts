import { Component, OnInit, Input} from '@angular/core';
import { RobotService } from 'src/app/services/robot.service';
import { IRobot } from '../../models/IRobot';

@Component({
  selector: 'robot-card',
  templateUrl: './robot-card.component.html',
  styleUrls: ['./robot-card.component.css']
})
export class MainRobotCardComponent implements OnInit {
  selectedProg : string = null;
  disableExecPro: boolean = true ;
  
  @Input() robot: IRobot;
  @Input() sideCard: boolean;

  constructor(private robotService : RobotService) { }

  ngOnInit(): void {}

  onChangeProgram(event){
    this.selectedProg = event.target.value;
    console.log(this.selectedProg)
    this.disableExecPro = !this.selectedProg;
  }

  onStartProgram(id:number){
    if(this.selectedProg)
      this.robotService.updateRobotProgram(id,this.selectedProg);
  }

  onUpdateRobotStatus(id:number,status:string){
    this.robotService.updateRobotStatus(id,status);
  }

  getStatusColor(){
    switch (this.robot.statut) {
      case "En marche":
        return ["bg-success"]
      case "En pause":
        return ["bg-warning"]
      case "En arrêt":
        return ["bg-danger"]
      default:
        return ["bg-light"]
    }
  }

}