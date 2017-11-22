import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();  
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  login(){
    this._userService.login(this.user)
    .then((user)=>{
      this._router.navigate['/browse']
    })
    .catch(console.log)
  }

}
