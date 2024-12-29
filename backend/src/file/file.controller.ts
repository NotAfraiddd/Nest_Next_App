import {
    Controller,
    Post,
    Param,
    Get,
    UploadedFile,
    UseInterceptors,
    Res,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { Express } from 'express';  // Import kiểu Express
import { Response } from 'express';

// TODO: Use it temporarily, then use aws S3 to save
@Controller('audio')
export class FileController {
    constructor(private readonly fileService: FileService) { }

    @Get('load/:filename')
    getFile(@Param('filename') filename: string, @Res() res: Response) {
        const filePath = this.fileService.getFilePath(filename);
        try {
            return res.sendFile(filePath);
        } catch (err) {
            throw new HttpException('File not found', HttpStatus.NOT_FOUND);
        }
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('audios'))
    uploadFile(@UploadedFile() file: Express.Multer.File): any {
        if (!file) {
            throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
        }

        const port = 3000;
        const fileUrl = this.fileService.getPublicUrl(file.filename, port);

        return { success: 1, url: fileUrl };
    }
}
