import BigNumber from "bignumber.js";
import { basic, decimalsMultiplier } from "../config/basic";
import { earnByTapBoost } from "../config/earn-by-tap-boost";
import { maxEnergyBoost } from "../config/max-energy-boost";
import { levels } from "../config/levels";

export const calcUserMaxEnergy = (userLevel: number, boosterLevel: number) => {
    const maxEnergyBoostSum = maxEnergyBoost.slice(0, boosterLevel + 1).reduce((acc, cur) => acc + cur.boost, BigInt(0));

    return BigInt(basic.maxEnergy * levels[userLevel].maxEnergyMultiplier) + maxEnergyBoostSum;
}

export const calcUserEnergyPerSecond = (userLevel: number, maxEnergyBoosterLevel: number) => {
    const maxEnergy = calcUserMaxEnergy(userLevel, maxEnergyBoosterLevel);
    const bnResult = new BigNumber(maxEnergy.toString()).dividedBy(basic.fullEnergyRecoveryTime);
    const normalisedResult = bnResult.multipliedBy(10 ** 2).integerValue(BigNumber.ROUND_CEIL).dividedBy(10 ** 2);
    return normalisedResult.integerValue(BigNumber.ROUND_CEIL).toNumber();
}

export const calcUserEarnPerHour = (userLevel: number, earnPerHourBonus: number) => {
    return basic.earnPerHour * levels[userLevel].earnPerHourMultiplier + earnPerHourBonus;
}

export const calcUserEarnByTap = (userLevel: number, boosterLevel: number) => {
    const earnByTapBoostSum = earnByTapBoost.slice(0, boosterLevel + 1).reduce((acc, cur) => acc + cur.boost * decimalsMultiplier, 0);

    return basic.earnByTap * levels[userLevel].earnByTapMultiplier + earnByTapBoostSum;
}