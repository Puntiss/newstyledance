import { Component, DoCheck, ViewEncapsulation } from '@angular/core';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { CommonModule } from '@angular/common';
import { ScuolaDanzaNavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, } from '@angular/router';
import { Lesson, LoadExcelHours, LocationType, Schedule, WeeklyLocationRowType } from '../../../resources/plugin/loadExcelHours';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export interface AllWeekLocation {
  locationName: string;
  weeklyPrograms: WeeklyLocationRowType[];
}



@Component({
  selector: 'app-scuola-danza-planning',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    ContactBarComponent,
    ScuolaDanzaNavbarComponent
  ],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ScuolaDanzaPlanningComponent implements DoCheck {
  constructor(private activeRoute: ActivatedRoute, private loadExcelHours: LoadExcelHours) { }

  faSortDown = faSortDown;

  location: string = "unknown";
  dataTable: AllWeekLocation[] = []

  ngDoCheck(): void {
    this.location = this.activeRoute.snapshot.queryParamMap.get('location') as string;
  }

  ngOnInit(): void {
    this.loadExcelHours.getLocations("scuola-danza").then(locations =>
      locations.forEach((location: LocationType) => {
        this.loadExcelHours.loadfromHours("scuola-danza", location.nome).then(
          (weeklyPrograms) => {
            this.dataTable.push({ locationName: location.nome, weeklyPrograms: weeklyPrograms })
            console.log(this.dataTable);
          }
        )
      }));
  }

  filterByLocation(): WeeklyLocationRowType[] {
    let result: WeeklyLocationRowType[] = []
    this.dataTable.forEach((dt) => { if (dt.locationName == this.location) result = dt.weeklyPrograms });
    return result;
  }

  getLesson(time: string, col: number, schedule: Schedule): Lesson | undefined {
    return schedule.lessons.find(l => l.time === time && l.col === col);
  }

  isCovered(time: string, col: number, schedule: Schedule): boolean {
    const index = schedule.times.indexOf(time);
    return schedule.lessons.some(l => {
      const start = schedule.times.indexOf(l.time);
      return l.col === col && index > start && index < start + l.span;
    });
  }
}

