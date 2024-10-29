import { Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { AnnexOneComponent } from './annex-one/annex-one.component';
import { LiquidationComponent } from './liquidation/liquidacion.component';
import { ShippingComponent } from './shipping/shipping.components';

export default [
    // {
    //     path     : '',
    //     component: ReportsComponent,
    //     children: [
    //         { path: 'anexo1', component: AnnexOneComponent },
    //         { path: 'anexo2', component: AnnexOneComponent },
    //         { path: 'liquidacion', component: AnnexOneComponent },
    //         { path: '', redirectTo: 'anexo1'},
    //         { path: '**', redirectTo: '' }
    //     ]
    // },
    {
        path: 'anexo1', component: AnnexOneComponent
    },
    {
        path: 'liquidacion', component: LiquidationComponent
    },
    {
        path: 'envios-plataforma', component: ShippingComponent
    },
] as Routes;