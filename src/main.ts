import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: {
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  } });

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 8443;
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();