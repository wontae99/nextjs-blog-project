import Head from "next/head";
import { Fragment } from "react";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     title: "POST 1",
//     slug: "p1",
//     image: "xhaka.jpg",
//     excerpt: "Hi! it's first post",
//     date: "2022-12-12",
//   },
// ];

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all my blog posts " />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
