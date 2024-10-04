import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Empresa } from '../../empresa/Schema/empresa.schema';



export type ClienteDocument = HydratedDocument<Cliente>;

@Schema()
export class Cliente {

  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' }] })
  company: Empresa[];


  @Prop({ unique: true })
  
  phone: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);