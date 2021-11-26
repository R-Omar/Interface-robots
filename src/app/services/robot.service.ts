import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ROBOTS } from '../mock-robots';
import { IRobot } from '../models/IRobot';

@Injectable({
  providedIn: 'root',
})
export class RobotService {
  private robotsSubject: BehaviorSubject<IRobot[]>;
  private robots: Array<IRobot> 

  constructor() {
    this.robots = ROBOTS;
    this.robotsSubject = new BehaviorSubject(this.robots);
    setInterval(() => {
      this.robotsSubject.next(this.simulateRobotsBehavior());
    }, 1000);
  }

  getAllRobots(): BehaviorSubject<IRobot[]> {
    return this.robotsSubject;
  }

  updateRobotStatus(id, status) {
    let robot = this.robots.find((robot) => robot.id === id);
    robot.statut = status;
    if (status === 'En arrêt') {
      robot.KPIs.forEach((KPI) => (KPI.valeur = null));
    }
  }

  updateRobotProgram(id, program) {
    let robot = this.robots.find((robot) => robot.id === id);
    robot.programme_execute = program;
    robot.statut = 'En marche';
    robot.KPIs.forEach((KPI) => {
      if (KPI.label === "Temps d'exécution") KPI.valeur = '00:00:00';
      else KPI.valeur = 0;
    });
  }

  //Cette méthode est seulement pour simuler le comportement des robots en marche
  simulateRobotsBehavior(): IRobot[] {
    this.robots
      .filter((robot) => robot.statut === 'En marche')
      .forEach((robot) => {
        // incrémenter le temps d'exécution
        let executionTimeKPI = robot.KPIs.filter(
          (KPI) => KPI.label === "Temps d'exécution"
        )[0];
        let [hours, minutes, seconds] = executionTimeKPI.valeur.split(':');
        let totalSeconds = +hours * 60 * 60 + +minutes * 60 + +seconds + 1;
        executionTimeKPI.valeur = new Date(totalSeconds * 1000)
          .toISOString()
          .substr(11, 8);
        // incrémenter le nombre de prise

        // incrémenter execution time by 1 sec
      });
    return this.robots;
  }
}
