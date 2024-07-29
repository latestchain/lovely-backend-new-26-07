export const decimals = 2;
export const decimalsMultiplier = Math.pow(10, decimals);

export const basic = {
    earnByTap: 0.3 * decimalsMultiplier,
    earnPerHour: 0 * decimalsMultiplier,
    maxEnergy: 100 * decimalsMultiplier,
    fullEnergyRecoveryTime: 60 * 60, // 1 hour
}