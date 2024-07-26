export type LevelData = {
    energyPerSecondMultiplier: number,
    earnByTapMultiplier: number,
    earnPerHourMultiplier: number,
    maxEnergyMultiplier: number,
    pointsToGet: number
}

export const levels: Record<number, LevelData> = {
    1: {
        energyPerSecondMultiplier: 1,
        earnByTapMultiplier: 1,
        earnPerHourMultiplier: 1,
        maxEnergyMultiplier: 1,
        pointsToGet: 0
    },
    2: {
        energyPerSecondMultiplier: 2,
        earnByTapMultiplier: 2,
        earnPerHourMultiplier: 2,
        maxEnergyMultiplier: 2,
        pointsToGet: 5_000
    },
    3: {
        energyPerSecondMultiplier: 3,
        earnByTapMultiplier: 3,
        earnPerHourMultiplier: 3,
        maxEnergyMultiplier: 3,
        pointsToGet: 25_000
    },
    4: {
        energyPerSecondMultiplier: 4,
        earnByTapMultiplier: 4,
        earnPerHourMultiplier: 4,
        maxEnergyMultiplier: 4,
        pointsToGet: 100_000
    },
    5: {
        energyPerSecondMultiplier: 5,
        earnByTapMultiplier: 5,
        earnPerHourMultiplier: 5,
        maxEnergyMultiplier: 5,
        pointsToGet: 1_000_000
    },
    6: {
        energyPerSecondMultiplier: 6,
        earnByTapMultiplier: 6,
        earnPerHourMultiplier: 6,
        maxEnergyMultiplier: 6,
        pointsToGet: 10_000_000
    },
    7: {
        energyPerSecondMultiplier: 7,
        earnByTapMultiplier: 7,
        earnPerHourMultiplier: 7,
        maxEnergyMultiplier: 7,
        pointsToGet: 100_000_000
    },
    8: {
        energyPerSecondMultiplier: 8,
        earnByTapMultiplier: 8,
        earnPerHourMultiplier: 8,
        maxEnergyMultiplier: 8,
        pointsToGet: 500_000_000
    },
    9: {
        energyPerSecondMultiplier: 9,
        earnByTapMultiplier: 9,
        earnPerHourMultiplier: 9,
        maxEnergyMultiplier: 9,
        pointsToGet: 1_000_000_000
    },
    10: {
        energyPerSecondMultiplier: 10,
        earnByTapMultiplier: 10,
        earnPerHourMultiplier: 10,
        maxEnergyMultiplier: 10,
        pointsToGet: 10_000_000_000
    }
};