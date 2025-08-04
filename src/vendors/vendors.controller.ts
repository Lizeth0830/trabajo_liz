import { Controller, Get, Post, Patch, Delete  } from '@nestjs/common';

@Controller('vendors')
export class VendorsController {

    @Get()
    consultarVendors() {
        return "Aquí se mostrarán todos los vendors";
    }

    @Post()
        crearVendors() {
            return "Aquí se va a crear un vendor";
        }


}
