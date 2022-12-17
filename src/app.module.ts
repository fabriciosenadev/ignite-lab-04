import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';


@Module({
  imports: [HttpModule, DatabaseModule]
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
 * npx tsc --noEmit -> check if there are any error in application
 *
 */
