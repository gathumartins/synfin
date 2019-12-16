// tslint:disable-next-line:eofline
import { trigger, transition, style, query, group, animateChild, animate, keyframes, } from '@angular/animations';
export const slideInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ],
            { optional: true }
        ),
        query(':enter', [style({ top: '-100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [
                animate('1000ms ease-out', style({ top: '100%' }))
            ], { optional: true }),
            query(
                ':enter',
                [animate('1000ms ease-out', style({ top: '0%' }))],
                { optional: true }
            )
        ]),
        query(':enter', animateChild(), { optional: true })
    ])
]);
