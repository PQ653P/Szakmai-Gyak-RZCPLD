import { Module } from '@nestjs/common';
import { AuthModule } from '../user/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://QYRYI4:XOINlcNHW93V0QSm@cluster0.gfojh.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
