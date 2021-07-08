import { Module } from '@nestjs/common';
import { AuthModule } from '../user/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost:27017/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}