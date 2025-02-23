"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformerInterceptor = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const operators_1 = require("rxjs/operators");
let TransformerInterceptor = class TransformerInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((result) => {
            const request = context.switchToHttp().getRequest();
            return (0, class_transformer_1.instanceToPlain)(result, { request });
        }));
    }
};
TransformerInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformerInterceptor);
exports.TransformerInterceptor = TransformerInterceptor;
//# sourceMappingURL=transformer.interceptor.js.map