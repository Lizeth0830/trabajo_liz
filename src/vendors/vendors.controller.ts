import { } from './vendors.controller';
import { VendorsServiceService } from './vendors.service.service';
import { Controller, Get, Post, Patch, Delete , Param, Body } from '@nestjs/common';

@Controller('vendors')
export class VendorsController  {
  //inyeccion de dependencias:
  // inyectar un componente para uso en otro sin tener  que instanciarlo
  constructor(private readonly VendorsServiceService: VendorsServiceService){}

  @Post()
  create(@Body() body) {
    return this.VendorsServiceService.create(body)
  }

  @Get()
  findAll() {
    return this.VendorsServiceService.findAll() ;
  
  }

  //Consultar un resource por id
  //una brand
  @Get(':id')
  findOne(@Param('id') id: number) {
    
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return "Aquí se actualizará la brand con id: " + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  
  }
}
