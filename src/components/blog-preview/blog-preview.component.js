import React from "react";
import Styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

const BlogPreview = ({ post, className, match }) => {
  return (
    <div className={className}>
      <Link to={`${match.path}/${post.slug}`}>
        <img src={post.featured_image} alt={post.featured_image_alt}></img>
        <h1>{post.title}</h1>
        <h3>
          Posted <ReactTimeAgo date={post.published} />
        </h3>
        <p>{post.summary}</p>
      </Link>
    </div>
  );
};

const StyledBlogPreview = Styled(BlogPreview)`
display: flex;
flex-direction: column;
border-radius: 5px;
padding: 25px;
-moz-osx-font-smoothing: grayscale;
backface-visibility: hidden;
cursor: pointer;
transform: translateZ(0);
transition: transform 0.25s ease-out;
box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);

&:hover {
  transform: scale(1.05);
}

img {
    width: 200px;
}

`;

export default withRouter(StyledBlogPreview);
