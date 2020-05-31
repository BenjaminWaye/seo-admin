import React from "react";
import BlogPreview from "../blog-preview/blog-preview.component";
import Styled from "styled-components";

const BlogList = ({ blogPosts, className }) => {
  return (
    <div className={className}>
      {blogPosts.length ? (
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <BlogPreview key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <span className="empty-message">No blogposts to review</span>
      )}
    </div>
  );
};

const StyledBlogList = Styled(BlogList)`
  .blog-posts {
    width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 20px;
  }

  .empty-message {
    text-align center;
    padding: 40px;
  }

  
`;

export default StyledBlogList;
