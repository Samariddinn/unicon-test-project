export interface DigOfficeModel {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
}

export const digOfficeData: DigOfficeModel[] = [
  {
    id: 1,
    title: '“Raqamli idora” yagona platformasi',
    description:
      '“Raqamli idora” yagona platformasi raqamli hukumat agregatori bo‘lib, davlat organlari faoliyatiga zarur bo‘lgan axborot tizimlarini o‘zaro birlashtirgan va yagona kirish nuqtasi sifatida foydalanuvchi axborot tizimi majmuasidir.',
    isActive: true,
  },

  {
    id: 2,
    title: 'Asosiy funksiyalar',
    description:
      '“Raqamli idora” platformasi davlat organlarining axborot tizimlarini yagona tizimga integratsiya qilish, foydalanuvchilarga markazlashtirilgan kirishni ta’minlash va ma’lumot almashinuvini soddalashtirish imkonini beradi.',
    isActive: false,
  },

  {
    id: 3,
    title: 'Foydalanuvchilar kimlar?',
    description:
      '“Raqamli idora” platformasi turli davlat tashkilotlari, vazirliklar, mahalliy hokimiyatlar hamda ularning xodimlari uchun mo‘ljallangan.',
    isActive: false,
  },
];
