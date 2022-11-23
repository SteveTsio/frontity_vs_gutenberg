import React from "react";
import { connect } from "frontity";
import Link from "./link";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({state}) => {
    const data = state.source.get(state.router.link);
    return(   
    <>
    <h1>Hello Frontity 123</h1>
    <nav>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/test-page">Test Page</Link>
        <Link href="/sample-page">Sample Page</Link>
    </nav>
    <p> Here you can see my website</p>
    <h1>Posts</h1>
    <h1>Articles</h1>
    <p>current URL: {state.router.link}</p>
    <hr/>
    <main>
        {data.isArchive && <List/>}
        {data.isPost && <Post/>}
        {data.isPage && <Page/>}
    </main>
    </>
    );
  };

  export default connect(Root);