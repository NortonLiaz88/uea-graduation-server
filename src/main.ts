import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.listen(process.env.PORT);
  const PORT = configService.get<number>('PORT');
  console.log("APPLICATION LISTENING IN", process.env.PORT);
}
bootstrap();
