import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../../_services/user.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Pangolain} from '../../model/pangolain';

@Component({
  selector: 'app-pangolain-update',
  templateUrl: './pangolain-update.component.html',
  styleUrls: ['./pangolain-update.component.css']
})
export class PangolainUpdateComponent implements OnInit {

  public pangolain: Pangolain = new Pangolain();
  registerForm: any;
  submitted = false;
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private pangolainService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private token: TokenStorageService,
    ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    let id = atob(this.route.snapshot.params.id);
    console.log(id);
    this.onGetPangolain(id);
    this.registerForm = FormGroup;
    this.valideForm();
  }

  onGetPangolain(id:any) {
    this.pangolainService.onGetPangolainById_(id).subscribe(data =>{
      // @ts-ignore
      this.pangolain = data;
      console.log(data);
    }, error=>{
      console.log(error)
    });
  }


  onUpdatePangolain() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }else{
      this.submitted = false;
      this.pangolainService.onUpdatePangolain_(this.pangolain).subscribe(data => {
        return this.router.navigate(['/profile/liste']);
      }, error => {
        console.log(error)
      })
      this.pangolain = new Pangolain();
    }
  }

  valideForm(){
    this.registerForm = this.formBuilder.group({
      age: ['', Validators.required],
      race: ['', Validators.required],
      famille: ['', Validators.required],
      nourriture: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    });
  }


  get f() { return this.registerForm.controls; }

}
