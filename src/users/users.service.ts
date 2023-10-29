import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers(){
        return {
            name:'user1',
            age:31,
            isActive:true
        }
    }
}
