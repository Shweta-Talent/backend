// src/image.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('image') // This is the route for the image URL
export class ImageController {
  @Get()
  getImageUrl(): string {
    return 'https://images.onlymyhealth.com/imported/images/2023/June/22_Jun_2023/Main.trek.jpg';
  }
}
