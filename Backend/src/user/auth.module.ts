import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {MongooseModule} from '@nestjs/mongoose';
import { AuthSchema } from './auth.model';



@Module({
  imports:[
    MongooseModule.forFeature([{name: 'user', schema: AuthSchema}]
    ),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
