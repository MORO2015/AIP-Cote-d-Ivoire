import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onRedirectionPropos() {
    this.router.navigateByUrl('propos');
  }

  onRedirectionConseil() {
    this.router.navigateByUrl('conseil');
  }

  onRedirectionFormation() {
    this.router.navigateByUrl('formation');
  }

  onRedirectionFinance() {
    this.router.navigateByUrl('finance');
  }
}
