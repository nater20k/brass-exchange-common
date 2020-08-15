import {
  ForSaleListing,
  Instrument,
} from '../../../instruments/src/lib/instrument';

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
  favoritedInstruments?: Instrument[];
}
