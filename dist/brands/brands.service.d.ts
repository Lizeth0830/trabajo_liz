import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BrandsService {
    private prisma;
    constructor(prisma: PrismaService);
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
    update(id: number, updateBrandDto: UpdateBrandDto): void;
    remove(id: number): void;
}
