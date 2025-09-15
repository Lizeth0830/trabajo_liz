import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {

  constructor(
    private prisma: PrismaService
  ){}

  //Añadir al arreglo de brands la brand que esta llegando por el body
  async create(newbrand: CreateBrandDto) {
    return await this.prisma.brand.create({
      data:{
        name:newbrand.name
      }
    })
  }

//CRUD: select * from brands
//this: acceder a algo private en la clase 
  findAll() {
    return this.prisma.brand.findMany()
  }

    //buscar la brand por id:
  async findOne(id: number) {
    return await this.prisma.brand.findFirst({
      where: {id:id}
    })
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {

  }

  //eliminar un elemento del arreglo por id
  remove(id: number) {

  }




}
