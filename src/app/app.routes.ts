import { Routes } from '@angular/router';

import {HomeComponent} from './home/index';

export const routes: Routes = [
    {
        path: 'accueil',
        component: HomeComponent
    },
    {
        path : '**', pathMatch : 'full', redirectTo : '/accueil'
    }
];

