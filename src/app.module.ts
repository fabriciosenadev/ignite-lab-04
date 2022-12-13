import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}

/**
 * prisma need to use
 *
 * npm i prima -D -> CLI from prisma to automate some process
 * npm i @prisma/client -> pack to connect on database
 *
 * npx prisma init --datasource-provider SQLite -> to run with sqlite initialized
 *
 * npx prisma migrate dev -> run migrations on database
 *
 * npx prisma studio -> open a web interface with database
 *
 */
