import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PhotoController } from './photo/photo.controller';
import { PhotoModule } from './photo/photo.module';
import { UserModule } from './user/user.module';
import { UserControllerController } from './user-controller/user-controller.controller';

@Module({
  imports: [DatabaseModule, PhotoModule, UserModule],
  controllers: [AppController, UserControllerController],
  providers: [AppService],
})
export class AppModule {}
