import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  displayHomePage(): string {
    return 'HELLO! This is Home page....!!!';
  }
}
