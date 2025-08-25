import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BrandsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): void;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): void;
    update(id: number, updateBrandDto: UpdateBrandDto): void;
    remove(id: number): void;
}
