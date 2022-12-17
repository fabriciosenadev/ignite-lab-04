import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

/**
 * about kafka
 *
 * consumer -> uses ServerKafka
 *
 * producer -> uses ClientKafka
 * 
 * site para uso da fila: upstash.com
 *
 */

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['one-feline-5961-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'b25lLWZlbGluZS01OTYxJCsbx7xJeEPS_EYHADt0T0tHtO5myk5j0ml9cu1W5Bg',
          password:
            'lqrRZEgFasR61EdCNc1CrDzgZPiFrFbbnvqid4yxpeJ_ibZL7x0imiqVnrbuPKDhtvsuIQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
