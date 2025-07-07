export interface intDocumentsModel {
  id: number;
  iconName: string;
  isActive: boolean;
  title: string;
  isDropDown: boolean;
  isExpanded?: boolean;
  children?: string[];
}

export const intDocumentsData: intDocumentsModel[] = [
  {
    id: 1,
    iconName: 'main-page',
    isActive: true,
    title: 'Bosh sahifa',
    isDropDown: false,
  },

  {
    id: 2,
    iconName: 'calendar',
    isActive: false,
    title: 'Taqvim',
    isDropDown: false,
  },

  {
    id: 3,
    iconName: 'my-documents',
    isActive: false,
    title: 'Mening hujjatlarim',
    isDropDown: false,
  },

  {
    id: 4,
    iconName: 'sent-documents',
    isActive: false,
    title: 'Yuborilgan',
    isDropDown: true,
    isExpanded: false,
    children: ['Yuborilgan 1', 'Yuborilgan 2'],
  },

  {
    id: 5,
    iconName: 'received-documents',
    isActive: false,
    title: 'Kelib tushgan',
    isDropDown: true,
    isExpanded: false,
    children: ['Umumiy statistika', 'Foydalanuvchi statistika'],
  },

  {
    id: 6,
    iconName: 'deal',
    isActive: false,
    title: 'Kelishish uchun',
    isDropDown: false,
  },

  {
    id: 7,
    iconName: 'resolution',
    isActive: false,
    title: 'Rezolyutsiya',
    isDropDown: false,
  },

  {
    id: 8,
    iconName: 'sign',
    isActive: false,
    title: 'Imzolash uchun',
    isDropDown: false,
  },

  {
    id: 9,
    iconName: 'sector',
    isActive: false,
    title: 'Sektor fishka',
    isDropDown: true,
    isExpanded: false,
    children: ['Sector-1', 'Sector-2', 'Sector-3'],
  },

  {
    id: 10,
    iconName: 'section-documents',
    isActive: false,
    title: "Bo'limim hujjatlari",
    isDropDown: false,
  },

  {
    id: 11,
    iconName: 'editor',
    isActive: false,
    title: 'Tahrirchi',
    isDropDown: false,
  },

  {
    id: 12,
    iconName: 'statistics',
    isActive: false,
    title: 'Statistika',
    isDropDown: true,
    isExpanded: false,
    children: ['Haftalik statistikalar', 'Yillik statistikalar'],
  },

  {
    id: 13,
    iconName: 'reports',
    isActive: false,
    title: 'Hisobotlar',
    isDropDown: true,
    isExpanded: false,
    children: ['Haftalik hisobot', 'Oylik hisobot'],
  },
];
