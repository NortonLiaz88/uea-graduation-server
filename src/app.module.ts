import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from 'src/presentation/app.controller';
import { configuration } from './configuration';
import { AppService } from './main/services/app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      load: [configuration] 
    }), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
