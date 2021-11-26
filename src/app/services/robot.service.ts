import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MockRobots} from './mock-robots.service';
import { IRobot } from '../models/IRobot';

@Injectable({
  providedIn: 'root',
})
export class RobotService {

  constructor(private mockRobots : MockRobots) {}

  getAllRobots(): BehaviorSubject<IRobot[]> {
    return this.mockRobots.getAllRobots();
  }

  updateRobotStatus(id, status) : Observable<IRobot>{
    return this.mockRobots.updateRobotStatus(id,status);
  }

  updateRobotProgram(id, program) : Observable<IRobot>{
    return this.mockRobots.updateRobotProgram(id,program);
  }
}
