import { Injectable, Post } from '@nestjs/common';
import { Auth } from './auth.model';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { isNull } from 'util';
import { resourceLimits } from 'worker_threads';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { exception } from 'console';
import { response } from 'express';

@Injectable()
export class AuthService {

    private users: Auth[] = [];

    constructor(@InjectModel('user') private readonly AuthModel: Model<Auth>)
    {}
    
    async index(){
        return await this.AuthModel.find();
    }

    async update(id : string, email:string, firstName: string, lastName:string, password: string){
        const user = this.AuthModel.findOne({_id:id});
        await user.update({
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:password,
        })
        return "OK!";
    }

    async store(email:string, firstName: string, lastName:string, password: string){      
        const user = new this.AuthModel({
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:password,
        });
        if (password.length <6) return "Password must contain 6 or more characters!";
        if(!email.includes('@')) return "Email Address must Contain @";
        const log = this.AuthModel.findOne({email:email});
        if(await log.count() != 0) return "Email Already Registered!";
        user.save().then(res => console.log(res));
        return user;
    }
    async show(email:string,password:string){
            const user = this.AuthModel.findOne({email:email,password:password});
            if(await user.count() != 0) return "OK!";
           else return "Invalid email or password";
    }

    async destroy(id){
        const user = this.AuthModel.findOne({_id:id});
            if(await user.count() == 0) return "Can't find user, Wrong Id! ";
        user.remove({_id:id}).exec();
        return "User Deleted!";
    }

}
