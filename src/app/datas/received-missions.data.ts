export interface RecMissionsModel {
  id: number;
  count: number;
  title: string;
  iconName: string;
  bgColor: string;
}

export const recMissionData: RecMissionsModel[] = [
  {
    id: 1,
    count: 916,
    title: 'Imzolash uchun',
    iconName: 'received-m-sign',
    bgColor: '#B9E6FE',
  },

  {
    id: 2,
    count: 13,
    title: 'Rezolyutsiya',
    iconName: 'received-m-resolution',
    bgColor: '#C8CCE5',
  },

  {
    id: 3,
    count: 0,
    title: 'Kelishish uchun',
    iconName: 'received-m-deal',
    bgColor: '#D0F55C',
  },

  {
    id: 4,
    count: 21,
    title: 'Nazorat reja yaratish',
    iconName: 'create-control',
    bgColor: '#D9D6FE',
  },
];
