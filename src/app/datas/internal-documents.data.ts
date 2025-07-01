export interface intDocumentsModel {
  id: number;
  iconName: string;
  isActive: boolean;
  title: string;
  isDropDown: boolean;
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
  },

  {
    id: 5,
    iconName: 'received-documents',
    isActive: false,
    title: 'Kelib tushgan',
    isDropDown: true,
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
];
