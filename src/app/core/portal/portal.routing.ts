import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const PortalRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'landing',
                component: LandingComponent
            },
        ]
    }
]