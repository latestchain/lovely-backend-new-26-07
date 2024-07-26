import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateReferralRewardDto {
	@IsNumber()
	@IsNotEmpty()
	referralLeagueReward: number;
}