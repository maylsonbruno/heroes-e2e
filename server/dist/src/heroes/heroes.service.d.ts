/// <reference types="@types/multer" />
import { HeroViewModel, HeroUpdateModel, HeroCreateModel } from '../models/models';
import { PrismaService } from '../utils/prisma.service';
import { Request } from 'express';
export declare class HeroesService {
    private prismaService;
    private req;
    constructor(prismaService: PrismaService, req: Request);
    get(): Promise<HeroViewModel[]>;
    getById(id: number): Promise<HeroViewModel>;
    getImage(id: number): Promise<{
        id: number;
        filename: string;
        contentType: string;
        image: Uint8Array;
        heroId: number;
    }>;
    create(hero: HeroCreateModel): Promise<HeroViewModel>;
    update(id: number, hero: HeroUpdateModel): Promise<HeroViewModel>;
    delete(id: number): Promise<void>;
    addOrUpdateAvatar(hero: HeroViewModel, file: Express.Multer.File): Promise<{
        id: number;
        filename: string;
        contentType: string;
        image: Uint8Array;
        heroId: number;
    }>;
}
