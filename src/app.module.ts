import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestTestAPI'),
    userModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
