import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    
    @Post("/store")
    store(@Body() request:any ): any{
        return this.authService.store(request.email, request.firstName, request.lastName, request.password);
    }
    @Post("/show")
    show(@Body() request: any) : any{
       return this.authService.show(request.email,request.password);
   }
   @Delete("/destroy/:id")
   destroy(@Param('id') id):any{
    return this.authService.destroy(id);
   }

   @Put("/update/:id")
   update(@Param('id') id : string , @Body() request:any){
       console.log(id,request)
    return this.authService.update(id,request.email, request.firstName, request.lastName, request.password);
   }

   @Get("/index")
   async index(@Body() request:any){
        return await this.authService.index();
   }

}
