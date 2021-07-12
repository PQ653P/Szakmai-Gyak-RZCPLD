import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    
    @Post("/register")
    createtUser(@Body() request:any ): any{
        return this.authService.createUser(request.email, request.firstName, request.lastName, request.password);
    }
    @Post("/login")
    getUser(@Body() request: any) : any{
       return this.authService.getUser(request.email,request.password);
   }
   @Delete("/delete/:id")
   deleteUser(@Param('id') id):any{
    return this.authService.deleteUser(id);
   }

   @Put("/update/:id")
   updateUser(@Param('id') id : string , @Body() request:any){
       console.log(id,request)
    return this.authService.updateUser(id,request.email, request.firstName, request.lastName, request.password);
   }

   @Get("/getall")
   async getAllUsers(@Body() request:any){
        return await this.authService.getAllUsers();
   }

}
