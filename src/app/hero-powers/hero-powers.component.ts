import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-hero-powers',
    templateUrl: './hero-powers.component.html',
})
export class HeroPowersComponent {
    @Input()
    form: FormGroup;

    addPowerClicked() {
        (<FormArray>this.form.controls.powers).push(AppComponent.createPowerControl('', ''));
    }

    removePower(idx: number) {
        (<FormArray>this.form.controls.powers).removeAt(idx);
    }
}
