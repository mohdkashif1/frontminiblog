import React from 'react';

const Post = ({id,image,title,description}) => {
  return <div className='col-md-4 popular-post post'>
  <a href={`/${id}`}>
    <img src={image} alt=''></img>
    <h3 className='pt-2'>{title}</h3>
    <p>{description}</p>
    <h6> Read...</h6>
    </a>
</div>;
};

export default Post;
