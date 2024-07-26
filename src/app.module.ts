import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { SettingsModule } from './settings/settings.module';
import { StatsModule } from './stats/stats.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // This makes ConfigModule global
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    SettingsModule,
    StatsModule,
    TelegramModule,
  ],
})
export class AppModule {}