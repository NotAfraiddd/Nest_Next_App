import { ApiProperty } from "@nestjs/swagger";

import { IsEmail } from 'class-validator';

export class CreateUserRequest {
  @ApiProperty()
  @IsEmail({}, { message: "Email is invalid" })
  email: string;

  @ApiProperty()
  date: Date;
};
