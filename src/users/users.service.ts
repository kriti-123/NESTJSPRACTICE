import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USER_MODEL, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(USER_MODEL) private readonly usermodel: Model<UserDocument>,
  ) {
    console.log(this.usermodel, 'usermodel initialized');
  }
  async create(createUserDto) {
    try {
      const user = await this.usermodel.create(createUserDto);
      return user;
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error);
      }
      throw new ServiceUnavailableException();
    }
  }
  async find() {
    try {
      const users = await this.usermodel.find();
      return users;
    } catch (error) {}
  }
  async findById(age: number) {
    try {
      const user = await this.usermodel.findOne({ age });
      if (user === undefined || user == null) throw error;
      return user;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
