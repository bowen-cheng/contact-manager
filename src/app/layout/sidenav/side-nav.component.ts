import { Component, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

const SMALL_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: [ './side-nav.component.css' ]
})
export class SideNavComponent implements OnInit {

  // This mediaMatcher is a one-shot deal: it returns tells us if there is a match upon component creation
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_BREAKPOINT}px)`);

  users: Observable<User[]>;

  constructor(private zone: NgZone, private userService: UserService) {
    // By adding this listener, we ask NgZone to detect screen size change
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));

    this.users = this.userService.users;
    this.userService.loadAll();
    this.users.subscribe((data: User[]) => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  isSmallScreen(): boolean {
    return this.mediaMatcher.matches;
  }
}
