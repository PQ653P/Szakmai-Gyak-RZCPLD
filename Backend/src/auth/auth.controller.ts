import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    
    @Post("/register")
    insertUser(@Body() request:any ): any{
        return this.authService.insertUser(request.email, request.firstName, request.lastName, request.password);
    }
    @Post("/login")
    getUser(@Body() request: any) : any{
       return this.authService.getUser(request.email,request.password);
   }
}
