import { CreateCarDto } from './dto/create-car.dto';
import { CarService } from './car.service';
export declare class CarController {
    private carService;
    constructor(carService: CarService);
    create(newCar: CreateCarDto): Promise<{
        id: number;
        plate: string;
        release_date: Date;
        is_available: boolean;
        price: import("generated/prisma/runtime/library").Decimal;
        brand_id: number;
    }>;
}
