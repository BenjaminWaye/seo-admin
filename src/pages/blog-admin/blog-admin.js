import React, { Component } from "react";
import { Route } from "react-router-dom";

import { Box } from "@material-ui/core";

import BlogList from "../../components/blog-list/blog-list.component";
import BlogPost from "./../blog-post/blog-post";

import butter from "../../butter-client";

class BlogAdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      meta: {},
    };
  }

  async componentDidMount() {
    const resp = await butter.post.list({ page: 1, page_size: 10 });
    this.setState(resp.data);
  }

  render() {
    const { match } = this.props;
    return (
      <Box p={4}>
        <Route path={`${match.path}/:blogId`} component={BlogPost} />
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <BlogList {...props} blogPosts={this.state.data} />
          )}
        />
      </Box>
    );
  }
}

export default BlogAdminPage;
