import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { createUserDto } from '../dto/createuserdto.dto';
import { validate } from 'class-validator';

export class userPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, 'value is getting', typeof value);
    console.log(metadata, 'value metadata is getting!!', typeof metadata);
    // const userClass = plainToInstance(createUserDto, value);
    const errors = await validate(value);
    if (errors.length > 0) {
      throw new BadRequestException('please provide valid data');
    }
    return value;
    // if (value.age >= 18) return value;
    // else throw new BadRequestException('validation failed');
  }
}
