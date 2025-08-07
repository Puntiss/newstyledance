import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TeacherRowType } from '../../../resources/plugin/loadExcelTeacher';

@Component({
  selector: 'insegnante',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './insegnante.component.html',
  styleUrl: './insegnante.component.css',
  encapsulation: ViewEncapsulation.None
})
export class InsegnanteComponent {

  @Input()
  data: TeacherRowType = {
    category: "",
    path: "",
    nome: "",
    description: ""
  };

  @Input()
  index: number = 0;

  buttonText: string = "Scheda Docente";

  switchView() {

    var textareaRef = document.getElementsByTagName("textarea")[this.index];
    var imgRef = document.getElementsByTagName("img")[this.index];

    if (textareaRef != null)
      if (textareaRef.style.display == "block")
        textareaRef.style.display = "none";
      else
        textareaRef.style.display = "block";

    if (imgRef != null)
      if (imgRef.style.display == "block")
        imgRef.style.display = "none";
      else
        imgRef.style.display = "block";

    if (this.buttonText == "Scheda Docente")
      this.buttonText = "Infografica";
    else
      this.buttonText = "Scheda Docente";
  }
}
