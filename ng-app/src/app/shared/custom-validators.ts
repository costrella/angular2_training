import {AbstractControl, FormGroup, ValidationErrors} from "@angular/forms";

export class CustomValidators {

  static atLeastOneShouldBeSelected(group: FormGroup) : ValidationErrors{

    if(Object.values(group.value).some((item) => {
        return item
    })){
      return;
    }

    console.log(group.value)

    return {
      atLeastOneShouldBeSelected: true
    }
  }

  static passedDateRequired(control: AbstractControl): ValidationErrors {

    if (control.value) {
      Date.parse('2017-11-07')

      Date.now()
      return;
    }

    return {
      passedDateRequired: true
    }

  }

}
