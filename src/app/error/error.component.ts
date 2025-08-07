import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RedirectorService } from '../resources/plugin/redirecorService';


@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ErrorComponent implements OnInit {

  constructor(private redirectorService: RedirectorService) { }

  remainingTime: number = 9;

  ngOnInit() {
    this.redirectorService.startCountdownAndRedirect("/", this.remainingTime).subscribe(
      (time) => {
        this.remainingTime = time;
      }
    )
  }

}
