import { Module } from '@nestjs/common';
import { SetupService } from './setup.service';
import { SetupController } from './setup.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'SETUP_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('rmq.url')],
            queue: configService.get<string>('rmq.SETUP_QUEUE'),
            // queueOptions: {
            //   durable: false,
            // },
          },
        }),
      },
    ]),
  ],
  controllers: [SetupController],
  providers: [SetupService],
})
export class SetupModule {}
