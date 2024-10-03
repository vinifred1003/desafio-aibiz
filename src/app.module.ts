import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { ClientesModule } from './clientes/clientes.module';

import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [EmpresaModule, ClientesModule, MongooseModule.forRoot("mongodb://localhost/nest")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
