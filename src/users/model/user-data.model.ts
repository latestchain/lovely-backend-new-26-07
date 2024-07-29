import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserData extends Document {
	@Prop({ required: true, unique: true })
	telegramId: string;

	@Prop({
		type: String,
		get: (v: string) => BigInt(v),
		set: (v: bigint) => v.toString(),
		required: true,
	})
	energy: bigint;

	@Prop({ required: true })
	earnByTapBoosterLevel: number;

	@Prop({ required: true })
	energyPerSecondBoosterLevel: number;

	@Prop({ required: true })
	maxEnergyBoosterLevel: number;

	@Prop({
		type: String,
		get: (v: string) => BigInt(v),
		set: (v: bigint) => v.toString(),
		required: true,
	})
	earnPerHourBonus: bigint;

	@Prop({ required: true })
	lastEnergyUpdateTimestamp: number;

	@Prop({ required: true })
	lastTapTimestamp: number;

	@Prop({ required: true })
	lastDailyClaimTimestamp: number;

	@Prop({ required: true })
	prevDailyClaimTimestamp: number;

	@Prop({ required: true })
	dailyStreak: number;

	@Prop({ required: true })
	lastFullEnergyBonusTimestamp: number;

	@Prop({ required: true })
	firstFullEnergyBonusTimestamp: number;

	@Prop({ required: true })
	fullEnergyBonusCount: number;

	@Prop()
	teamId?: number;

	@Prop()
	earnTaskIds?: string;
}

export const UserDataSchema = SchemaFactory.createForClass(UserData);