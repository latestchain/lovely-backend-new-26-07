import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { ConfigService } from '@nestjs/config';
import {UsersService} from "../users/users.service";

@Injectable()
export class TelegramService implements OnModuleInit {
	private bot: Telegraf;
	private readonly logger = new Logger(TelegramService.name);

	constructor(
		private configService: ConfigService,
		private userService: UsersService
	) {
		const token = this.configService.get<string>('BOT_TOKEN');
		if (!token) {
			throw new Error('BOT_TOKEN must be provided');
		}
		this.bot = new Telegraf(token);
	}

	onModuleInit() {
		this.initializeBot();
	}

	private initializeBot() {
		this.bot.command('start', this.handleStartCommand.bind(this));

		// Set up the webhook
		const webhookUrl = this.configService.get<string>('TG_WEBHOOK');
		if (webhookUrl) {
			this.bot.telegram.setWebhook(webhookUrl);
			this.logger.log(`Webhook set to ${webhookUrl}`);
		} else {
			this.logger.warn('TG_WEBHOOK not set, running in polling mode');
			this.bot.launch();
		}
	}

	private async handleStartCommand(ctx: any) {
		try {

			const welcomeMessage = `*The Biggest Committed Airdrop in the History\\! 🌟*\n\nWelcome to Lovely Legends\\!\nTransform your journey from a humble Bronze Coin to the mighty Lord Coin of the top\\-tier 1 crypto exchange\\! 🚀\n\nStart your adventure now and conquer the crypto world\\! 🏆`;

			await ctx.sendPhoto(welcomeMessage, {
				photo: 'https://play.lovely.finance/img/lovely-legends.jpg',
				caption: welcomeMessage,
				reply_markup: {
					inline_keyboard: [
						[{ text: '👉 Start now\!', url: `${this.configService.get<string>('WEB_APP')}` }],
						[{ text: 'Join community 🚀', url: 'https://t.me/lovelyinu_channel' }],
						[{ text: 'Follow on X ✅', url: 'https://twitter.com/Lovely_finance' }],
						[{ text: 'Subscribe YouTube', url: 'https://www.youtube.com/watch?v=-Hk5_wuljQY' }],
					],
				},
				parse_mode: 'MarkdownV2',
			});
		} catch (error) {
			this.logger.error(`Error handling start command: ${error.message}`);
			await ctx.reply('Sorry, there was an error processing your request. Please try again later.');
		}
	}

	async handleUpdate(update: any) {
		try {
			await this.bot.handleUpdate(update);
		} catch (error) {
			this.logger.error(`Error handling update: ${error.message}`);
		}
	}
}