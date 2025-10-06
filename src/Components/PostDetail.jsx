import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData()
    const navigate = useNavigate()

    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetail;