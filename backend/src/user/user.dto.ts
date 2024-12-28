import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, IsOptional, IsDateString } from 'class-validator';
import { Order } from 'src/order/order.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255, { message: 'Name should not exceed 255 characters.' })
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Email is required.' })
  @MaxLength(255, { message: 'Email should not exceed 255 characters.' })
  email: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255, { message: 'Address line should not exceed 255 characters.' })
  addressLine1: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255, { message: 'City should not exceed 255 characters.' })
  city: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255, { message: 'Country should not exceed 255 characters.' })
  country: string;
}

export class GetAllUserDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  keyword?: string;
}

export class GetUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'ID is required.' })
  id: number;

  @ApiProperty()
  @IsString()
  @MaxLength(255, { message: 'Name should not exceed 255 characters.' })
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Email is required.' })
  @MaxLength(255, { message: 'Email should not exceed 255 characters.' })
  email: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255, { message: 'Address line should not exceed 255 characters.' })
  addressLine1: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255, { message: 'City should not exceed 255 characters.' })
  city: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255, { message: 'Country should not exceed 255 characters.' })
  country: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  created_at: Date | null;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  updated_at: Date | null;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  deleted_at: Date | null;

  // Add these properties if you need them in the DTO
  @ApiProperty({ type: [Restaurant], description: 'List of restaurants the user owns.' })
  @IsOptional()
  restaurants: Restaurant[];

  @ApiProperty({ type: [Order], description: 'List of orders placed by the user.' })
  @IsOptional()
  orders: Order[];
}

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(255, { message: 'Email should not exceed 255 characters.' })
  email?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(255, { message: 'Name should not exceed 255 characters.' })
  name?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(255, { message: 'Address line should not exceed 255 characters.' })
  addressLine1?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(255, { message: 'City should not exceed 255 characters.' })
  city?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(255, { message: 'Country should not exceed 255 characters.' })
  country?: string;
}
