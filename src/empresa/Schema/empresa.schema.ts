import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmpresaDocument = HydratedDocument<Empresa>;

@Schema()
export class Empresa {

  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  cnpj: string;
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);