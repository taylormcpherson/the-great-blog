import { Component, OnInit } from '@angular/core';
import { MOSTVIEWED, MOSTCOMMENTED, MOSTSHARED} from '../data-directory';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-popular-content',
  templateUrl: './popular-content.component.html',
  styleUrls: ['./popular-content.component.less']
})
export class PopularContentComponent implements OnInit {
  mode: number;
  mostViewed = MOSTVIEWED;
  mostCommented = MOSTCOMMENTED;
  mostShared = MOSTSHARED;
  public isSmall: boolean;

  setMode(x): void {
    this.mode = x;
    // set tab styles
    const viewed = document.getElementById('viewed-tag');       // active when x==0
    const commented = document.getElementById('commented-tag'); // active when x==1
    const shared = document.getElementById('shared-tag');       // active when x==2
    if (x === 0) {
      viewed.setAttribute('style', 'background: #ebebeb; font-weight: 600;');
      commented.setAttribute('style', 'background: transparent; font-weight: 400;');
      shared.setAttribute('style', 'background: transparent; font-weight: 400;');
    } else if (x === 1) {
      viewed.setAttribute('style', 'background: transparent; font-weight: 400;');
      commented.setAttribute('style', 'background: #ebebeb; font-weight: 600;');
      shared.setAttribute('style', 'background: transparent; font-weight: 400;');
    } else {
      viewed.setAttribute('style', 'background: transparent; font-weight: 400;');
      commented.setAttribute('style', 'background: transparent; font-weight: 400;');
      shared.setAttribute('style', 'background: #ebebeb; font-weight: 600;');
    }
  }
  constructor(public breakpointObserver: BreakpointObserver) { }


  ngOnInit(): void {
    this.mode = 0;
    this.setMode(0);
    this.breakpointObserver
        .observe(['(max-width: 1100px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.isSmall = true;
          } else {
            this.isSmall = false;
          }
        });
  }
}
