import { trigger, state, style, transition, animate } from '@angular/animations';

export const collapse = [
  trigger('collapse', [
    state('undefined', style({ height: '0px'})),
    state('false', style({ height: '20px'})),
    state('true', style({ height: '450px'})),
    transition('* => false', [animate('450ms cubic-bezier(.39, .8, .5, .95)']),
    state('false', style({ height: '20px'})),
  ])
];
