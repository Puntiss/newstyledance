import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { LoadExcelTeacher, TeacherRowType } from '../../resources/plugin/loadExcelTeacher';
import { ScuolaDanzaNavbarComponent } from '../navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { InsegnanteComponent } from '../../common/insegnante/insegnante.component';


@Component({
  selector: 'app-scuola-danza-insegnanti',
  standalone: true,
  imports: [
    CommonModule,
    ContactBarComponent,
    ScuolaDanzaNavbarComponent,
    FontAwesomeModule,
    InsegnanteComponent
  ],
  templateUrl: './insegnanti.component.html',
  styleUrl: './insegnanti.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ScuolaDanzaInsegnantiComponent {

  constructor(private loadExcelTeacher: LoadExcelTeacher) { }

  teacherDescription: string = "";
  showDesc: boolean = false;
  faCircleInfo = faCircleInfo;
  dataTable: TeacherRowType[] = [];

  ngOnInit(): void {
    this.loadExcelTeacher.loadfromTeacherXLSX().then(
      (data) => {
        this.dataTable = data;
        console.log(this.dataTable);
      }
    );
  }

}
