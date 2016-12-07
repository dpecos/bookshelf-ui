import { asyncFetch } from './net-utils';

export function fetchCategories() {
    return asyncFetch('categories', (dispatch, json) => {
        const categories = json.map(entry => entry.name);
        dispatch({type: "CATEGORIES_RETRIEVED", categories: categories});
    });
}
