import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = ['user1', 'user2'];
  closeable = true;
  usersListControl = new FormControl();
  lastSelectedUser;

  leaveEditMode() {
    console.log('SUBMIT: ' +  this.lastSelectedUser);
  }

  onUserChange(value) {
    this.lastSelectedUser = value;
    console.log('change: ' + this.lastSelectedUser);
  }

  onEnter() {
    console.log('SUBMIT: ' +  this.lastSelectedUser);
  }

  onClose() {
    console.log('on close');
    this.closeable = true;
  }

  onOpen() {
    console.log('on open');
    this.closeable = false;
  }
}
