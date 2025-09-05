export interface ProjectStats {
  droneGoal: {
    current: number;
    total: number;
  };
  financial: {
    collected: number;
    personalExpenses: number;
    totalExpenses: number;
  };
  updates: {
    expensesDate: string;
    donationsDate: string;
  };
  donationLink: string;
}

export const PROJECT_STATS: ProjectStats = {
  droneGoal: {
    current: 30,
    total: 101
  },
  financial: {
    collected: 359202,
    personalExpenses: 185297,
    totalExpenses: 562348
  },
  updates: {
    expensesDate: '05.09.2025',
    donationsDate: '27.08.2025'
  },
  donationLink: 'https://send.monobank.ua/jar/6RShmRTEb'
};
