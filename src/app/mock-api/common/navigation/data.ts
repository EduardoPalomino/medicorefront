/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        subtitle: 'Tablero con información de la Unidad de Seguros',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Project',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-document-check',
                link: '/example',
            },
        ],
    },
    {
        id: 'reports',
        title: 'Reportes',
        subtitle: 'Reportes varios',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'reports.entregable',
                title: 'Anexos - entregables',
                type: 'collapsable',
                icon: 'heroicons_outline:clipboard-document-check',
                children: [
                    {
                        id: 'apps.ecommerce.inventory',
                        title: 'Anexo 1',
                        type: 'basic',
                        link: '/reportes/anexo1',
                    },
                    {
                        id: 'apps.ecommerce.inventory',
                        title: 'Anexo 2',
                        type: 'basic',
                        link: '/reports/anexo2',
                    },
                    {
                        id: 'apps.ecommerce.inventory',
                        title: 'Anexo 3',
                        type: 'basic',
                        link: '/apps/ecommerce/inventory',
                    },
                ],
            },
            {
                id: 'dashboards.project',
                title: 'Liquidación',
                type: 'basic',
                icon: 'heroicons_outline:currency-dollar',
                link: '/reportes/liquidacion',
            },
            {
                id: 'dashboards.project',
                title: 'Envios Plataforma',
                type: 'basic',
                icon: 'heroicons_outline:paper-airplane',
                link: '/reportes/envios-plataforma',
            },
        ]
    },
    
];



export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
