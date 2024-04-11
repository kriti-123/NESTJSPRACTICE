import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './users.service';
import { createUserDto } from './dto/createuserdto.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() createUserDto: createUserDto) {
    console.log('users route called');
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.find();
  }

  @Get(':id')
  findone(@Param(':id') id: string) {
    return this.userService.findById(id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateUserDto) {}

  // @Delete(':id')
  // remove(@Param(':id') id: string) {}
}
