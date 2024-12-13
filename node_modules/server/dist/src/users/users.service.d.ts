import { UserViewModel } from '../models/models';
import { PrismaService } from '../utils/prisma.service';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getByUsername(username: string): Promise<UserViewModel>;
}
