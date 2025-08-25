import { Injectable } from '@nestjs/common';
import { vendor } from './entities/vendor.entity';

@Injectable()
export class VendorsServiceService {



  //Añadir al arreglo de brands la brand que esta llegando por el body
  create(body) {
   
  }

//CRUD: select * from brands
//this: acceder a algo private en la clase 
  findAll() {
  
  }

    //buscar la brand por id:
  findOne(id: number) {
   

  }

  update(id: number) {
    return `This action updates a #${id} brand`;
  }

  //eliminar un elemento del arreglo por id
  remove(id: number) {
    //filter: Es para retornar un nuevo arreglo con elementos que cumplan la condicional
   
  }










}
//private: solo se puede usar al interior de la clase con this
  




