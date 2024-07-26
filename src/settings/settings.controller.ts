import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { Setting } from './setting.model';
import { TelegramAuthGuard } from '../auth/telegram-auth.guard';

@Controller('setting')
export class SettingsController {
	constructor(private readonly settingsService: SettingsService) {}

	@UseGuards(TelegramAuthGuard)
	@Get()
	async getSettingInfo(): Promise<Setting> {
		return this.settingsService.getSettingInfo();
	}

	// This must not exist.
	// @UseGuards(TelegramAuthGuard)
	// @Put()
	// async updateSettingInfo(@Body() updateData: Partial<Setting>): Promise<Setting> {
	// 	return this.settingsService.updateSettingInfo(updateData);
	// }
}