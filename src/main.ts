import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Activar validaciones globales
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Elimina propiedades que no estén en los DTO
    forbidNonWhitelisted: true, //Lanza error en caso en que se tengan en el loby atributos o propiedades que no esten definidas en el dto
    transform: true //Convierte los tipos del body a los tipos del dto
  }))
  await app.listen(process.env.PORT ?? 3010);
}
bootstrap();
