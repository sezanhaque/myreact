import { useEffect, useReducer } from 'react';
import Post from './Post';

const initialState = {
    loading: true,
    post: {},
    error: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: new Post(
                    action.result.userId,
                    action.result.id,
                    action.result.title,
                    action.result.body
                ),
                error: '',
            };
        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'There was a problem fetching!',
            };
        default:
            return state;
    }
};

export default function GetPostReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: 'SUCCESS',
                    result: data,
                });
            })
            .catch(() => {
                dispatch({ type: 'ERROR' });
            });
    }, []);

    return (
        <div>
            <h2>Post</h2>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error || null}
        </div>
    );
}
