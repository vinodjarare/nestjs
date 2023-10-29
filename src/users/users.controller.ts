import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

type TUser = {
    name:string,
    age:number;
    isActive:boolean;
}

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get()
    getUsers():TUser{
        return this.userService.getUsers();
    }
}
