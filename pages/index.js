import { Fragment } from "react";
import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeatruedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Wontae's Blog</title>
        <meta
          name="description"
          content="blog for posting about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeatruedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
