import { decimalsMultiplier } from "./basic";

const maxEnergyBoostNumber = [
    { cost: 0, boost: 0 }, // level 0
    { cost: 100, boost: 1 }, // level 1
    { cost: 500, boost: 2 }, // level 2
    { cost: 1000, boost: 3 }, // level 3
    { cost: 2500, boost: 4 }, // level 4
    { cost: 5000, boost: 5 }, // level 5
    { cost: 7500, boost: 6 }, // level 6
    { cost: 12500, boost: 7 }, // level 7
    { cost: 17500, boost: 8 }, // level 8
    { cost: 25000, boost: 9 }, // level 9
    { cost: 50000, boost: 10 } // level 10
];

export const maxEnergyBoost = maxEnergyBoostNumber.map((value) => ({
    cost: BigInt(value.cost * decimalsMultiplier),
    boost: value.boost
}));