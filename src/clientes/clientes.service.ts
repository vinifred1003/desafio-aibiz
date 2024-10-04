import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './Schema/cliente.schema';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(Cliente.name) private clienteModel: Model<Cliente>) { }

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    
    const createdCliente = new this.clienteModel(createClienteDto);
    return createdCliente.save();
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteModel.find().exec();
  }

  async findOne(id: String): Promise<Cliente> {

    return this.clienteModel.findById(id).exec();
  }

  async update(id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente | null> {
    return this.clienteModel.findByIdAndUpdate(id, updateClienteDto, {
      new: true,
    }).exec();
  }

  async remove(id: string) {
    const objectIdFilter = {
      "_id": id
    }
    const isDeleted = await this.clienteModel.deleteOne(objectIdFilter).exec();
    if (isDeleted.deletedCount === 1) {
      return `O cliente de id ${id} foi deletado`;
    }
    else {
      return `O cliente de id ${id} não foi deletado`;
    }


  }
}
