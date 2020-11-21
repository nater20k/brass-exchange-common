import { Injectable } from '@angular/core';
import { User } from '../user';
import { UserFormGroup } from '../forms/user-form-group';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class UserAdapterService {
  mapUserFromRegister(user: firebase.auth.UserCredential, userFormGroup?: UserFormGroup): User {
    return userFormGroup
      ? {
          ...this.mapFormGroupUser(userFormGroup),
          ...this.mapPartialFirebaseUser(user),
        }
      : this.mapFullFirebaseUser(user);
  }

  private mapPartialFirebaseUser({ user }: firebase.auth.UserCredential) {
    return {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      dateAccountCreated: new Date(user.metadata.creationTime),
      photoUrl: user.photoURL,
    };
  }

  private mapFullFirebaseUser({ user, additionalUserInfo }: firebase.auth.UserCredential) {
    return {
      uid: user.uid,
      displayName: user.displayName,
      firstName: additionalUserInfo.profile['given_name'],
      lastName: additionalUserInfo.profile['family_name'],
      email: user.email,
      dateAccountCreated: new Date(user.metadata.creationTime),
      photoUrl: user.photoURL,
      principalInstrument: '',
      instrumentsListed: [],
      rating: 0,
      messageThreadIds: [],
    };
  }

  private mapFormGroupUser(userFormGroup: UserFormGroup) {
    return {
      firstName: userFormGroup.firstName,
      lastName: userFormGroup.lastName,
      principalInstrument: userFormGroup.principalInstrument,
      instrumentsListed: [],
      rating: 0,
      messageThreadIds: [],
    };
  }
}
