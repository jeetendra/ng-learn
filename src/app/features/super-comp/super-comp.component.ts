import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-super-comp',
  templateUrl: './super-comp.component.html',
  styleUrls: ['./super-comp.component.css']
})
export class SuperCompComponent implements OnInit {
  list: Array<any> = [];
  formControl: FormControl;
  constructor() { }

  ngOnInit() {
    this.list.push(...['Val1', 'Val2', 'Val3']);

    this.formControl = new FormControl('formControl 1');
    console.log(this.formControl.value);

    this.formControl = new FormControl({value : 'formControl 2', disabled: true});
    console.log(this.formControl);

    this.formControl = new FormControl({value : 'formControl 3', disabled: true}, Validators.required);
    console.log(this.formControl);

    this.formControl = new FormControl( 'Form Ctrl value', {
      validators: [Validators.required],
      updateOn: 'blur'
    });


    const form = new FormGroup(
      {
        first : new FormControl('Jeetendra'),
        last: new FormControl('Singh')
      }
    );

    console.log(form);

    const passGroup = new FormGroup({
      password: new FormControl('passwd', Validators.minLength(2)),
      confirmPassword: new FormControl('', Validators.minLength(2))
    }, passwordmatchValidator);

    function passwordmatchValidator(g: FormGroup) {
      return g.get('password').value === g.get('confirmPassword').value
      ? null : {mismatch: true} ;
    }

    console.log(passGroup.valid);

    passGroup.setValue({
      password : 'passwd',
      confirmPassword : 'passwd'
    });

    console.log(passGroup.valid);

    passGroup.patchValue({
      confirmPassword : {value: 'passwd2', disabled: true}
    });

    console.log(passGroup.getRawValue(), passGroup.value);


  }

  addComp() {
    this.list.push('Val4');
  }

}



