import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto, GetAllUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    async findAll(@Query() getAllUserDto: GetAllUserDto): Promise<User[]> {
        return this.userService.findAll(getAllUserDto);
    }

    @Get(':id')
    async find(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<Boolean> {
        return this.userService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.userService.update(id, updateUserDto);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }
}
