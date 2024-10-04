import { IsNotEmpty } from 'class-validator';

export class CreateClienteDto {
   
    name: string;
    company:string[];

    @IsNotEmpty()
    phone:string;
}
