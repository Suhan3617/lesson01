import { Injectable } from '@nestjs/common';
import { CreateDto } from './DTO/create-user.dto';
import { UpdateDto } from './DTO/update-user.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'ervin.howell@example.com',
      role: 'EMPLOYEE',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'clementine.bauch@example.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'patricia.lebsack@example.com',
      role: 'EMPLOYEE',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'chelsey.dietrich@example.com',
      role: 'EMPLOYEE',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'dennis.schulist@example.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'EMPLOYEE ') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if(rolesArray.length===0){
        throw new NotFoundException('User Role not defined')
      }
      return rolesArray
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if(!user){
      throw new NotFoundException('User not Found')
    }
    return user;
  }

  create(createDto: CreateDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updateDto: UpdateDto
  ) {
    const userExists = this.findOne(id);

    if (!userExists) {
      return { message: 'User not found' };
    }

    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id != id);

    return removedUser;
  }
}
