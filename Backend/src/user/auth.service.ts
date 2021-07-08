import { Injectable, Post } from '@nestjs/common';
import { Auth } from './auth.model';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    private users: Auth[] = [];

    constructor(@InjectModel('user') private readonly AuthModel: Model<Auth>)
    {}

    insertUser(username: string, password: string){      
        const newUser = new this.AuthModel({
            username:username,
            password:password,
        });
        newUser.save().then(res => console.log(res));
        return "OK";
    }

}
