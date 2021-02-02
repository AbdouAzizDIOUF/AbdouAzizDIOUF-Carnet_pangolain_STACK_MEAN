import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {UserService} from '../../_services/user.service';
import {Pangolain} from '../../model/pangolain';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pangolain-esapace',
  templateUrl: './pangolain-esapace.component.html',
  styleUrls: ['./pangolain-esapace.component.css']
})
export class PangolainEsapaceComponent implements OnInit {

  currentUser: any;
  pangolain: Pangolain = new Pangolain();

  constructor(
    private route: ActivatedRoute,
    private pangolainService: UserService,
    private router: Router,
    private token: TokenStorageService,
    ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    let id = atob(this.route.snapshot.params.id);
    this.onGetPangolain(id)
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

}
