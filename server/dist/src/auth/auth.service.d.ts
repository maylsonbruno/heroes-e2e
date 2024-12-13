import { JwtService } from '@nestjs/jwt';
import { UserViewModel } from '../models/models';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: UserViewModel): Promise<{
        access_token: string;
        user: UserViewModel;
        expiresAt: number;
    }>;
}
