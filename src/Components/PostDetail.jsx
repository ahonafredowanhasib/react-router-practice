import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData()
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
        </div>
    );
};

export default PostDetail;