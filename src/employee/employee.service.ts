import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly databaseservice : DatabaseService) {}
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseservice.employee.create({
      data:createEmployeeDto
    })
  }

  async findAll(role?: "INTERN" | "EMPLOYEE" ) {
    if(role) return this.databaseservice.employee.findMany({
      where:{
        role,
      }
    })
    return this.databaseservice.employee.findMany();
  }

  async findOne(id: number) {
    return this.databaseservice.employee.findUnique({
      where:{
        id,
      }
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseservice.employee.update({
      where:{
        id,
      },
      data:updateEmployeeDto,
    })
  }

  async remove(id: number) {
    return this.databaseservice.employee.delete({
      where:{
        id,
      }
    })
  }
}
