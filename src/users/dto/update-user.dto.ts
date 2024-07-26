import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {

	@IsString()
	@IsOptional()
	username?: string;

	@IsString()
	@IsOptional()
	firstName?: string;

	@IsString()
	@IsOptional()
	lastName?: string;

	@IsNumber()
	@IsOptional()
	coinBalance?: number;

	@IsString()
	@IsOptional()
	league?: string;

	@IsNumber()
	@IsOptional()
	energy?: number;

	@IsNumber()
	@IsOptional()
	maxEnergy?: number;

	@IsNumber()
	@IsOptional()
	rechargeSpeed?: number;

	@IsNumber()
	@IsOptional()
	multitap?: number;
}