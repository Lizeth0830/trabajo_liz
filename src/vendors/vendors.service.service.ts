import { Injectable } from '@nestjs/common';
import { vendor } from './entities/vendor.entity';

@Injectable()
export class VendorsServiceService {}
//private: solo se puede usar al interior de la clase con this
  private vendors: vendor [] = [
    {
      id: 1,
      name: "Alberto",
      createdAt: new Date
    },
    {
       id: 2,
      name: "Lizeth",
      createdAt: new Date
    }
  ]
  //Añadir al arreglo de brands la brand que esta llegando por el body
  create(body) {
    this.vendor.push(body)
    return body;
  }

//CRUD: select * from brands
//this: acceder a algo private en la clase 
  findAll() {
    return this.vendor;
    return `This action returns all brands`;
  }

    //buscar la brand por id:
  findOne(id: number) {
    let marca = this.vendor.find( function(vendor) {
      //si la encuentro, la retorno
      return brand.id === id
    })
    return marca;

  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  //eliminar un elemento del arreglo por id
  remove(id: number): string {
    //filter: Es para retornar un nuevo arreglo con elementos que cumplan la condicional
    this.vendor = this.vendor.filter(
     function(Brand){
      return Brand.id !== id 
     }
    )
    return "elemento eliminado"
  }




}
