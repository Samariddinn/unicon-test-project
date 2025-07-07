export interface SFormModel {
  id: number;
  text: string;
  isActive: boolean;
}

export const categoryData: SFormModel[] = [
  {
    id: 1,
    text: 'Barchasi',
    isActive: true,
  },

  {
    id: 2,
    text: "Ko'p qo'llanadiganlar",
    isActive: false,
  },

  {
    id: 3,
    text: 'quyi tashkilotlar',
    isActive: false,
  },

  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet',
    isActive: false,
  },

  {
    id: 5,
    text: 'Lorem ipsum dolor sit amet',
    isActive: false,
  },

  {
    id: 6,
    text: 'Ut enim ad minim veniam',
    isActive: false,
  },

  {
    id: 7,
    text: 'Excepteur sint occaecat',
    isActive: false,
  },

  {
    id: 8,
    text: 'Nulla facilisi nullam',
    isActive: false,
  },
];

export const facilityTypes: SFormModel[] = [
  {
    id: 1,
    text: 'Давлат ҳокимияти олий органлари',
    isActive: false,
  },

  {
    id: 2,
    text: 'Марказий муассасалар',
    isActive: false,
  },

  {
    id: 3,
    text: 'Вазирликлар',
    isActive: false,
  },

  {
    id: 4,
    text: 'Маҳаллий давлат ҳокимияти органлари',
    isActive: false,
  },

  {
    id: 5,
    text: 'Агентликлар',
    isActive: false,
  },
  {
    id: 6,
    text: 'Марказлар',
    isActive: false,
  },

  {
    id: 7,
    text: 'Инспекциялар',
    isActive: false,
  },

  {
    id: 8,
    text: 'Фондлар',
    isActive: false,
  },
];
