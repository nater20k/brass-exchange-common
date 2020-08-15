export interface Instrument {
  id?: string;
  price: number;
  brand: string;
  model: string;
  key: string;
  manufactureDate: Date;
  sellerEmail: string;
  location: Location;
  isCaseIncluded: boolean;
  description: string;
  photoUrls: string[];
  type: string;
  valveCount?: number;
  finish: 'raw' | 'silver' | 'lacquer';
  boreSize?: number;
  size?: '3/4' | '4/4' | '5/4' | '6/4';
}

interface Location {
  streetAddress?: string;
  city: string;
  state: string;
  zip: string;
}

export interface ForSaleListing extends Instrument {
  views: number;
  favorites: number;
  dateCreated: Date;
  isActive: boolean;
  isSold: boolean;
  isShippingAvailable: boolean;
}
