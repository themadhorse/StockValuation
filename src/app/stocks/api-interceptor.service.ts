import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiInterceptorService implements HttpInterceptor{
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiefReq = req.clone({url: req.url + `?token=${environment.apiKey}`});
    return next.handle(modifiefReq);
  }
}
