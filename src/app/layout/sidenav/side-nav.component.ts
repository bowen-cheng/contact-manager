import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

const SMALL_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  // This mediaMatcher is a one-shot deal: it returns tells us if there is a match upon component creation
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_BREAKPOINT}px)`);

  protected users: Observable<User[]>;

  // Retrieves the MatSidenav type element with name "sideNav" element from the template
  @ViewChild(MatSidenav) sideNav: MatSidenav;

  constructor(private zone: NgZone, private userService: UserService, private router: Router) {
    // By adding this listener, we ask NgZone to detect screen size change
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();
    this.users.subscribe((data: User[]) => {
      // Navigate to the first contact page once the data service finished retrieving data
      if (data.length > 0) {
        console.log(data);
        this.router.navigate(['contacts', data[0].id]);
      }
    });

    // For small screens. close the side nav whenever a contact is selected (i.e. navigation starts)
    this.router.events.subscribe((event: RouterEvent) => {
      if (this.isSmallScreen() && event instanceof NavigationStart) {
        this.sideNav.close();
      }
    });
  }

  isSmallScreen(): boolean {
    return this.mediaMatcher.matches;
  }
}
