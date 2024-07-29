import { basic } from "./basic"

export const userDefaultConfig = {
    level: 1,
    balance: 0n,
    energy: BigInt(basic.maxEnergy),
    earnByTapBoosterLevel: 0,
    energyPerSecondBoosterLevel: 0,
    maxEnergyBoosterLevel: 0,
    earnPerHourBonus: BigInt(basic.earnPerHour),
    lastEnergyUpdateTimestamp: 0,
    lastTapTimestamp: 0,
    lastDailyClaimTimestamp: 0,
    prevDailyClaimTimestamp: 0,
    dailyStreak: 0,
    lastFullEnergyBonusTimestamp: 0,
    fullEnergyBonusCount: 0,
    firstFullEnergyBonusTimestamp: 0,
}