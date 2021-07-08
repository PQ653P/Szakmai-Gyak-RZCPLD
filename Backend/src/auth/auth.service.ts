import { Injectable, Post } from '@nestjs/common';
import { Auth } from './auth.model';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { isNull } from 'util';
import { resourceLimits } from 'worker_threads';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Injectable()
export class AuthService {
    private users: Auth[] = [];

    constructor(@InjectModel('users') private readonly AuthModel: Model<Auth>)
    {}

    insertUser(username: string, password: string){      
        const newUser = new this.AuthModel({
            username:username,
            password:password,
        });
        newUser.save().then(res => console.log(res));
        return "OK";
    }
    async getUser(username:string,password:string){
           const log = this.AuthModel.findOne({username:username,password:password});
           if(await log.count() != 0) return "OK!";
           else return "Fail";
    }
}
