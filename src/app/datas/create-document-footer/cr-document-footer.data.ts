export interface CrDocFooter {
  id: number;
  iconName: string;
  text: string;
}

export const crDocFooterData: CrDocFooter[] = [
  {
    id: 1,
    iconName: 'register-qr-code',
    text: 'QR kod orqali ro’yxatga olish',
  },

  {
    id: 2,
    iconName: 'main-file',
    text: 'Asosiy fayl',
  },

  {
    id: 3,
    iconName: 'apps',
    text: 'Ilovalar',
  },

  {
    id: 4,
    iconName: 'relatable-documents',
    text: 'Aloqador hujjatlar',
  },
];
