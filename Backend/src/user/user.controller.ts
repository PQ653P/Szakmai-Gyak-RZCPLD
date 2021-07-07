import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    @Post("/register")
    insertUser(): string{
        return this.insertUser()
    }
}
