import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BringmeisterProvider} from "../../providers/bringmeister/bringmeister";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: BringmeisterProvider) {
  }

  static ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  addItem(itemToAdd: ShoppingItem){
    let newItem = Object.assign({},itemToAdd);
    this.shoppingItems.push(newItem);
    this.getPriceEstimateForItem(newItem);
    this.newShoppingItem.label = "";
  }

  getPriceEstimateForItem(item: ShoppingItem){
    this.api.getProduct(item.label).subscribe((products : any)=>{
      if (products && products.products.length > 0){
        item.priceEstimates = products.products;
      }
    });
  }

}

interface ShoppingItem {
  label:String;
  priceEstimates:any[];
  checked: boolean;
}
