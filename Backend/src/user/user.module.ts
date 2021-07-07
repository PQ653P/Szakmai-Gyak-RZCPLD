import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {MongooseModule} from '@nestjs/mongoose';
import { UserSchema } from './user.model';



@Module({
  imports:[
    MongooseModule.forFeature([{name: 'user', schema: UserSchema}]
    ),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
