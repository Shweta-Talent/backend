// src/image.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('image') // This is the route for the image URL
export class ImageController {
  @Get()
  getImageUrl(): string {
    return 'https://cdn.dev.spotlightone.com/thumbnails/5ce6b1425d6775315027e8b7012d5d5e494c731ac6aea01a11b1ee9184577833';
  }
}
