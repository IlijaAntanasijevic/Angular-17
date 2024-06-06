import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-apartment-detail-form',
  templateUrl: './apartment-detail-form.component.html',
  styleUrl: './apartment-detail-form.component.css'
})
export class ApartmentDetailFormComponent {

  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        })
    });
}
}
