import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { Stat, StatSchema } from './stat.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: Stat.name, schema: StatSchema }])],
	controllers: [StatsController],
	providers: [StatsService],
	exports: [StatsService],
})
export class StatsModule {}