import { Injectable, Post } from '@nestjs/common';
import { Auth } from './auth.model';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { isNull } from 'util';
import { resourceLimits } from 'worker_threads';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { exception } from 'console';

@Injectable()
export class AuthService {
    private users: Auth[] = [];

    constructor(@InjectModel('users') private readonly AuthModel: Model<Auth>)
    {}

    async insertUser(username: string, password: string){      
        const newUser = new this.AuthModel({
            username:username,
            password:password,
        });
        if (password.length <6) throw new exception("Password must contain 6 or more characters!");
        const log = this.AuthModel.findOne({username:username});
        if(await log.count() != 0) throw new exception("Username Already Exists!");
        newUser.save().then(res => console.log(res));
        return "OK";
    }
    async getUser(username:string,password:string){
           const log = this.AuthModel.findOne({username:username,password:password});
           if(await log.count() != 0) return "OK!";
           else return "Invalid username or password";
    }
}
