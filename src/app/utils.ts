import { AbstractControl } from '@angular/forms';

export class Utils {
    public static validateFormControls(formControls: ({ [key: string]: AbstractControl }) | AbstractControl[]): void {
        Object.keys(formControls)
            .map(key => formControls[key])
            .forEach(control => {
                control.markAsTouched();
                control.markAsDirty();

                if (control['controls']) {
                    Utils.validateFormControls(control['controls']);
                }
            });
    }
}
