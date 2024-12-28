import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
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

            // createMap(mapper, User, Partial<GetOperationDto></GetOperationDto>,
            //     forMember((dest) => dest.name, mapFrom((src) => src.name)),
            // );
        };
    }
}
