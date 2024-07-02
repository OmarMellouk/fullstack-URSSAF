import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPjdContainerComponent } from '../ecrans-pjd/detail-pjd/container/detail-pjd-container.component';
import { ListePjdContainerComponent } from '../ecrans-pjd/liste-pjd/container/liste-pjd-container.component';
import { MenuVerticalContentComponent } from './components/menu-vertical-content/menu-vertical-content.component';
import { MenuVerticalContainerComponent } from './container/menu-vertical-container.component';

const routes: Routes = [
  {
    path: '',
    component: MenuVerticalContainerComponent,
    data: {
      pageTitle: 'Menu vertical',
    },
    children: [
      { path: 'sous-menu-1', component: DetailPjdContainerComponent },
      { path: 'sous-menu-2', component: MenuVerticalContentComponent },
      { path: 'sous-menu-3', component: MenuVerticalContentComponent },
      { path: 'sous-menu-4', component: MenuVerticalContentComponent },
      { path: 'sous-menu-5', component: MenuVerticalContentComponent },
      { path: 'sous-menu-6', component: MenuVerticalContentComponent },
      { path: 'sous-menu-7', component: MenuVerticalContentComponent },
      { path: 'sous-menu-8', component: MenuVerticalContentComponent },
      { path: 'sous-menu-9', component: MenuVerticalContentComponent },
      { path: 'sous-menu-10', component: MenuVerticalContentComponent },
      { path: 'sous-menu-11', component: MenuVerticalContentComponent },
      { path: 'sous-menu-12', component: MenuVerticalContentComponent },
      { path: 'sous-menu-13', component: MenuVerticalContentComponent },
      { path: 'sous-menu-14', component: MenuVerticalContentComponent },
      { path: 'menu-1',
        children: [
          { path: '', component: ListePjdContainerComponent },
          { path: 'detail-pjd', redirectTo: '/menu-vertical/sous-menu-1', pathMatch: 'full' },
        ]
      },
      { path: 'menu-2', component: MenuVerticalContentComponent },
      { path: 'menu-3', component: MenuVerticalContentComponent },
      { path: 'menu-4', component: MenuVerticalContentComponent },
      { path: 'menu-5', component: MenuVerticalContentComponent },
      { path: 'menu-6', component: MenuVerticalContentComponent },
      { path: 'menu-7', component: MenuVerticalContentComponent },
      { path: 'menu-8', component: MenuVerticalContentComponent },
      { path: 'menu-9', component: MenuVerticalContentComponent },
      { path: 'menu-10', component: MenuVerticalContentComponent },
      { path: 'menu-11', component: MenuVerticalContentComponent }
    ]

  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuVerticalRoutingModule { }
