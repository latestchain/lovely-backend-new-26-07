import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Setting extends Document {
	@Prop({ required: true })
	dailyFullEnergy: number;

	@Prop({ required: true })
	dailyTurbo: number;

	@Prop({ type: [Number], default: [] })
	dailyReward: number[];

	@Prop({ type: [Number], default: [] })
	leaguesBalanceReq: number[];

	@Prop({ type: [Number], default: [] })
	leaguesReward: number[];

	@Prop({ type: [String], default: [] })
	leaguesName: string[];

	@Prop({ type: [Number], default: [] })
	referralReward: number[];

	@Prop({ required: true })
	welcomeReward: number;

	@Prop({ type: [Number], default: [] })
	referralCount: number[];

	@Prop({ type: [Number], default: [] })
	multiTapPrice: number[];

	@Prop({ type: [Number], default: [] })
	tapAmount: number[];

	@Prop({ type: [Number], default: [] })
	boostAmount: number[];

	@Prop({ type: [Number], default: [] })
	energyLimitPrice: number[];

	@Prop({ type: [Number], default: [] })
	rechargingSpeedPrice: number[];

	@Prop({ required: true })
	tapBotPrice: number;

	@Prop({ type: Date, default: Date.now })
	createdAt: Date;

	@Prop({ type: Date, default: Date.now })
	updatedAt: Date;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);