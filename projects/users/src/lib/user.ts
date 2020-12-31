import { ForSaleListing } from '@nater20k/brass-exchange-instruments';
import { ThreadMetaData } from './message';

export interface User {
  uid: string;
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  dateAccountCreated: Date;
  instrumentsListed: ForSaleListing[];
  rating: number;
  photoUrl: string;
  principalInstrument?: string;
  favoritedInstruments?: ForSaleListing[];
  threads?: ThreadMetaData[];
}
