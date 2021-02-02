import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service';
import {UserService} from '../../_services/user.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Pangolain} from '../../model/pangolain';


@Component({
  selector: 'app-pangolain-liste',
  templateUrl: './pangolain-liste.component.html',
  styleUrls: ['./pangolain-liste.component.css']
})
export class PangolainListeComponent implements OnInit {

  currentUser: any;
  public pangolains: any = [];
  public countPangolain: number = 0;
  private deleteId: any;

  public pangolain: Pangolain = new Pangolain();

  constructor(
    private token: TokenStorageService,
    private pangolainService: UserService,
    private router: Router,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.id)
    this.getListePangolains();
  }


  public btoa(id:any) {
    return btoa(id);
  }

  getListePangolains() {
    this.pangolainService.onGetPangolainsByFriends(this.currentUser.id).subscribe(data => {
      console.log(data)
      this.pangolains = data;
    }, error =>{
      console.log(error);
    })
  }

  openDelete(targetModal: any, pangol: any) {
    this.deleteId = pangol;
    console.log(this.deleteId);
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDeletePangolain() {
    this.pangolainService.onRemovePangolain(this.deleteId).subscribe(data =>{
      this.getListePangolains();
      this.modalService.dismissAll();
    }, error => {
      console.log(error);
    });
  }

}
