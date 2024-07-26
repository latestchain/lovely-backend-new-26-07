import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	tg_id: string;

	@IsString()
	@IsNotEmpty()
	username: string;

	@IsString()
	@IsOptional()
	firstName?: string;

	@IsString()
	@IsOptional()
	lastName?: string;

	@IsString()
	@IsOptional()
	referredBy?: string;
}