import { Injectable } from '@nestjs/common';

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
      role: 'INTERN',
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
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'chelsey.dietrich@example.com',
      role: 'INTERN',
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
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id:number){
    const user = this.users.find(user=> user.id===id)
    return user
  }

  create(user:{name:string,email:string,role:"INTERN" | "EMPLOYEE"}){
    const usersByHighestId=[...this.users].sort((a,b)=>b.id-a.id)
    const newUser = {
        id:usersByHighestId[0].id + 1,
        ...user
    }
    this.users.push(newUser)
    return newUser
  }

  update(id:number,updatedUser:{name?:string,email?:string,role?:"INTERN" | "EMPLOYEE"}){
    this.users=this.users.map(user =>{
        if(user.id===id){
            return {...user,...updatedUser}
        }
        return user
    })
    return this.findOne(id)
  }

  delete(id:number){
    const removedUser = this.findOne(id)

    this.users=this.users.filter(user=>user.id!=id)

    return removedUser
  }
}
