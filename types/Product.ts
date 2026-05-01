export enum ProductType {
  APP = 'app',
  SERVICE = 'service',
  HARDWARE = 'hardware',
}

export interface Product {
  name: string;
  description: string;
  dateClose: string;
  dateOpen: string;
  link: string;
  type: ProductType;
}

export type ProductWithSlug = Product & {
  slug: string;
  dateCloseMs: number;
  dateOpenYear: number;
  dateCloseYear: number;
  dateCloseMonth: string;
  duration: string;
};
