import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as crypto from 'crypto';

@Injectable()
export class TelegramAuthGuard implements CanActivate {
	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		const authData = this.extractAuthData(request);
		console.log('TelegramAuthGuard authData ------------------> ',authData);
		if (!authData) {
			throw new UnauthorizedException('Missing Telegram authentication data');
		}

		if (!this.validateTelegramAuth(authData)) {
			throw new UnauthorizedException('Invalid Telegram authentication data');
		}

		// Attach the verified user data to the request
		// request['user'] = {
		// 	id: authData.id,
		// 	first_name: authData.first_name,
		// 	username: authData.username,
		// };

		return true;
	}

	private extractAuthData(request: any): any {
		// Extract Telegram auth data from request headers or query parameters
		// Adjust this based on how you're sending the data from the client
		return request.headers['x-telegram-auth'] ?? null;
	}

	private validateTelegramAuth(authData: any): boolean {
		if (!authData) {
			throw new UnauthorizedException('Unauthorized');
		}

		const initData = new URLSearchParams(authData);
		const hashFromClient = initData.get('hash');
		const dataToCheck: string[] = [];

		initData.sort();
		initData.forEach((v, k) => k !== 'hash' && dataToCheck.push(`${k}=${v}`));

		const secret = crypto
			.createHmac('sha256', 'WebAppData')
			.update(process.env.BOT_TOKEN);

		const signature = crypto
			.createHmac('sha256', secret.digest())
			.update(dataToCheck.join('\n'));

		const referenceHash = signature.digest('hex');

		if (hashFromClient !== referenceHash) {
			throw new UnauthorizedException('Unauthorized');
		}

		return true;
	}
}