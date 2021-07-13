import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createHash, Hash } from 'crypto';
import { request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    
    @Post("/store")
    store(@Body() request:any ): any{
        return this.authService.store(request.email, request.firstName, request.lastName, request.password);
    }
    @Post("/login")
    login(@Body() request: any){
       return this.authService.login(request.email,request.password);
   }
   @Delete("/destroy/:id")
   destroy(@Param('id') id){
    return this.authService.destroy(id);
   }

   @Put("/update/:id")
   update(@Param('id') id : string , @Body() request:any){
    return this.authService.update(id,request.email, request.firstName, request.lastName, request.password);
   }

   @Get("/index")
   async index(@Body() request:any){
        return await this.authService.index();
   }

   @Get("/show/:id")
    show(@Param('id') id : string){
        return this.authService.show(id);
   }
}
