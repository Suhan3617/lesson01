import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateDto } from './DTO/create-user.dto';
import { UpdateDto } from './DTO/update-user.dto';

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'EMPLOYEE ') {
    return this.usersService.findAll(role);
  }

  // @Get('interns') // GET /users/interns
  // findInterns() {
  //     return []
  // }
  @Get(':id') // GET /users/:id
  findOne(@Param('id' , ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post() // POST /users
  create(
    @Body() createDto: CreateDto,
  ) {
    return this.usersService.create(createDto);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateDto: UpdateDto,
  ) {
    return this.usersService.update(id, updateDto);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id' , ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
