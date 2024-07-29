import { decimalsMultiplier } from "./basic"

export const referralBonus = {
    regular: BigInt(100 * decimalsMultiplier),
    premium: BigInt(200 * decimalsMultiplier),
}

const referralBonusPerLevelNumber = [
    { regular: 0, premium: 0 }, // 0
    { regular: 250, premium: 500 }, // 1
    { regular: 500, premium: 1_000 }, // 2
    { regular: 1_000, premium: 2_000 }, // 3
    { regular: 1_500, premium: 3_000 }, // 4
    { regular: 3_000, premium: 6_000 }, // 5
    { regular: 5_000, premium: 12_000 }, // 6
    { regular: 10_000, premium: 25_000 }, // 7
    { regular: 20_000, premium: 45_000 }, // 8
    { regular: 50_000, premium: 120_000 }, // 9
];

export const referralBonusPerLevel = referralBonusPerLevelNumber.map((bonus) => ({
    regular: BigInt(bonus.regular * decimalsMultiplier),
    premium: BigInt(bonus.premium * decimalsMultiplier),
}));