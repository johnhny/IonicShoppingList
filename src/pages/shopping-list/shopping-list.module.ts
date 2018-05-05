import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingListPage } from './shopping-list';
import {BringmeisterProvider} from "../../providers/bringmeister/bringmeister";

@NgModule({
  declarations: [
    ShoppingListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingListPage),
  ],
  providers:[
    BringmeisterProvider
  ]
})
export class ShoppingListPageModule {}
