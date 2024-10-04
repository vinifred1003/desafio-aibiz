import { IsNotEmpty } from 'class-validator';

export class CreateEmpresaDto {
    name: string;
   
    @IsNotEmpty()
    cnpj: string;
}
