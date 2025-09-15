import { Body, Controller, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreateCarDto } from './dto/create-car.dto';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {

    constructor(private carService: CarService ){}

    @Post()
    create(@Body() newCar:CreateCarDto){
        return this.carService.create(newCar)
    }

}
