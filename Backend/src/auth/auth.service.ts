import { Injectable, Post } from '@nestjs/common';
import { Auth } from './auth.model';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { isNull } from 'util';
import { resourceLimits } from 'worker_threads';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { exception } from 'console';
import { response } from 'express';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    private users: Auth[] = [];

    constructor(@InjectModel('user') private readonly AuthModel: Model<Auth>)
    {}
    
    async index(){
        return await this.AuthModel.find();
    }

    async show(id: any){
        return await this.AuthModel.find().where({_id:id});
    }

    async update(id : string, email:string, firstName: string, lastName:string, password: string){
        const user = this.AuthModel.findOne({_id:id});
        if (password.length <6) return "Password must contain 6 or more characters!";
        if(!email.includes('@')) return "Email Address must Contain @";
        const emailInUse = this.AuthModel.findOne({email:email});
        if(await emailInUse.count() != 0) return "Email Already in use.";
        await user.updateOne({
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:password,
        })
        return "OK!";
    }

    async store(email:string, firstName: string, lastName:string, password: string){
        const hash = await bcrypt.hash(password,6);
        const user = new this.AuthModel({
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:hash,
        });
        if (password.length <6) return "Password must contain 6 or more characters!";
        if(!email.includes('@')) return "Email Address must Contain @";
        const emailInUse = this.AuthModel.findOne({email:email});
        if(await emailInUse.count() != 0) return "Email Already Registered!";
        user.save().then(res => console.log(res));
        return user;
    }
    async login(email:string,password:string){
        const user = this.AuthModel.findOne({email:email});
        const hash = (await user).password;
        const isMatch = await bcrypt.compare(password, hash);
        if(await user.count() == 0 || !isMatch) return "Can't find user!";
        else return "OK!";
    }

    async destroy(id){
        const user = this.AuthModel.findOne({_id:id});
        if(await user.count() == 0) return "Can't find user, Wrong Id!";
        user.deleteOne({_id:id}).exec();
        return "User Deleted!";
    }

}
