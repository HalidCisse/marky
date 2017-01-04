import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Document }       from './Document';

@Injectable()
export class DocumentsService {
  private documentsUrl = 'api/documents';

  constructor (private http: Http) {}

  getDocuments (): Observable<Document[]> {
     return this.http.get(this.documentsUrl)
                     .map((res:Response) => res.json() || { })
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')
  }

 addDocument (body: Object): Observable<Document[]> {
        let bodyString = JSON.stringify(body); 
        let headers    = new Headers({ 'Content-Type': 'application/json' }); 
        let options    = new RequestOptions({ headers: headers }); 

        return this.http.post(this.documentsUrl, body, options) 
                         .map((res:Response) => res.json()) 
                         .catch(this.handleError);
    }   

    updateDocument (body: Object): Observable<Document[]> {
        let bodyString = JSON.stringify(body);
        let headers    = new Headers({ 'Content-Type': 'application/json' });
        let options    = new RequestOptions({ headers: headers });

        return this.http.put(`${this.documentsUrl}/${body['id']}`, body, options) 
                         .map((res:Response) => res.json()) 
                         .catch(this.handleError); 
    }   

    removeDocument (id:string): Observable<Document[]> {
        return this.http.delete(`${this.documentsUrl}/${id}`) 
                         .map((res:Response) => res.json()) 
                         .catch(this.handleError);
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
