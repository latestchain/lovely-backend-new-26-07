import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Stat} from './stat.model';

@Injectable()
export class StatsService {
	constructor(@InjectModel(Stat.name) private statModel: Model<Stat>) {
	}

	async getOverallStats(): Promise<Stat> {
		const stats = await this.statModel.findOne().sort({createdAt: -1}).exec();
		if (!stats) {
			throw new NotFoundException('Stats not found');
		}
		return stats;
	}

	async incrementTotalBalance(amount: number): Promise<void> {
		await this.statModel.updateOne(
			{},
			{$inc: {totalBalance: amount}},
			{sort: {createdAt: -1}, upsert: true}
		);
	}

	async incrementTotalUsers(): Promise<void> {
		await this.statModel.updateOne(
			{},
			{$inc: {totalUsers: 1}},
			{sort: {createdAt: -1}, upsert: true}
		);
	}

	async incrementTotalTaps(amount: number): Promise<void> {
		await this.statModel.updateOne(
			{},
			{$inc: {totalTaps: amount}},
			{sort: {createdAt: -1}, upsert: true}
		);
	}

	async incrementDailyUsers(): Promise<void> {
		await this.statModel.updateOne(
			{},
			{$inc: {dailyUsers: 1}},
			{sort: {createdAt: -1}, upsert: true}
		);
	}

	async updateOnlineUsers(count: number): Promise<void> {
		await this.statModel.updateOne(
			{},
			{$set: {onlineUsers: count}},
			{sort: {createdAt: -1}, upsert: true}
		);
	}

	async resetDailyStats(): Promise<void> {
		await this.statModel.updateOne(
			{},
			{$set: {dailyUsers: 0}},
			{sort: {createdAt: -1}, upsert: true}
		);
	}
}