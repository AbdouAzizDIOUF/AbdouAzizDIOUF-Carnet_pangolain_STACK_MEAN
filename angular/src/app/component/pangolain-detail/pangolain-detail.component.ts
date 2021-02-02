import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pangolain } from 'src/app/model/pangolain';
import {TokenStorageService} from '../../_services/token-storage.service';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-pangolain-detail',
  templateUrl: './pangolain-detail.component.html',
  styleUrls: ['./pangolain-detail.component.css']
})
export class PangolainDetailComponent implements OnInit {

  currentUser: any;
  pangolain: Pangolain = new Pangolain();
  activeDerail: boolean = true;

  registerForm: any;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private token: TokenStorageService,
    private pangolainService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if(!this.submitted){
      this.onGetInformationDetail();
    }
    this.registerForm = FormGroup;
    this.valideForm();
  }

  onGetInformationDetail(){
      this.pangolainService.onGetPangolainById(this.currentUser.id).subscribe(data =>{
        this.activeDerail = true;
        // @ts-ignore
        this.pangolain = data;
        console.log(data);
      }, error=>{
        console.log(error)
      });
  }

  onUpdate() {
    this.activeDerail = false;
  }

  private valideForm() {
      this.registerForm = this.formBuilder.group({
        age: ['', Validators.required],
        famille: ['', Validators.required],
        race: ['', Validators.required],
        nourriture: ['', Validators.required],
      });
    }

    get f() { return this.registerForm.controls; }

  onSubmitted() {
    this.submitted = true;
    this.pangolain.id = this.currentUser.id;
    console.log(this.pangolain);
    if (this.registerForm.invalid) {
      return;
    }else{
      this.submitted = false;
      this.pangolainService.onUpdatePangolain(this.pangolain).subscribe(data => {
        this.onGetInformationDetail();
      }, error => {
        console.log(error)
      })
      this.pangolain = new Pangolain();
    }
  }
}
