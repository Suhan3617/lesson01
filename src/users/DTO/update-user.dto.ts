import { CreateDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";
export class UpdateDto extends PartialType(CreateDto){}