import { Controller, Get, UseGuards } from '@nestjs/common';
import { StatsService } from './stats.service';
import { Stat } from './stat.model';
import { TelegramAuthGuard } from '../auth/telegram-auth.guard';

@Controller('statistics')
export class StatsController {
	constructor(private readonly statsService: StatsService) {}

	@UseGuards(TelegramAuthGuard)
	@Get()
	async getOverallStats(): Promise<Stat> {
		return this.statsService.getOverallStats();
	}
}