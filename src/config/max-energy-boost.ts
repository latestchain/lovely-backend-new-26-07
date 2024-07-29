import { decimalsMultiplier } from "./basic";

const maxEnergyBoostNumber = [
    { cost: 0, boost: 0 }, // level 0
    { cost: 100, boost: 50 }, // level 1
    { cost: 500, boost: 100 }, // level 2
    { cost: 1000, boost: 100 }, // level 3
    { cost: 2500, boost: 100 }, // level 4
    { cost: 5000, boost: 100 }, // level 5
    { cost: 7500, boost: 100 }, // level 6
    { cost: 12500, boost: 100 }, // level 7
    { cost: 17500, boost: 100 }, // level 8
    { cost: 25000, boost: 100 }, // level 9
    { cost: 50000, boost: 100 } // level 10
];

export const maxEnergyBoost = maxEnergyBoostNumber.map((value) => ({
    cost: BigInt(value.cost * decimalsMultiplier),
    boost: BigInt(value.boost * decimalsMultiplier)
}));