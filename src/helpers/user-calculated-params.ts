import { basic } from "../config/basic";
import { earnByTapBoost } from "../config/earn-by-tap-boost";
import { energyPerSecondBoost } from "../config/energy-per-second-boost";
import { maxEnergyBoost } from "../config/max-energy-boost";
import { levels } from "../config/levels";

export const calcUserMaxEnergy = (userLevel: number, boosterLevel: number) => {
    return basic.maxEnergy * levels[userLevel].maxEnergyMultiplier + maxEnergyBoost[boosterLevel].boost;
}

export const calcUserEnergyPerSecond = (userLevel: number, boosterLevel: number) => {
    return basic.energyPerSecond * levels[userLevel].energyPerSecondMultiplier + energyPerSecondBoost[boosterLevel].boost;
}

export const calcUserEarnPerHour = (userLevel: number, earnPerHourBonus: number) => {
    return basic.earnPerHour * levels[userLevel].earnPerHourMultiplier + earnPerHourBonus;
}

export const calcUserEarnByTap = (userLevel: number, boosterLevel: number) => {
    return basic.earnByTap * levels[userLevel].earnByTapMultiplier + earnByTapBoost[boosterLevel].boost;
}