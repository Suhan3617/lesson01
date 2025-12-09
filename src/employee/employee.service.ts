import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly databaseservice : DatabaseService) {}
  async create(createEmployeeDto: Prisma.UserCreateInput) {
    return this.databaseservice.user.create({
      data:createEmployeeDto
    })
  }

  async findAll(role?: "INTERN" | "EMPLOYEE" ) {
    if(role) return this.databaseservice.user.findMany({
      where:{
        role,
      }
    })
    return this.databaseservice.user.findMany();
  }

  async findOne(id: number) {
    return this.databaseservice.user.findUnique({
      where:{
        id,
      }
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.UserUpdateInput) {
    return this.databaseservice.user.update({
      where:{
        id,
      },
      data:updateEmployeeDto,
    })
  }

  async remove(id: number) {
    return this.databaseservice.user.delete({
      where:{
        id,
      }
    })
  }
}
