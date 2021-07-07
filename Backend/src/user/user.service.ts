import { Injectable, Post } from '@nestjs/common';
import { User } from './user.model';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    private users: User[] = [];

    constructor(@InjectModel('user') private readonly userModel: Model<User>)
    {}

    async insertUser(username: string, password: string){      
        const newUser = new this.userModel({
            username:username,
            password:password,
        });
        const result = await newUser.save();
        console.log(result);
        return 'userId';
    }

}
