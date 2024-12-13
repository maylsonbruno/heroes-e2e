"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const heroes_controller_1 = require("./heroes/heroes.controller");
const heroes_service_1 = require("./heroes/heroes.service");
const prisma_service_1 = require("./utils/prisma.service");
const powers_service_1 = require("./powers/powers.service");
const powers_controller_1 = require("./powers/powers.controller");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const auth_guard_1 = require("./auth/auth.guard");
const entity_not_found_filter_1 = require("./utils/entity-not-found.filter");
const transformer_interceptor_1 = require("./utils/transformer.interceptor");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, users_module_1.UsersModule],
        controllers: [heroes_controller_1.HeroesController, powers_controller_1.PowersController],
        providers: [
            heroes_service_1.HeroesService,
            prisma_service_1.PrismaService,
            powers_service_1.PowersService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transformer_interceptor_1.TransformerInterceptor,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: entity_not_found_filter_1.EntityNotFoundFilter,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map