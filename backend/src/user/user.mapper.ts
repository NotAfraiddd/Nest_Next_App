import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { CreateUserDto, GetAllUserDto, GetUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(mapper, CreateUserDto, User,
                forMember((dest) => dest.email, mapFrom((src) => src.email)),
                forMember((dest) => dest.name, mapFrom((src) => src.name)),
                forMember((dest) => dest.addressLine1, mapFrom((src) => src.addressLine1)),
                forMember((dest) => dest.city, mapFrom((src) => src.city)),
                forMember((dest) => dest.country, mapFrom((src) => src.country)),
                forMember((dest) => dest.created_at, mapFrom(() => null)),
                forMember((dest) => dest.updated_at, mapFrom(() => null)),
                forMember((dest) => dest.deleted_at, mapFrom(() => null))
            );

            createMap(mapper, User, GetAllUserDto,
                forMember((dest) => dest.keyword, mapFrom((src) => {
                    return `${src.email} ${src.name} ${src.addressLine1} ${src.city} ${src.country}`.toLowerCase();
                }))
            );


            createMap(mapper, User, GetUserDto,
                forMember((dest) => dest.id, mapFrom((src) => src.id)),
                forMember((dest) => dest.email, mapFrom((src) => src.email)),
                forMember((dest) => dest.name, mapFrom((src) => src.name)),
                forMember((dest) => dest.addressLine1, mapFrom((src) => src.addressLine1)),
                forMember((dest) => dest.city, mapFrom((src) => src.city)),
                forMember((dest) => dest.country, mapFrom((src) => src.country)),
                forMember((dest) => dest.created_at, mapFrom((src) => src.created_at)),
                forMember((dest) => dest.updated_at, mapFrom((src) => src.updated_at)),
                forMember((dest) => dest.deleted_at, mapFrom((src) => src.deleted_at)),
            );

            createMap(mapper, UpdateUserDto, User,
                forMember((dest) => dest.email, mapFrom((src) => src.email)),
                forMember((dest) => dest.name, mapFrom((src) => src.name)),
                forMember((dest) => dest.addressLine1, mapFrom((src) => src.addressLine1)),
                forMember((dest) => dest.city, mapFrom((src) => src.city)),
                forMember((dest) => dest.country, mapFrom((src) => src.country)),
            );

        };
    }
}
