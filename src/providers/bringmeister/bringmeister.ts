import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';


/*
  Generated class for the BringmeisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BringmeisterProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BringmeisterProvider Provider');
  }

  public getProduct(searchTerm: String): Observable<any[]> {

    // cors-anywhere.herokuapp.com needs a specific header
    const requestOptions = {
      headers: new HttpHeaders({'X-Requested-With': 'ng'}),
    };
    let corsWorkaround = 'https://cors-anywhere.herokuapp.com/';

    let apiUrl = `http://berlin.bringmeister.de/fast-search/index.php?q=${searchTerm}`;
    let url = corsWorkaround + apiUrl;

    return  this.http.get(url, requestOptions)
      .map(products  => {
        console.log(products);
        return products;
      })
      .catch((err)=>{
        console.error(err);
        return[];
      });

  }

}
