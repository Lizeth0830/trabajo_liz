import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('customers')
export class CustomerController {

    //endpoint: punto de entrada 
    //que otro proyecto va a utilizar
    //va a recibir peticiones HTTP de aquel proyecto
    //Se programa con un función 
    //con sintaxis del lenguaje de programación
    @Get()
    consultarCustomers() {
        return "Aquí se mostraran todos los customers";
    }

    @Post()
    crearCustomer() {
        return "Aquí se va a crear un customer";
    }



}
