import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {EarnTaskType} from "../../constants/enums/earn-task-type";


@Schema()
export class EarnTask extends Document {
	@Prop({ required: true, unique: true, type: Number })
	id: number;

	@Prop({ required: true })
	link: string;

	@Prop({ required: true, enum: EarnTaskType })
	type: EarnTaskType;

	@Prop({
		type: String,
		get: (v: string) => BigInt(v),
		set: (v: bigint) => v.toString(),
		required: true,
	})
	reward: bigint;
}

export const EarnTaskSchema = SchemaFactory.createForClass(EarnTask);
