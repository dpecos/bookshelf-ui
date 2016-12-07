import { asyncFetch } from './net-utils';

export function fetchCollections() {
    return asyncFetch('collections', (dispatch, json) => {
        const collections = json.map(entry => entry.name);
        dispatch({type: "COLLECTIONS_RETRIEVED", collections: collections});
    });
}
