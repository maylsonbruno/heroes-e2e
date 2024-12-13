import { PowerViewModel } from '../models/models';
import { PrismaService } from '../utils/prisma.service';
export declare class PowersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    get(): Promise<PowerViewModel[]>;
}
