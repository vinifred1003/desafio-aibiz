import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { Empresa, EmpresaSchema } from '../empresa/Schema/empresa.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Empresa.name, schema: EmpresaSchema }])],

  controllers: [EmpresaController],
  providers: [EmpresaService],
})
export class EmpresaModule { }
