import { Component } from '@angular/core';
import {
  trigger,
  animate,
  style,
  group,
  query,
  transition,
  state,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', [style({ position: 'fixed', width: '100%' })], {
          optional: true,
        }),

        group([
          query(
            ':enter',
            [
              style({ transform: 'translateX(100%)' }),
              animate(
                '0.5s ease-in-out',
                style({ transform: 'translateX(0%)' })
              ),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              style({ transform: 'translateX(0%)' }),
              animate(
                '0.5s ease-in-out',
                style({ transform: 'translateX(-100%)' })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'newsApp';
  getState(outlet: any) {
    return outlet._activatedRoute
      ? outlet._activatedRoute.url._value.join('/')
      : 'void';
    // return outlet?.activatedRouteData.state;
  }
}
