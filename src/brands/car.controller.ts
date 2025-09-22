import { Body, Controller, Get, Patch, Delete, Param, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreateCarDto } from './dto/create-car.dto';
import { CarService } from './car.service';
import { get } from 'http';

@Controller('cars')
export class CarController {

    constructor(private carService: CarService ){}

    @Post()
    create(@Body() newCar:CreateCarDto){
        return this.carService.create(newCar)
    }

    //Consultar el carro por Id
    @Get(':id')
    findById(@Param('id') id:string ){
        return this.carService.findById(parseInt(id))
    }


    //Consultar todos los carros
    @Get()
    findAll(){
        return this.carService.findAll()
    }

    //Borrar un carro por id
    @Delete(':id')
    remove (@Param('id') id:string ){
        this.carService.delete(parseInt(id))
    }

}
