import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate()

    const handleNavegate = () => {
        
        navigate(`/users/${id}`)
    }



    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>

            <h2>{title}</h2>
            <Link to={`/post/${id}`}>
                <button>Show Details</button></Link>
            <button onClick={handleNavegate}>Details id: {id}</button>
        </div>
    );
};

export default Post;