import { decimalsMultiplier } from "./basic";

export type LevelData = {
    energyPerSecondMultiplier: number,
    earnByTapMultiplier: number,
    earnPerHourMultiplier: number,
    maxEnergyMultiplier: number,
    pointsToGet: bigint
}

export const levels: Record<number, LevelData> = {
    1: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 1,
        earnPerHourMultiplier: 1,
        maxEnergyMultiplier: 1,
        pointsToGet: BigInt(0) * BigInt(decimalsMultiplier)
    },
    2: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 2,
        earnPerHourMultiplier: 2,
        maxEnergyMultiplier: 2,
        pointsToGet: BigInt(200) * BigInt(decimalsMultiplier)
    },
    3: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 3,
        earnPerHourMultiplier: 3,
        maxEnergyMultiplier: 3,
        pointsToGet: BigInt(1000) * BigInt(decimalsMultiplier)
    },
    4: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 4,
        earnPerHourMultiplier: 4,
        maxEnergyMultiplier: 4,
        pointsToGet: BigInt(10000) * BigInt(decimalsMultiplier)
    },
    5: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 5,
        earnPerHourMultiplier: 5,
        maxEnergyMultiplier: 5,
        pointsToGet: BigInt(40000) * BigInt(decimalsMultiplier)
    },
    6: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 6,
        earnPerHourMultiplier: 6,
        maxEnergyMultiplier: 6,
        pointsToGet: BigInt(80000) * BigInt(decimalsMultiplier)
    },
    7: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 7,
        earnPerHourMultiplier: 7,
        maxEnergyMultiplier: 7,
        pointsToGet: BigInt(400000) * BigInt(decimalsMultiplier)
    },
    8: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 8,
        earnPerHourMultiplier: 8,
        maxEnergyMultiplier: 8,
        pointsToGet: BigInt(2000000) * BigInt(decimalsMultiplier)
    },
    9: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 9,
        earnPerHourMultiplier: 9,
        maxEnergyMultiplier: 9,
        pointsToGet: BigInt(4000000) * BigInt(decimalsMultiplier)
    },
    10: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 10,
        earnPerHourMultiplier: 10,
        maxEnergyMultiplier: 10,
        pointsToGet: BigInt(40000000) * BigInt(decimalsMultiplier)
    }
};

