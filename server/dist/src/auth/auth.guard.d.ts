import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UserViewModel } from '../models/models';
import { Reflector } from '@nestjs/core';
export interface AuthedRequest extends Request {
    user: UserViewModel;
}
declare const AuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthGuard extends AuthGuard_base implements CanActivate {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
