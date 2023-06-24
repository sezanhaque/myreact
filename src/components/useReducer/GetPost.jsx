import { useEffect, useState } from 'react';
import Post from './Post';

export default function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState(new Post());

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setPost(data);
                setError('');
            })
            .catch(() => {
                setLoading(false);
                setPost({});
                setError('There was a problem');
            });
    }, []);

    return (
        <div>
            <h2>Post</h2>
            {loading ? 'Loading...' : post.title}
            {error || null}
        </div>
    );
}
