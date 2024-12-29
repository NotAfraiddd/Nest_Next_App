import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { MenuItemModule } from './menu-item/menu-item.module';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { OrderModule } from './order/order.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [DatabaseModule, UserModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    MenuItemModule,
    RestaurantModule,
    OrderModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads', 'audios'),
      serveRoot: '/audios',
    }),
    FileModule,
  ],
  controllers: [AppController, RestaurantController],
  providers: [AppService, RestaurantService],
})
export class AppModule { }
