import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './main-content.component.html',
  styleUrls: [ './main-content.component.css' ]
})
export class MainContentComponent implements OnInit {

  protected user: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id: number = +params[ 'id' ];
      this.user = this.userService.getUserById(id);
    });
  }

}
