import { CommonModule } from '@angular/common';
import { Component, DoCheck, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { LoadExcelHours, LocationType, WeeklyLocationRowType } from '../../../resources/plugin/loadExcelHours';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { ScuolaDanzaNavbarComponent } from '../navbar/navbar.component';

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

}

