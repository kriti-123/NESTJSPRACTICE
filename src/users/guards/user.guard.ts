import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('USER GAURD CALLED....');
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    if (parseInt(request.params.age) == 5) return false;
    console.log(request.params);
    return true;
  }
}
