import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroService } from './test-service/hero.service';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroPowersComponent } from './hero-powers/hero-powers.component';
import { HeroPowerComponent } from './hero-power/hero-power.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailsComponent,
        HeroPowersComponent,
        HeroPowerComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
