import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Setting } from './setting.model';

@Injectable()
export class SettingsService {
	constructor(@InjectModel(Setting.name) private settingModel: Model<Setting>) {}

	async getSettingInfo(): Promise<Setting> {
		const setting = await this.settingModel.findOne().exec();
		if (!setting) {
			throw new NotFoundException('Settings not found');
		}
		return setting;
	}

	async updateSettingInfo(updateData: Partial<Setting>): Promise<Setting> {
		const setting = await this.settingModel.findOne().exec();
		if (!setting) {
			const newSetting = new this.settingModel(updateData);
			return newSetting.save();
		}
		Object.assign(setting, updateData);
		setting.updatedAt = new Date();
		return setting.save();
	}

}