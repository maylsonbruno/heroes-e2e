"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotFoundFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let EntityNotFoundFilter = class EntityNotFoundFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        if (exception.name === 'NotFoundError') {
            const context = host.switchToHttp();
            const response = context.getResponse();
            const request = context.getRequest();
            response.status(common_1.HttpStatus.NOT_FOUND).json({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: exception.message,
                error: exception.name,
                url: request.url,
            });
        }
        else {
            super.catch(exception, host);
        }
    }
};
EntityNotFoundFilter = __decorate([
    (0, common_1.Catch)()
], EntityNotFoundFilter);
exports.EntityNotFoundFilter = EntityNotFoundFilter;
//# sourceMappingURL=entity-not-found.filter.js.map