import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  register(){
    this._userService.register(this.user)
    .then((user)=>{
      this._router.navigate['/browse']})
    .catch(console.log)
  }

}
