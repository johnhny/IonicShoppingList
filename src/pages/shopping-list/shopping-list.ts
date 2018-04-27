import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: "list"
})
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingItems = [] as ShoppingItem[];
  newShoppingItem = {checked: false} as ShoppingItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  static ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  addItem(itemToAdd: ShoppingItem){
    this.shoppingItems.push(Object.assign({},itemToAdd));
    this.newShoppingItem.label = "";
  }

}

interface ShoppingItem {
  label:String;
  checked: boolean;
}
