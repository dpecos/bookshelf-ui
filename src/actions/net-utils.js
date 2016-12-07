export function asyncFetch(entity, jsonHandler) {
    return (dispatch => {
        try {
            dispatch({type: "NETWORK_ON"});
            fetch(`http://localhost:1337/apps.danielpecos.com/bookshelf/${entity}.json`, { 
                headers: {
                    'Authorization':'Basic XXX'
                }
            })
            .then(response => response.json())
            .then(json => jsonHandler(dispatch, json));
        } catch (err) {
            dispatch({type: "NETWORK_ERROR", error: err.toString() })
        }
        dispatch({type: "NETWORK_OFF"});
    })
};