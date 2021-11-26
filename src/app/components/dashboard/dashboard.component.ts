import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IRobot } from 'src/app/models/IRobot';
import { RobotService } from 'src/app/services/robot.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  robots: IRobot[];
  routeRobotId: number;
  mainRobot: IRobot;

  constructor(private robotService: RobotService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.robotService.getAllRobots().subscribe(
      (data) => (this.robots = data),
      (error) => console.log(error)
    );

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.routeRobotId = parseInt(params.get('id'));
    });
  }

  //if there is a robot in the array with the same id specified in the route,use it as the main robot
  //otherwise use the first robot in the list as the main robot
  getMainRobot(): IRobot {
    this.mainRobot =
      this.robots.find((robot) => robot.id === this.routeRobotId) ||
      this.robots[0];
    return this.mainRobot;
  }

  getSideRobotsList(): IRobot[] {
    return this.robots.filter((robot) => robot.id !== this.mainRobot.id);
  }
}
