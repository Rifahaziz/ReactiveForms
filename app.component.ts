import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveFormsApp';
  myForm : FormGroup; 
  bform : FormGroup;
  

  constructor(private fb : FormBuilder){

  }
  ngOnInit(){
    this.myForm = new FormGroup(
      {
        name : new FormControl(''),
        email : new FormControl(''),
        message : new FormControl('')
      }
    );

    this.bform = this.fb.group(
      {
        name : ['', Validators.required],
        email : ['', [Validators.required, Validators.pattern('[a-z0-9.@]*[.com]')]],
        message: ['', [Validators.required, Validators.minLength(15)]]
        
      }
    );

  }

  onSubmit(f : FormGroup){
    console.log('validity???', f.valid);
    console.log('name is - ', f.value.name);
    console.log('email is - ', f.value.email);
    console.log('message written - ', f.value.message);
    
  }
  bSubmit(f : FormGroup){
    console.log('validity???', f.valid);
    console.log('name is - ', f.value.name);
    console.log('email is',f.value.email);

    console.log(this.bform.get('name').hasError('required'));
    
}
}
