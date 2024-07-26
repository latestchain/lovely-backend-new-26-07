import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stat extends Document {
	@Prop({ required: true })
	totalBalance: number;

	@Prop({ required: true })
	totalUsers: number;

	@Prop({ required: true })
	totalTaps: number;

	@Prop({ required: true })
	dailyUsers: number;

	@Prop({ required: true })
	onlineUsers: number;

	@Prop({ type: Date, default: Date.now })
	createdAt: Date;

	@Prop({ type: Date, default: Date.now })
	updatedAt: Date;
}

export const StatSchema = SchemaFactory.createForClass(Stat);