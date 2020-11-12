import { UserService } from './../../../shared/services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss'],
})
export class DialogDeleteUserComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  deleteUser() {
    this.userService.delete(this.user).subscribe(res=>{
      console.log(res);
    });
  }
}
