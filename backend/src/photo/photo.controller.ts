import { Body, Controller, Get, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('abc12321')
export class PhotoController {
  constructor(private readonly appService: PhotoService) { }

  @Post()
  createPhoto(@Body() request): object {
    return this.appService.findAll();
  }
}
