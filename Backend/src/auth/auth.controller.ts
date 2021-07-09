import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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
   @Delete("/delete")
   deleteUser(@Body() request:any):any{
    return this.authService.deleteUser(request.email);
   }

   @Put("/update")
   updateUser(@Body() request:any):any{
    return this.authService.updateUser(request.email);
   }

   @Get("/getall")
   async getAllUsers(@Body() request:any){
        return await this.authService.getAllUsers(request.email,request.password);
   }
}
