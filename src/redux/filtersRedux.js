
export const getAllFilters = ({ filters }) => filters;


const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_TAGS = createActionName('CHANGE_TAGS');

export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeSearchDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changeSearchTags = payload => ({ payload, type: CHANGE_TAGS });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: action.payload,
      };
    case CHANGE_TAGS:
      return {
        ...statePart,
        tags: action.payload,
      };
    default:
      return statePart;
  }
}
