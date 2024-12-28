import { InjectMapper } from '@automapper/nestjs';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Mapper } from '@automapper/core';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        @InjectMapper() private readonly classMapper: Mapper,
    ) { }

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
}
