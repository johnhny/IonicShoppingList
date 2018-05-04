import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BringmeisterProvider} from "../../providers/bringmeister/bringmeister";

class Product {
}

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
  private products: Product[];

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
    this.api.getProduct(item.label).subscribe((products : Product[])=>{
      console.log(products.products[0].name)
      if (products && products. products[0])
        item.priceEstimate = products.products[0].name + " -> " + products.products[0].price + "€"
      else
        item.priceEstimate = "no price estimate found";
    });
  }

}

interface ShoppingItem {
  label:String;
  priceEstimate:String;
  checked: boolean;
}
