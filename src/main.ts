import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestMicroservice, ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { protobufPackage } from './core/core.pb';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        package: protobufPackage,
        protoPath: join('node_modules/grpc-proto/proto/core/core.proto'),
      },
    },
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  await app.listen();
}
bootstrap();
