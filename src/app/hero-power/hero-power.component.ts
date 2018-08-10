import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-hero-power',
    templateUrl: './hero-power.component.html',
})
export class HeroPowerComponent {
    @Input()
    id: number;

    @Input()
    power: FormGroup;

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    removeClick () {
        this.remove.emit();
    }
}
