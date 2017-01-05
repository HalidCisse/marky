import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'RxJS/add/operator/map';
//import 'RxJS/add/operator/catch';

import { Document }       from '../models/Document';

@Injectable()
export class DocumentsService {
  private documentsUrl = 'api/documents';

  constructor (private http: Http) {}

  all (onNext: (documents: Document[]) => void) {
     this.http.get(this.documentsUrl)
            .map(response => <Document[]>response.json())
            .retry(2)
            .subscribe(onNext, error => this.handleError);
  }

 add (body: Object, onNext: (documents: Document[]) => void) {
     this.http.post(
         this.documentsUrl,
         JSON.stringify(body),
         new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) }))
      .map(response => <Document>response.json())
      .subscribe(onNext, error => this.handleError);
}

  update (body: Object, onNext: (documents: Document[]) => void) {
         this.http.put(
               `${this.documentsUrl}/${body['id']}`,
               JSON.stringify(body), new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) }))
            .map((res: Response) => res.json())
            .subscribe(onNext, error => this.handleError);
  }

  delete (id: string, onNext: (documents: Document[]) => void) {
       this.http.delete(
          `${this.documentsUrl}/${id}`)
          .map((res: Response) => res.json())
          .subscribe(onNext, error => this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
