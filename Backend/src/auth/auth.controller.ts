import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    
    @Post("/register")
    async insertUser(@Body() request:any ){
        return await this.authService.insertUser(request.username,request.password);
    }
    @Post("/login")
    getUser(@Body() request: any) : any{
       return this.authService.getUser(request.username,request.password);
   }
}
