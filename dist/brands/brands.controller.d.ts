import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
export declare class BrandsController {
    private readonly BrandsService;
    constructor(BrandsService: BrandsService);
    create(newbrand: CreateBrandDto): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
    } | null>;
    update(id: string): string;
    remove(id: string): {
        success: boolean;
        mensaje: void;
    };
}
