export interface Instrument {
  id?: string;
  brand: string;
  model: string;
  key: string;
  manufactureDate: Date;
  ownerId: string;
  location: Location;
  description: string;
  photoUrls: string[];
  type: string;
  valveCount?: number;
  finish: Finish;
  boreSize?: number;
  size?: TubaSize;
}

export type Finish = 'raw' | 'silver' | 'lacquer';
export type TubaSize = '3/4' | '4/4' | '5/4' | '6/4';

interface Location {
  streetAddress?: string;
  city: string;
  state: string;
  zip: string;
}

export interface ForSaleListing extends Instrument {
  price: number;
  views: number;
  favorites: number;
  dateCreated: Date;
  isActive: boolean;
  isSold: boolean;
  isShippingAvailable: boolean;
  isCaseIncluded: boolean;
  comments?: Comment[];
}

export interface Comment {
  content: string;
  username: string;
  createdDate: Date;
  likes: number;
}
