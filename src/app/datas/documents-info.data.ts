export interface DocInfoModel {
  id: number;
  count: number;
  description: string;
  iconName: string;
}

export const docsInfoData: DocInfoModel[] = [
  {
    id: 1,
    count: 11,
    description: 'Prezident hujjatlari',
    iconName: 'president-docs',
  },
  {
    id: 2,
    count: 4,
    description: 'Vazirlar Mahkamasi hujjatlari',
    iconName: 'minister-docs',
  },
  {
    id: 3,
    count: 27,
    description: 'Hukumat komissiyasi',
    iconName: 'govern-comission',
  },
  {
    id: 4,
    count: 56,
    description: 'Ichki hujjatlar',
    iconName: 'internal-docs',
  },
  {
    id: 5,
    count: 9,
    description: 'Hukumat komissiyasi',
    iconName: 'audit',
  },
];
