import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const{id,title}=post;
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>
            <button>Show Details</button></Link>
        </div>
    );
};

export default Post;