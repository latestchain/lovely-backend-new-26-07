import { Controller, Get, Post, Body, Param, UseGuards, Logger } from '@nestjs/common';

import { InvitedDto } from './dto/invited.dto';
import {UsersService} from "./users.service";
import {UserRequestDto} from "./dto/user-request.dto";
import {TelegramAuthGuard} from "../auth/telegram-auth.guard";
import {UserResponseDto} from "./dto/user-response.dto";
import {EarnTask} from "./model/earn-task.model";
import {LeaderboardResponseDto} from "./dto/leaderboard-response.dto";

@Controller()
export class UsersController {
	private readonly logger = new Logger(UsersController.name);
	constructor(private readonly appService: UsersService) {}

	@Get()
	getHello(): string {
		return 'Running...';
	}

	@UseGuards(TelegramAuthGuard)
	@Post('user')
	async getOrCreateUser(@Body() userRequestDto: UserRequestDto): Promise<UserResponseDto> {
		this.logger.log('getOrCreateUser', JSON.stringify(userRequestDto));
		return await this.appService.getOrCreateUser(userRequestDto);
	}

	@UseGuards(TelegramAuthGuard)
	@Post('team/:teamId')
	async setTeam(@Body() userRequestDto: UserRequestDto, @Param('teamId') teamId: number): Promise<UserResponseDto> {
		return await this.appService.setTeam(userRequestDto, teamId);
	}

	@UseGuards(TelegramAuthGuard)
	@Post('tap/:count')
	async tap(@Body() userRequestDto: UserRequestDto, @Param('count') count: number): Promise<UserResponseDto> {
		return await this.appService.tap(userRequestDto, count);
	}

	@UseGuards(TelegramAuthGuard)
	@Post('daily')
	async daily(@Body() userRequestDto: UserRequestDto): Promise<UserResponseDto> {
		return await this.appService.claimDailyBonus(userRequestDto);
	}

	@UseGuards(TelegramAuthGuard)
	@Get('earn-tasks')
	async getTasks(): Promise<EarnTask[]> {
		return await this.appService.getTasks();
	}

	@UseGuards(TelegramAuthGuard)
	@Post('earn-task/:taskId')
	async claimEarnTask(@Body() userRequestDto: UserRequestDto, @Param('taskId') taskId: number): Promise<UserResponseDto> {
		return await this.appService.claimEarnTask(userRequestDto, taskId);
	}

	@UseGuards(TelegramAuthGuard)
	@Post('buy-booster/max-energy')
	async buyMaxEnergyBooster(@Body() userRequestDto: UserRequestDto): Promise<UserResponseDto> {
		return await this.appService.buyMaxEnergyBooster(userRequestDto);
	}

	@UseGuards(TelegramAuthGuard)
	@Post('buy-booster/energy-regen')
	async buyEnergyRegenBooster(@Body() userRequestDto: UserRequestDto): Promise<UserResponseDto> {
		return await this.appService.buyEnergyRegenBooster(userRequestDto);
	}

	@UseGuards(TelegramAuthGuard)
	@Post('buy-booster/earn-tap')
	async buyEarnTapBooster(@Body() userRequestDto: UserRequestDto): Promise<UserResponseDto> {
		return await this.appService.buyEarnTapBooster(userRequestDto);
	}

	@UseGuards(TelegramAuthGuard)
	@Post('invited')
	async invited(@Body() userRequestDto: UserRequestDto): Promise<InvitedDto[]> {
		return await this.appService.invited(userRequestDto);
	}

	@UseGuards(TelegramAuthGuard)
	@Get('leaderboard/:level')
	async leaderboard(@Param('level') level: number): Promise<LeaderboardResponseDto[]> {
		return await this.appService.leaderboard(level);
	}

	@UseGuards(TelegramAuthGuard)
	@Get('add-earn-tasks')
	async addEarnTasks(): Promise<EarnTask[]> {
		return await this.appService.addEarnTasks();
	}

}
