import * as functions from 'firebase-functions';

export const makeAdmin = functions.firestore
  .document('/users/{id}')
  .onCreate(async snapshot => {
    await snapshot.ref.update({
      roles: {
        ADMIN: 'ADMIN',
      },
    });
  });
