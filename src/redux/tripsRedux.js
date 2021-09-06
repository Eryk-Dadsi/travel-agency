export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }
  if (filters.duration) {
    output = output.filter(trip =>
      trip.days >= filters.duration.from
      && trip.days <= filters.duration.to);
  }
  if (filters.tags.length != 0) {

    output = output.filter(trip => {
      if (filters.tags.length == 1) { return trip.tags.includes(filters.tags[0]); }
      else if (filters.tags.length == 2) { return trip.tags.includes(filters.tags[0]) && trip.tags.includes(filters.tags[1]); }
      else if (filters.tags.length == 3) { return trip.tags.includes(filters.tags[0]) && trip.tags.includes(filters.tags[1]) && trip.tags.includes(filters.tags[2]); }
    }
    );
  }
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


