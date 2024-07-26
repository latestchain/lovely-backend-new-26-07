import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';
import { UsersModule } from '../users/users.module';

@Module({
	imports: [
		ConfigModule,  // This imports the ConfigModule, making ConfigService available
		UsersModule,   // This imports the UsersModule, making UsersService available
	],
	controllers: [TelegramController],
	providers: [TelegramService],
	exports: [TelegramService],
})
export class TelegramModule {}