export interface SentMissionsModel {
  id: number;
  quantity: number | string;
  description: string;
}

export const sentMissionsData: SentMissionsModel[] = [
  {
    id: 1,
    quantity: '25',
    description: 'Barcha topshiriqlar',
  },
  {
    id: 2,
    quantity: '17',
    description: 'Ijro uchun',
  },
  {
    id: 3,
    quantity: '6',
    description: "Ma'lumot uchun",
  },
  {
    id: 4,
    quantity: '13',
    description: "Muddati o'tgan",
  },
  {
    id: 5,

    quantity: '917',
    description: 'Imzolash uchun',
  },
  {
    id: 6,

    quantity: '917',
    description: 'Imzoda ',
  },
  {
    id: 7,

    quantity: '7',
    description: 'Kelishish uchun',
  },
  {
    id: 8,
    quantity: '0',
    description: 'Kelishilmagan',
  },
];
