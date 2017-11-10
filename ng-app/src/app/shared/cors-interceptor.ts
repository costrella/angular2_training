import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

export class CORSInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req.clone({withCredentials: true}))
      .do(evt => {
        if (evt instanceof HttpResponse) {
          //console.log('status:', evt.status);
        }
      })
      .catch((err) => {
        console.log('err', err);
        return Observable.throw(err)
      })
  }
}
