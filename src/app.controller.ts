import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly AppService: AppService) {}
  @Get()
  homepage(): string {
    return this.AppService.displayHomePage();
  }
}
