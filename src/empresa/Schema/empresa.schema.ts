import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmpresaDocument = HydratedDocument<Empresa>;

@Schema()
export class Empresa {

  @Prop()
  name: string;

  @Prop({ unique: true })
  cnpj: string;
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);