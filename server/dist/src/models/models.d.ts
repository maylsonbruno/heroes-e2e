import { AvatarImage, Hero as HeroDataModel, Power as PowerDataModel, User as UserDataModel, Prisma } from '@prisma/client';
export declare class HeroViewModel implements HeroDataModel {
    id: number;
    name: string;
    price: number;
    saves: number;
    fans: number;
    powers: PowerViewModel[];
    avatar: AvatarImage;
    createdAt: any;
    updatedAt: any;
    constructor(partial: Partial<HeroDataModel>);
}
export declare class HeroCreateModel implements Omit<Prisma.HeroCreateInput, 'createdAt' | 'updatedAt' | 'avatar' | 'powers'> {
    name: string;
    price: number;
    saves: number;
    fans: number;
    powers?: number[];
}
export declare class HeroUpdateModel implements Partial<HeroCreateModel> {
    name?: string;
    price?: number;
    saves?: number;
    fans?: number;
    powers?: number[];
}
export declare class PowerViewModel implements PowerDataModel {
    id: number;
    name: string;
}
export declare class UserViewModel implements UserDataModel {
    id: number;
    email: string;
    password: string;
    isAdmin: boolean;
}
