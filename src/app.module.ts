import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageController } from './image.controller';

@Module({
  imports: [],
  controllers: [ImageController, AppController],
  providers: [AppService],
})
export class AppModule {}
