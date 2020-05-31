import React, { Component } from "react";
import Styled from "styled-components";

import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";

import butter from "../../butter-client";

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      meta: {},
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const resp = await butter.post.retrieve(match.params.blogId);
    this.setState(resp.data);
  }

  render() {
    const post = this.state.data;
    const { className } = this.props;
    return (
      <Paper className={className} elevation={3}>
        <div className="blog-post">
          <Button
            onClick={this.props.history.goBack}
            variant="contained"
            color="primary"
          >
            Go back
          </Button>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </Paper>
    );
  }
}

const StyledBlogPost = Styled(BlogPost)`
.blog-post {
    padding: 25px;
}

img {
    width:100%;
}
`;

export default StyledBlogPost;
