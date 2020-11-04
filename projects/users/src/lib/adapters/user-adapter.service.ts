import { Injectable } from '@angular/core';
import { User } from '../user';
import { UserFormGroup } from '../forms/user-form-group';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class UserAdapterService {
  mapUserFromRegister(user: auth.UserCredential, userFormGroup?: UserFormGroup): User {
    return userFormGroup
      ? {
          ...this.mapFormGroupUser(userFormGroup),
          ...this.mapPartialFirebaseUser(user),
        }
      : this.mapFullFirebaseUser(user);
  }

  private mapPartialFirebaseUser(user: auth.UserCredential) {
    return {
      uid: user.user.uid,
      displayName: user.user.displayName,
      email: user.user.email,
      dateAccountCreated: new Date(user.user.metadata.creationTime),
      photoUrl: user.user.photoURL,
    };
  }

  private mapFullFirebaseUser(user: any) {
    return {
      uid: user.user.uid,
      displayName: user.user.displayName,
      firstName: user.additionalUserInfo.profile['given_name'],
      lastName: user.additionalUserInfo.profile['family_name'],
      email: user.user.email,
      dateAccountCreated: new Date(user.user.metadata.creationTime),
      photoUrl: user.user.photoURL,
      principalInstrument: '',
      instrumentsListed: <any>[],
      rating: 0,
    };
  }

  private mapFormGroupUser(userFormGroup: UserFormGroup) {
    return {
      firstName: userFormGroup.firstName,
      lastName: userFormGroup.lastName,
      principalInstrument: userFormGroup.principalInstrument,
      instrumentsListed: <any>[],
      rating: 0,
    };
  }
}
