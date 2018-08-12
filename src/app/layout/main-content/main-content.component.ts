import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router, RouterEvent } from '@angular/router';

import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  protected user: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id: number = +params['id'];
      // Don't look up contact by id until the data service finished retrieving data
      this.userService.users.subscribe(users => {
        if (users.length === 0) {
          return;
        }
        setTimeout(() => {
          this.user = this.userService.getUserById(id);
        }, 500);
      });
    });

    // If a contact is already displayed, reset the content page upon router navigation (i.e. a new contact is selected)
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.user = null;
      }
    });
  }

}
