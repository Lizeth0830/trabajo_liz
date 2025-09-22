import { IsBoolean, IsDate, IsDecimal, IsInt, IsNotEmpty } from "class-validator";

export class CreateCarDto{

  @IsNotEmpty({
    message:'La placa es obligatoria'
  })
  plate: string;

  @IsNotEmpty({
    message:'La fecha de lanzamiento es obligatoria'
  })
  release_date:Date;
  
  @IsNotEmpty({
    message:'Debe ser un valor true o false'
  })
  @IsBoolean()
  is_available: boolean;
  
  @IsNotEmpty({
    message:'El precio debe ser un número entero'
  })
  @IsInt()
  price: number;
  
  @IsNotEmpty({
    message:'El id de la marca debe ser un atributo de número'
  })
  @IsInt()
  brand_id: number

}