import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Referral extends Document {
	@Prop({ required: true, unique: true })
	invitedId: string;

	@Prop({ required: true })
	referralCode: string;

	@Prop({ required: true })
	referrerId: string;

	@Prop({ required: true })
	invitedPremium: boolean;

	@Prop({ required: true })
	reward: number;

	@Prop({ required: false })
	username: string;

	@Prop({ required: true })
	firstName: string;

	@Prop({ required: false })
	lastName: string;
}

export const ReferralSchema = SchemaFactory.createForClass(Referral);

// Create an index on referralCode for faster lookups
ReferralSchema.index({ referralCode: 1 });

// Create an index on referrerId for faster lookups
ReferralSchema.index({ referrerId: 1 });