import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HeroService } from './hero-service/hero.service';
import { Hero, HeroPower } from './hero-service/hero.interface';
import { Utils } from './utils';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loading = true;
    results = 'No results yet, click on save';

    form: FormGroup;

    static createPowerControl(name: string, description: string): FormGroup {
        return new FormGroup({
            name: new FormControl(name, Validators.required),
            description: new FormControl(description),
        });
    }

    constructor (
        private heroService: HeroService,
    ) { }

    ngOnInit() {
        this.heroService.getAsyncData()
            .subscribe(hero => {
                this.initForm(hero);
                this.loading = false;
            });
    }

    initForm(hero: Hero) {
        const powerControls = hero.powers.map(power => AppComponent.createPowerControl(power.name, power.description));

        this.form = new FormGroup({
            name: new FormGroup({
                alias: new FormControl(hero.name.alias, Validators.required),
                realName: new FormControl(hero.name.realName),
            }),
            appearances: new FormGroup({
                comics: new FormControl(hero.appearances.comics),
                movies: new FormControl(hero.appearances.movies),
                games: new FormControl(hero.appearances.games),
            }),
            powers: new FormArray(powerControls, this.getPowersValidator()),
        });
    }

    getPowersValidator(): ValidatorFn {
        return (control: FormArray) => {
            if (control.length < 1) {
                return { powersValidation: 'tooLittle' };
            }
            if (control.length > 5) {
                return { powersValidation: 'tooMuch' };
            }
            return null;
        };
    }

    save() {
        if (this.form.valid) {
            this.results = 'Saving data:<br /><br />' + JSON.stringify(this.form.value, null, 4);
        } else {
            Utils.validateFormControls(this.form.controls);

            // this.form.markAsTouched();
            // this.form.markAsDirty();

            this.results = 'Form is invalid';
        }
    }
}
