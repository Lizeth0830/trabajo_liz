import { BrandsService } from './brands.service';
export declare class BrandsController {
    private readonly BrandsService;
    constructor(BrandsService: BrandsService);
    create(body: any): void;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): void;
    update(id: string): string;
    remove(id: string): {
        success: boolean;
        mensaje: void;
    };
}
