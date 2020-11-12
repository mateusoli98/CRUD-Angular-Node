import { User } from './../../shared/models/user.model';
import { UserService } from './../../shared/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() userDataSource: MatTableDataSource<User>;
  formUser: FormGroup;
  userSelected: User;
  isEdit: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initalForm();
    this.listUsers();
  }

  initalForm() {
    this.formUser = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(120)]],
    });
  }

  get name() {
    return this.formUser.get('name');
  }

  get email() {
    return this.formUser.get('email');
  }

  get age() {
    return this.formUser.get('age');
  }

  listUsers() {
    this.userService.list().subscribe((res: any) => {
      this.userDataSource = new MatTableDataSource(res);
    });
  }

  createUser() {
    this.userService.create(this.formUser.value).subscribe(() => {
      this.listUsers();
      this.formUser.reset();
    });
  }

  updateUser() {
    this.loadDataUpdate();
    this.userService.update(this.userSelected).subscribe(() => {
      this.isEdit = false;
      this.formUser.reset();
      this.listUsers();
    });
  }

  loadDataForm(user: User) {
    this.userSelected = user;
    this.name.setValue(this.userSelected.name);
    this.email.setValue(this.userSelected.email);
    this.age.setValue(this.userSelected.age);
    this.isEdit = true;
  }

  loadDataUpdate() {
    this.userSelected.name = this.name.value;
    this.userSelected.email = this.email.value;
    this.userSelected.age = this.age.value;
  }
}
