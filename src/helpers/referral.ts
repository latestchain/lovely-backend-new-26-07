export const referralPrefix = 'kentId';

export const generateReferralCode = (id: number): string => `${referralPrefix}${id}`;

export const getReferrerId = (referralCode: string): string => referralCode.replace(referralPrefix, '');