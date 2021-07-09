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


    updateUser(email: any): any {
        
    }


    async getAllUsers(email: any, password: any){
        return await this.AuthModel.find().then(res => console.log(res));
    }
    private users: Auth[] = [];

    constructor(@InjectModel('users') private readonly AuthModel: Model<Auth>)
    {}

    async insertUser(email:string, firstName: string, lastName:string, password: string){      
        const newUser = new this.AuthModel({
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:password,
        });
        if (password.length <6) return "Password must contain 6 or more characters!";
        const log = this.AuthModel.findOne({email:email});
        if(await log.count() != 0) return "Email Already Registered!";
        newUser.save().then(res => console.log(res));
        return "OK";
    }
    async getUser(email:string,password:string){
            const log = this.AuthModel.findOne({email:email,password:password});
            if(await log.count() != 0) return "OK!";
           else return "Invalid email or password";
    }

    async deleteUser(email:string){
        const log = this.AuthModel.findOne({email:email});
            if(await log.count() == 0) return "Can't find user, Wrong username or password!";

        log.remove({email:email}).exec();
        return "User Deleted!";
    }

}
