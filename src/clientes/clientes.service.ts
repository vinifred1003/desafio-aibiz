import { Injectable } from '@nestjs/common';
import { Model,Types } from 'mongoose';
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

  async findByCompany(companyId: string) {
    try {
      const id = new Types.ObjectId(companyId);
      
      // Log the company ID we're searching for
      console.log('Searching for company ID:', id);
  
      // First, let's count how many documents match
      const count = await this.clienteModel.countDocuments({ company: companyId }).exec();
      console.log('Number of matching documents:', count);
  
      // Now let's perform the query
      const clients = await this.clienteModel.find({ company: companyId }).exec();
      console.log('Clients found:', clients);
  
      // Log the number of clients returned
      console.log('Number of clients returned:', clients.length);
  
      return clients;
    } catch (error) {
      console.error('Error querying clients:', error);
      throw error;
    }
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
