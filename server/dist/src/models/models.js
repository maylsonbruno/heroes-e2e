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
exports.UserViewModel = exports.PowerViewModel = exports.HeroUpdateModel = exports.HeroCreateModel = exports.HeroViewModel = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class HeroViewModel {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, class_transformer_1.Expose)({ name: 'avatarUrl' }),
    (0, class_transformer_1.Transform)(({ value, options, obj: hero }) => {
        if (!(value === null || value === void 0 ? void 0 : value.id)) {
            return value;
        }
        const req = options.request;
        return `${req.protocol}://${req.get('Host')}/heroes/${hero.id}/avatar`;
    }),
    __metadata("design:type", Object)
], HeroViewModel.prototype, "avatar", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], HeroViewModel.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], HeroViewModel.prototype, "updatedAt", void 0);
exports.HeroViewModel = HeroViewModel;
class HeroCreateModel {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name must not be an empty string' }),
    __metadata("design:type", String)
], HeroCreateModel.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Price must be a number' }),
    (0, class_validator_1.Min)(1, { message: 'Price must be greater or equal to 1' }),
    __metadata("design:type", Number)
], HeroCreateModel.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Saves must be a number' }),
    (0, class_validator_1.Min)(0, { message: 'Saves must be greater or equal to 0' }),
    __metadata("design:type", Number)
], HeroCreateModel.prototype, "saves", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Fans must be a number' }),
    (0, class_validator_1.Min)(0, {
        message: 'Fans must be greater or equal to 0',
    }),
    __metadata("design:type", Number)
], HeroCreateModel.prototype, "fans", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Powers must be an array' }),
    __metadata("design:type", Array)
], HeroCreateModel.prototype, "powers", void 0);
exports.HeroCreateModel = HeroCreateModel;
class HeroUpdateModel {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name must not be an empty string' }),
    __metadata("design:type", String)
], HeroUpdateModel.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Price must be a number' }),
    (0, class_validator_1.Min)(1, { message: 'Price must be greater or equal to 1' }),
    __metadata("design:type", Number)
], HeroUpdateModel.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Saves must be a number' }),
    (0, class_validator_1.Min)(0, { message: 'Saves must be greater or equal to 0' }),
    __metadata("design:type", Number)
], HeroUpdateModel.prototype, "saves", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Fans must be a number' }),
    (0, class_validator_1.Min)(0, {
        message: 'Fans must be greater or equal to 0',
    }),
    __metadata("design:type", Number)
], HeroUpdateModel.prototype, "fans", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'Powers must be an array' }),
    __metadata("design:type", Array)
], HeroUpdateModel.prototype, "powers", void 0);
exports.HeroUpdateModel = HeroUpdateModel;
class PowerViewModel {
}
exports.PowerViewModel = PowerViewModel;
class UserViewModel {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserViewModel.prototype, "password", void 0);
exports.UserViewModel = UserViewModel;
//# sourceMappingURL=models.js.map