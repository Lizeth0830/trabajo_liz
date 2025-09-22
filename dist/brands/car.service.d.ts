import { CreateCarDto } from './dto/create-car.dto';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CarService {
    private prisma;
    constructor(prisma: PrismaService);
    create(newCar: CreateCarDto): Promise<{
        id: number;
        plate: string;
        release_date: Date;
        is_available: boolean;
        price: Prisma.Decimal;
        brand_id: number;
    }>;
    findById(id: number): Promise<{
        success: boolean;
        data: {
            id: number;
            plate: string;
            release_date: Date;
            is_available: boolean;
            price: Prisma.Decimal;
            brand_id: number;
        };
    }>;
    findAll(): Promise<{
        id: number;
        plate: string;
        release_date: Date;
        is_available: boolean;
        price: Prisma.Decimal;
        brand_id: number;
    }[]>;
    delete(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
