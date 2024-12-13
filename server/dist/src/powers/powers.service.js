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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowersService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("../models/models");
const mapper_1 = require("../utils/mapper");
const prisma_service_1 = require("../utils/prisma.service");
let PowersService = class PowersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async get() {
        const powerDataModels = await this.prismaService.power.findMany();
        const powers = powerDataModels.map(p => (0, mapper_1.mapper)(new models_1.PowerViewModel(), p));
        return powers;
    }
};
PowersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PowersService);
exports.PowersService = PowersService;
//# sourceMappingURL=powers.service.js.map