import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormElementsComponent } from './pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './pages/charts/pie-chart/pie-chart.component';
import { DonutChartComponent } from './pages/charts/donut-chart/donut-chart.component';
import { AreaChartComponent } from './pages/charts/area-chart/area-chart.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { AlertsComponent } from './pages/ui-elements/alerts/alerts.component';
import { AvatarElementComponent } from './pages/ui-elements/avatar-element/avatar-element.component';
import { BadgesComponent } from './pages/ui-elements/badges/badges.component';
import { ButtonsComponent } from './pages/ui-elements/buttons/buttons.component';
import { ImagesComponent } from './pages/ui-elements/images/images.component';
import { VideosComponent } from './pages/ui-elements/videos/videos.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { Error401Component } from './pages/errors/error-401.component';
import { Error403Component } from './pages/errors/error-403.component';
import { Error404Component } from './pages/errors/error-404.component';
import { Error500Component } from './pages/errors/error-500.component';
import { Error503Component } from './pages/errors/error-503.component';
import { CalenderComponent } from './pages/calender/calender.component';

export const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | StarTail Admin - Angular Admin Dashboard Template',
      },
      {
        path:'chats',
        component:ChatsComponent,
        title:'Chats | StarTail Admin'
      },
      {
        path:'calendar',
        component:CalenderComponent,
        title:'Angular Calender | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'profile',
        component:ProfileComponent,
        title:'Angular Profile Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'form-elements',
        component:FormElementsComponent,
        title:'Angular Form Elements Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'basic-tables',
        component:BasicTablesComponent,
        title:'Angular Basic Tables Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'blank',
        component:BlankComponent,
        title:'Angular Blank Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'invoice',
        component:InvoicesComponent,
        title:'Angular Invoice Details Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'line-chart',
        component:LineChartComponent,
        title:'Angular Line Chart Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'bar-chart',
        component:BarChartComponent,
        title:'Bar Chart | Admin Dashboard'
      },
      {
        path:'pie-chart',
        component:PieChartComponent,
        title:'Pie Chart | Admin Dashboard'
      },
      {
        path:'donut-chart',
        component:DonutChartComponent,
        title:'Donut Chart | Admin Dashboard'
      },
      {
        path:'area-chart',
        component:AreaChartComponent,
        title:'Area Chart | Admin Dashboard'
      },
      {
        path:'alerts',
        component:AlertsComponent,
        title:'Angular Alerts Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'avatars',
        component:AvatarElementComponent,
        title:'Angular Avatars Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'badge',
        component:BadgesComponent,
        title:'Angular Badges Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'buttons',
        component:ButtonsComponent,
        title:'Angular Buttons Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'images',
        component:ImagesComponent,
        title:'Angular Images Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
      {
        path:'videos',
        component:VideosComponent,
        title:'Angular Videos Dashboard | StarTail Admin - Angular Admin Dashboard Template'
      },
    ]
  },
  {
    path:'signin',
    component:SignInComponent,
    title:'Angular Sign In Dashboard | StarTail Admin - Angular Admin Dashboard Template'
  },
  {
    path:'signup',
    component:SignUpComponent,
    title:'Angular Sign Up Dashboard | StarTail Admin - Angular Admin Dashboard Template'
  },
  { path: '401', component: Error401Component, title: '401 - Unauthorized | StarTail Admin' },
  { path: '403', component: Error403Component, title: '403 - Forbidden | StarTail Admin' },
  { path: '404', component: Error404Component, title: '404 - Not Found | StarTail Admin' },
  { path: '500', component: Error500Component, title: '500 - Server Error | StarTail Admin' },
  { path: '503', component: Error503Component, title: '503 - Maintenance | StarTail Admin' },
  { path: 'error-404', component: Error404Component, title: '404 - Not Found | StarTail Admin' },
  {
    path:'**',
    component: Error404Component,
    title:'404 - Not Found | StarTail Admin'
  },
];
