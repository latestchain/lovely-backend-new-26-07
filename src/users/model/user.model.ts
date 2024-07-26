import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
	@Prop({ required: true, unique: true })
	telegramId: string;

	@Prop({ required: true })
	firstName: string;

	@Prop()
	lastName: string;

	@Prop()
	username: string;

	@Prop()
	languageCode: string;

	@Prop({ default: false })
	isPremium: boolean;

	@Prop({ default: false })
	allowsWriteToPm: boolean;

	@Prop()
	profilePicture: string;

	@Prop({
		type: String,
		get: (v: string) => BigInt(v),
		set: (v: bigint) => v.toString(),
	})
	balance: bigint;

	@Prop({ required: true })
	level: number;

	@Prop({ required: true, unique: true })
	referralCode: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Create a compound index on level and balance
UserSchema.index({ level: 1, balance: 1 });