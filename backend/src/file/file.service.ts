import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

// TODO: Use it temporarily, then use aws S3 to save
@Injectable()
export class FileService {
    private readonly uploadPath = join(__dirname, '..', '..', 'uploads', 'audios');

    constructor() {
        if (!existsSync(this.uploadPath)) {
            mkdirSync(this.uploadPath, { recursive: true });
        }
    }

    getFilePath(filename: string): string {
        return join(this.uploadPath, filename);
    }

    getPublicUrl(filename: string, port: number): string {
        return `http://localhost:${port}/api/audio/load/${filename}`;
    }

    getUploadPath(): string {
        return this.uploadPath;
    }
}
