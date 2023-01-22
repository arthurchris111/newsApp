import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // animations:[
  //   trigger('routerTransition', [
  //     transition('* <=> *', [
  //       query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
  //       group([
  //         query(':enter', [
  //           style({ transform: 'translateX(100%)' }),
  //           animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //         ]),
  //         query(':leave', [
  //           style({ transform: 'translateX(0%)' }),
  //           animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))]),
  //       ])
  //     ])
  //   ])
  //  ],
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
