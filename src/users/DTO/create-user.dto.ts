import { IsEmail , IsEnum , IsString , IsNotEmpty } from "class-validator";

export class CreateDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;

    @IsEnum(["INTERN" , "EMPLOYEE"],{
        message:'Valid Role Required'
    })
    role:"INTERN" | "EMPLOYEE";
}