import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EventsModule } from './events/events.module'
import { Event } from './events/entities/event.entity'

@Module({
   imports: [
      ConfigModule.forRoot({
         isGlobal: true,
         envFilePath: `.env.${process.env.NODE_ENV}`,
      }),
      EventsModule,
      TypeOrmModule.forRootAsync({
         inject: [ConfigService],
         useFactory: (config: ConfigService) => ({
            type: 'sqlite',
            database: config.get<string>('DB_NAME'),
            entities: [Event],
            synchronize: true,
         }),
      }),
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
