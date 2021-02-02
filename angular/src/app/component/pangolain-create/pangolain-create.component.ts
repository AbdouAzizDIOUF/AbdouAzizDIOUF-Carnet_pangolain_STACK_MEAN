import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Pangolain } from 'src/app/model/pangolain';
import {UserService} from '../../_services/user.service';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-pangolain-create',
  templateUrl: './pangolain-create.component.html',
  styleUrls: ['./pangolain-create.component.css']
})
export class PangolainCreateComponent implements OnInit {

  public pangolain: Pangolain = new Pangolain();
  registerForm: any;
  submitted = false;
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private token: TokenStorageService,
    private router:Router, private pangolainService:UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.registerForm = FormGroup;
    this.valideForm();
  }


  onCreateEmployer() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.valid){
      this.submitted = false;
      this.pangolain.amie = this.currentUser.id;
      console.log(this.pangolain.amie);
      console.log(this.pangolain);
      this.pangolainService.onCreatePangolain(this.pangolain).subscribe(data => {
        return this.router.navigate(['/profile/liste']);
      }, error =>{
        console.log(error);
      })
      this.pangolain = new Pangolain();
    }
  }

  valideForm(){
    this.registerForm = this.formBuilder.group({
/*
      username: ['', Validators.required], //name: ['', [Validators.required, Validators.minLength(10)]],
*/
      age: ['', Validators.required],
      race: ['', Validators.required],
      famille: ['', Validators.required],
      nourriture: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmitted() {

  }
}
