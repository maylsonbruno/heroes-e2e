/// <reference types="@types/multer" />
import { HeroesService } from './heroes.service';
import { Response } from 'express';
import { HeroCreateModel, HeroUpdateModel, UserViewModel } from '../models/models';
export declare class HeroesController {
    private heroesService;
    constructor(heroesService: HeroesService);
    getHeroes(): Promise<import("../models/models").HeroViewModel[]>;
    getHero(id: number): Promise<import("../models/models").HeroViewModel>;
    getAvatar(res: Response, id: number): Promise<void>;
    create(hero: HeroCreateModel): Promise<import("../models/models").HeroViewModel>;
    update(hero: HeroUpdateModel, id: number): Promise<import("../models/models").HeroViewModel>;
    delete(id: number): Promise<void>;
    patch(hero: HeroUpdateModel, user: UserViewModel, id: number): Promise<import("../models/models").HeroViewModel>;
    uploadAvatar(file: Express.Multer.File, id: number): Promise<boolean>;
}
