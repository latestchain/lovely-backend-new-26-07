import { Controller, Post, Body, Logger } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram-webhook')
export class TelegramController {
	private readonly logger = new Logger(TelegramController.name);

	constructor(private readonly telegramService: TelegramService) {}

	@Post()
	async handleWebhook(@Body() update: any) {
		try {
			await this.telegramService.handleUpdate(update);
		} catch (error) {
			this.logger.error(`Error in webhook: ${error.message}`);
		}
		return { ok: true };
	}
}