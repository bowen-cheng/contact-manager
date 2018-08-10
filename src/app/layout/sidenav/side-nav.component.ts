import { Component, NgZone, OnInit } from '@angular/core';

const SMALL_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: [ './side-nav.component.css' ]
})
export class SideNavComponent implements OnInit {

  // This mediaMatcher is a one-shot deal: it returns tells us if there is a match upon component creation
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_BREAKPOINT}px)`);

  constructor(zone: NgZone) {
    // By adding this listener, we ask NgZone to detect screen size change
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
  }

  isSmallScreen(): boolean {
    return this.mediaMatcher.matches;
  }
}
