import { Prisma } from '@prisma/client';
export declare function createHero(): Promise<{
    powers: {
        id: number;
        name: string;
    }[];
    avatar: {
        id: number;
    };
} & {
    id: number;
    name: string;
    price: number;
    saves: number;
    fans: number;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare function deleteHero(id: number): Promise<Prisma.BatchPayload>;
