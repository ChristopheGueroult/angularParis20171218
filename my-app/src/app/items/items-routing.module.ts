import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { EditComponent } from './containers/edit/edit.component';
import { ItemDetailResolverService } from '../core/services/item-detail-resolver/item-detail-resolver.service';

const appRoutes: Routes = [
  { path: '', component: ListItemsComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent, resolve: { item: ItemDetailResolverService} }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class ItemsRoutingModule { }
