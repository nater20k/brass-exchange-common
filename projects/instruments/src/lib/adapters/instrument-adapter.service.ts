import { Injectable } from '@angular/core';
import {
  ForSaleInstrumentListingFormGroup,
  InstrumentFormGroup,
} from '../forms/form-group';
import { ForSaleListing, Instrument } from '../instrument';

@Injectable({
  providedIn: 'root',
})
export class InstrumentAdapterService {
  constructor() {}
  mapInstrumentFromInstrumentFormGroup(
    instrumentFormGroup: InstrumentFormGroup
  ): Instrument {
    const {
      price,
      brand,
      model,
      boreSize,
      isCaseIncluded,
      key,
      manufactureDate,
      sellerEmail,
      streetAddress,
      city,
      state,
      zip,
      description,
      photoUrls,
      type,
      valveCount,
      finish,
    } = instrumentFormGroup;
    return {
      price,
      brand,
      model,
      key,
      manufactureDate,
      sellerEmail,
      location: {
        streetAddress,
        city,
        state,
        zip,
      },
      isCaseIncluded,
      description,
      photoUrls,
      type,
      valveCount,
      finish,
      boreSize,
    };
  }

  mapInstrumentForSaleFromInstrumentForSaleFormGroup(
    instrumentForSaleFormGroup: ForSaleInstrumentListingFormGroup
  ): ForSaleListing {
    const {
      price,
      brand,
      model,
      boreSize,
      isCaseIncluded,
      isSold,
      isActive,
      key,
      manufactureDate,
      sellerEmail,
      streetAddress,
      city,
      state,
      zip,
      description,
      photoUrls,
      type,
      valveCount,
      finish,
      views,
      favorites,
      dateCreated,
      isShippingAvailable,
    } = instrumentForSaleFormGroup;
    return {
      price,
      brand,
      model,
      key,
      manufactureDate,
      sellerEmail,
      location: {
        streetAddress,
        city,
        state,
        zip,
      },
      isCaseIncluded,
      description,
      photoUrls,
      type,
      valveCount,
      finish,
      boreSize,
      isSold,
      views,
      favorites,
      isActive,
      dateCreated,
      isShippingAvailable,
    };
  }
}
