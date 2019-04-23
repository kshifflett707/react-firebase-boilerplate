import * as functions from 'firebase-functions';

export const startDuel = functions.firestore
  .document('/duels/{id}')
  .onUpdate((change, context) => {
    const data = change.after.data();
    const previousData = change.before.data();

    if (data.challenger && data.started === false) {
      return change.after.ref.set(
        {
          challenge: 'code here',
          started: true,
        },
        { merge: true },
      );
    } else return null;
  });
