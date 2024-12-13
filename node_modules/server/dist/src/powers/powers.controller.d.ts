import { PowersService } from './powers.service';
export declare class PowersController {
    private powersService;
    constructor(powersService: PowersService);
    getHeroes(): Promise<import("../models/models").PowerViewModel[]>;
}
