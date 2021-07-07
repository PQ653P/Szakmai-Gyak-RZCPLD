import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    
    @Post('/register')
    storeRegister(@Body() request: any): string{
        return request.password;
    }
}
