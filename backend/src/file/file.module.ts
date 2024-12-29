import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { join } from 'path';
import * as path from 'path';

// TODO: Use it temporarily, then use aws S3 to save
@Module({
    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: (req, file, cb) => {
                    cb(null, join(__dirname, '..', '..', 'uploads', 'audios'));
                },
                filename: (req, file, cb) => {
                    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
                },
            }),
        }),
    ],
    controllers: [FileController],
    providers: [FileService],
})
export class FileModule { }
