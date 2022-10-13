import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-bar-nav',
  templateUrl: './bar-nav.component.html',
  styleUrls: ['./bar-nav.component.scss'],
})
export class BarNavComponent implements OnInit {
  public hidDen: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((url: any) => url instanceof NavigationEnd))
      .subscribe((url: any) => {
        console.log(url);
        if (url.urlAfterRedirects != 'home') {
          this.hidDen = false;
        }
      });
  }
}
