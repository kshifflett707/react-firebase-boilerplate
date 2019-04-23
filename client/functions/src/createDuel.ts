import * as functions from 'firebase-functions';

export const createDuel = functions.firestore
  .document('/duels/{id}')
  .onCreate(async snapshot => {
    return snapshot.ref.set(
      {
        started: false,
      },
      { merge: true },
    );
  });
