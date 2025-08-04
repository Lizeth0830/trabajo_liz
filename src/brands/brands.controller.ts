import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('brands')
export class BrandsController {

  @Post()
  create() {
    return "Aquí se van a crear las brands" 
  }

  @Get()
  findAll() {
    return "Aquí se van a consultar todas las brands"
  }

  //Consultar un resource por id
  //una brand
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aquí se consulta la brand cuyo id es: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return "Aquí se actualizará la brand con id: " + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Aquí se eliminará la brand con id: " + id;
  }
}
