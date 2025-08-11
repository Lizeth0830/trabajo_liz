import { BrandsService } from './brands.service';
export declare class BrandsController {
    private readonly BrandsService;
    constructor(BrandsService: BrandsService);
    create(body: any): any;
    findAll(): import("./entities/brand.entity").Brand[] | "This action returns all brands";
    findOne(id: number): import("./entities/brand.entity").Brand | undefined;
    update(id: string): string;
    remove(id: string): {
        success: boolean;
        mensaje: string;
    };
}
