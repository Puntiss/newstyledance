import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PreMenuComponent } from './pre-menu/pre-menu.component';
import { ScuolaDanzaChiSiamoComponent } from './scuola-danza/chisiamo/chisiamo.component';
import { ScuolaDanzaLocationComponent } from './scuola-danza/location/location.component';
import { ScuolaDanzaPlanningComponent } from './scuola-danza/planning/planning.component';
import { ScuolaDanzaInsegnantiComponent } from './scuola-danza/insegnanti/insegnanti.component';
import { AccademiaDanzaChiSiamoComponent } from './accademia-danza/chisiamo/chisiamo.component';
import { AccademiaDanzaLocationComponent } from './accademia-danza/location/location.component';
import { AccademiaDanzaPlanningComponent } from './accademia-danza/planning/planning.component';
import { AccademiaDanzaInsegnantiComponent } from './accademia-danza/insegnanti/insegnanti.component';
import { AccademiaDanzaAudizioniComponent } from './accademia-danza/audizioni/audizioni.component';
import { CentroFormazioneChiSiamoComponent } from './centro-formazione/chisiamo/chisiamo.component';
import { CentroFormazioneLocationComponent } from './centro-formazione/location/location.component';
import { EventiDanzaChiSiamoComponent } from './eventi-danza/chisiamo/chisiamo.component';
import { EventiDanzaProductionComponent } from './eventi-danza/production/production.component';
import { EventiDanzaAudizioniComponent } from './eventi-danza/audizioni/audizioni.component';
import { ScuolaDanzaConcorsiComponent } from './scuola-danza/concorsi/concorsi.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: '', redirectTo: 'pre-menu', pathMatch: 'full' },
    { path: 'pre-menu', component: PreMenuComponent },
    /*scuola danza*/
    { path: 'scuola-danza-chi-siamo', component: ScuolaDanzaChiSiamoComponent },
    { path: 'scuola-danza-dove-siamo', component: ScuolaDanzaLocationComponent },
    { path: 'scuola-danza-orari', component: ScuolaDanzaPlanningComponent },
    { path: 'scuola-danza-docenti', component: ScuolaDanzaInsegnantiComponent },
    { path: 'scuola-danza-concorsi', component: ScuolaDanzaConcorsiComponent },
    /*accademia danza*/
    { path: 'accademia-danza-chi-siamo', component: AccademiaDanzaChiSiamoComponent },
    { path: 'accademia-danza-dove-siamo', component: AccademiaDanzaLocationComponent },
    { path: 'accademia-danza-orari', component: AccademiaDanzaPlanningComponent },
    { path: 'accademia-danza-docenti', component: AccademiaDanzaInsegnantiComponent },
    { path: 'accademia-danza-audizioni', component: AccademiaDanzaAudizioniComponent },
    /*centro di formazione*/
    { path: 'centro-formazione-chi-siamo', component: CentroFormazioneChiSiamoComponent },
    { path: 'centro-formazione-dove-siamo', component: CentroFormazioneLocationComponent },
    /*produzione ed eventi*/
    { path: 'eventi-danza-chi-siamo', component: EventiDanzaChiSiamoComponent },
    { path: 'eventi-danza-audizioni', component: EventiDanzaAudizioniComponent },
    { path: 'eventi-danza-produzioni', component: EventiDanzaProductionComponent },
     /*gallery*/
    { path: 'gallery', component: GalleryComponent },
    /*altro*/
    { path: '**', component: ErrorComponent }
];
