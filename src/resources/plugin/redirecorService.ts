import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RedirectorService {

    constructor(private router: Router) { }

    private countdownTimer: any;
    private redirectTimer: any;
    private remainingTime: number = 9;
    private countdownSubject: Subject<number> = new Subject<number>();

    ngOnDestroy() {
        if (this.countdownTimer) {
            clearInterval(this.countdownTimer);
        }
        if (this.redirectTimer) {
            clearTimeout(this.redirectTimer);
        }
    }

    startCountdownAndRedirect(path: string, timer: number): Observable<number> {

        this.remainingTime = timer;
        this.countdownSubject = new Subject<number>();

        this.countdownTimer = setInterval(() => {
            this.remainingTime--;
            //console.log(`Redirecting in ${this.remainingTime} seconds...`);

            this.countdownSubject.next(this.remainingTime);

            if (this.remainingTime <= 0) {
                clearInterval(this.countdownTimer);
                this.router.navigateByUrl(path);
                this.countdownSubject.complete();
            }
        }, 1000);

        return this.countdownSubject.asObservable();
    }
}