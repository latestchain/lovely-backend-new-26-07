import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {User, UserSchema} from './model/user.model';
import {StatsModule} from "../stats/stats.module";
import {UserData, UserDataSchema} from "./model/user-data.model";
import {Referral, ReferralSchema} from "./model/referral.model";
import {EarnTask, EarnTaskSchema} from "./model/earn-task.model";

@Module({
	imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema},
		{name: UserData.name, schema: UserDataSchema},
		{name: Referral.name, schema: ReferralSchema},
		{name: EarnTask.name, schema: EarnTaskSchema}]),
		StatsModule],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [UsersService],
})
export class UsersModule {
}