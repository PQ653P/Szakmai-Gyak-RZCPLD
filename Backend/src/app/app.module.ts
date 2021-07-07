import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://QYRYI4:pw123@cluster0.gfojh.mongodb.net/nestjs-demo')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
