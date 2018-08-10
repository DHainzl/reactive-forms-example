import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-hero-details',
    templateUrl: './hero-details.component.html',
})
export class HeroDetailsComponent {
    @Input()
    form: FormGroup;
}
