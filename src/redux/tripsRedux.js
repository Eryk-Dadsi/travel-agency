/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;
  // console.log(trips);
  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }
  // TODO - filter by duration
  if (filters.duration) {
    output = output.filter(trip =>
      trip.days >= filters.duration.from
      && trip.days <= filters.duration.to);
  }
  // TODO - filter by tags
  if (filters.tags.length != 0) {
    // console.log(trips[1].tags)
    // console.log(filters.tags)

    output = output.filter(trip => {
      if (filters.tags.length == 1) { return trip.tags.includes(filters.tags[0]); }
      else if (filters.tags.length == 2) { return trip.tags.includes(filters.tags[0]) && trip.tags.includes(filters.tags[1]); }
      else if (filters.tags.length == 3) { return trip.tags.includes(filters.tags[0]) && trip.tags.includes(filters.tags[1]) && trip.tags.includes(filters.tags[2]); }
    }
    );
  }
  // TODO - sort by cost descending (most expensive goes first)
  console.log(output);
  return output;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips.filter((trip) => trip.id == tripId);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips.filter((trip) => trip.country.code == countryCode);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
