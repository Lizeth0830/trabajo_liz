import { HttpException, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { Brand } from './entities/brand.entity';
import { throwDeprecation } from 'process';

@Injectable()
export class CarService {

    constructor(private prisma:PrismaService) {}
 
    async create(newCar: CreateCarDto){

        let marca = await this.prisma.brand.findFirst({
            where:{
                id: newCar.brand_id
            }
        })
        if(!marca){
            throw new HttpException( 'La marca no existe',400)
        }

        //validación lógica de negocio:
        //la placa no puede estar repetida
        let existe = await this.prisma.car.findFirst({
            where:{plate:newCar.plate}
        })

        if(existe){
            throw new HttpException("LA PLACA YA EXISTE" , 404)
        }
        else{
            return await this.prisma.car.create({
            data:{
                plate:newCar.plate,
                release_date:new Date(newCar.release_date),
                is_available:newCar.is_available,
                price:newCar.price,
                brand:{
                    connect:{id:newCar.brand_id}
                    }
                
                }
            })
        }
    }

    async findById(id:number){
        //1. Buscar el carro por Id     (La clave foranea depende de prisma)
        let existe = await this.prisma.car.findFirst({
            where:{id:id}
        })
        //2. Si no existe lanzar una HttpExcepcion
        if(!existe){
            throw new HttpException('El carro no existe', 404)
        }
        //3. Si existe devolver el carro
        else{
            return {
                "success": true,
                "data": existe
            }
        }
    }

    async findAll(){
        let carros = await this.prisma.car.findMany({
            orderBy:{'plate':'asc'}
        })
        if(carros.length===0){
            throw new HttpException('No hay carros', 404)   
        }else{
            return carros
        }
    }

    async delete(id: number){
        let existe = await this.prisma.car.findFirst({where:{id:id}})
        
        if(!existe){
            throw new HttpException('El carro no existe',404)
        }else{
                await this.prisma.car.delete({where:{id:id}})
                return{
                    "success": true,
                    "message": "El carro ha sido eliminado"
        }
    }
    }

}
