import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('user')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    
    @Post("/register")
    insertUser(@Body() request:any ): string{
        return this.authService.insertUser(request.username,request.password);
    }
}
