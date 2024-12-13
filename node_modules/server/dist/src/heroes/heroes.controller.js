"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesController = void 0;
const common_1 = require("@nestjs/common");
const heroes_service_1 = require("./heroes.service");
const models_1 = require("../models/models");
const platform_express_1 = require("@nestjs/platform-express");
const roles_decorator_1 = require("../auth/roles.decorator");
const get_user_decorator_1 = require("../utils/get-user.decorator");
let HeroesController = class HeroesController {
    constructor(heroesService) {
        this.heroesService = heroesService;
    }
    async getHeroes() {
        const heroes = await this.heroesService.get();
        return heroes;
    }
    async getHero(id) {
        const hero = await this.heroesService.getById(id);
        return hero;
    }
    async getAvatar(res, id) {
        const file = await this.heroesService.getImage(id);
        if (!file) {
            res.send('');
        }
        else {
            res.set('Content-Type', file.contentType).send(file.image).end();
        }
    }
    async create(hero) {
        const newHero = await this.heroesService.create(hero);
        return newHero;
    }
    async update(hero, id) {
        const updatedHero = await this.heroesService.update(id, hero);
        return updatedHero;
    }
    async delete(id) {
        await this.heroesService.delete(id);
    }
    async patch(hero, user, id) {
        if (user.isAdmin) {
            return this.heroesService.update(id, hero);
        }
        else {
            const heroToUpdate = {
                fans: hero.fans,
                saves: hero.saves,
            };
            return await this.heroesService.update(id, heroToUpdate);
        }
    }
    async uploadAvatar(file, id) {
        const hero = await this.heroesService.getById(id);
        await this.heroesService.addOrUpdateAvatar(hero, file);
        return true;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "getHeroes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "getHero", null);
__decorate([
    (0, common_1.Get)(':id/avatar'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "getAvatar", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.HeroCreateModel]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.HeroUpdateModel, Number]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "delete", null);
__decorate([
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __param(2, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.HeroUpdateModel,
        models_1.UserViewModel, Number]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "patch", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)(':id/avatar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "uploadAvatar", null);
HeroesController = __decorate([
    (0, common_1.Controller)('heroes'),
    __metadata("design:paramtypes", [heroes_service_1.HeroesService])
], HeroesController);
exports.HeroesController = HeroesController;
//# sourceMappingURL=heroes.controller.js.map