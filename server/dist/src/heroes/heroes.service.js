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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const models_1 = require("../models/models");
const prisma_service_1 = require("../utils/prisma.service");
let HeroesService = class HeroesService {
    constructor(prismaService, req) {
        this.prismaService = prismaService;
        this.req = req;
    }
    async get() {
        const heroDataModels = await this.prismaService.hero.findMany({
            include: {
                powers: true,
                avatar: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        const heroes = heroDataModels.map((hero) => new models_1.HeroViewModel(hero));
        return heroes;
    }
    async getById(id) {
        const heroDataModel = await this.prismaService.hero.findUniqueOrThrow({
            where: {
                id: id,
            },
            include: {
                powers: true,
                avatar: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        const hero = new models_1.HeroViewModel(heroDataModel);
        return hero;
    }
    async getImage(id) {
        const heroDataModel = await this.prismaService.hero.findUniqueOrThrow({
            where: {
                id,
            },
            include: {
                avatar: true,
            },
        });
        if (!heroDataModel.avatar) {
            throw new common_1.NotFoundException();
        }
        return heroDataModel.avatar;
    }
    async create(hero) {
        const { powers } = hero, rest = __rest(hero, ["powers"]);
        const heroToCreate = Object.assign(Object.assign({}, rest), { powers: {
                connect: powers.map((x) => ({ id: x })),
            }, avatar: {} });
        const newHero = await this.prismaService.hero.create({
            data: heroToCreate,
        });
        return this.getById(newHero.id);
    }
    async update(id, hero) {
        const { powers } = hero, rest = __rest(hero, ["powers"]);
        const heroToUpdate = Object.assign(Object.assign({}, rest), { powers: {
                set: powers === null || powers === void 0 ? void 0 : powers.map((x) => ({ id: x })),
            } });
        const updatedHero = await this.prismaService.hero.update({
            where: {
                id,
            },
            data: heroToUpdate,
        });
        return this.getById(updatedHero.id);
    }
    async delete(id) {
        await this.prismaService.avatarImage.deleteMany({
            where: {
                heroId: id,
            },
        });
        await this.prismaService.hero.deleteMany({
            where: {
                id,
            },
        });
    }
    async addOrUpdateAvatar(hero, file) {
        if (hero.id) {
            return await this.prismaService.avatarImage.upsert({
                where: {
                    heroId: hero.id,
                },
                update: {
                    image: file.buffer,
                    filename: file.fieldname,
                    contentType: file.mimetype,
                },
                create: {
                    image: file.buffer,
                    filename: file.fieldname,
                    contentType: file.mimetype,
                    heroId: hero.id,
                },
            });
        }
    }
};
HeroesService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(1, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object])
], HeroesService);
exports.HeroesService = HeroesService;
//# sourceMappingURL=heroes.service.js.map