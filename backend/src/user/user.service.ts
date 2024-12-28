import { InjectMapper } from '@automapper/nestjs';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { Mapper } from '@automapper/core';
import { CreateUserDto, GetAllUserDto, GetUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        @InjectMapper() private readonly classMapper: Mapper,
    ) { }

    /**
 * get all
 * @param getAllUserDto 
 * @returns 
 */
    async findAll(getAllUserDto: GetAllUserDto): Promise<User[]> {
        const { keyword } = getAllUserDto;
        if (keyword) {
            return this.userRepository.find({
                where: [
                    { email: Like(`%${keyword}%`) },
                    { name: Like(`%${keyword}%`) },
                    { addressLine1: Like(`%${keyword}%`) },
                    { city: Like(`%${keyword}%`) },
                    { country: Like(`%${keyword}%`) },
                ],
            });
        }
        return this.userRepository.find();
    }

    /**
     * create
     * @param createUserDto
     * @returns
     */
    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.classMapper.map(
            createUserDto,
            CreateUserDto,
            User,
        );
        return this.userRepository.save(user);
    }

    /**
     * get detail
     * @param id 
     * @returns 
     */
    async findOne(id: number): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['restaurants', 'orders'] });

        const userDto = this.classMapper.map(user, User, GetUserDto);

        return userDto;
    }

    /**
     * update
     * @param id 
     * @returns 
     */
    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findOne({
            where: { id: id },
        });
        if (!user) {
            throw new Error('User not found');
        }

        const updatedUser = this.classMapper.map(updateUserDto, UpdateUserDto, User);
        this.userRepository.merge(user, updatedUser);
        return this.userRepository.save(user);
    }

    /**
     * delete
     * @param id 
     * @returns Boolean
     */
    async delete(id: number): Promise<Boolean> {
        const result = await this.userRepository.softDelete(id);

        if (!result.affected)
            return false;
        return true;
    }
}
