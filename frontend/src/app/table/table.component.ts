import { DialogDeleteUserComponent } from './dialog-delete-user/dialog-delete-user.component';
import { User } from './../../shared/models/user.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<User>;
  @Output() user: EventEmitter<User> = new EventEmitter();
  @Output() reload: EventEmitter<boolean> = new EventEmitter();

  displayedColumns: string[] = ['name', 'email', 'age', 'actions'];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(user: User) {
    const dialogRef = this.dialog.open(DialogDeleteUserComponent, {
      width: '80%',
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.reload.emit(result);
      }
    });
  }

  editUser(userSelected: User) {
    this.user.emit(userSelected);
  }
}
