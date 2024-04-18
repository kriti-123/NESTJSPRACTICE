import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './users.service';
import { createUserDto } from './dto/createuserdto.dto';
import { userPipe } from './pipes/users.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body(new userPipe()) createUserDto: createUserDto) {
    console.log('users route called');
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.find();
  }

  @Get(':age')
  findone(@Param('age', ParseIntPipe) age: number) {
    console.log(age, typeof age);
    return this.userService.findById(age);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateUserDto) {}

  // @Delete(':id')
  // remove(@Param(':id') id: string) {}
}
