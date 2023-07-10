import { useEffect, useState } from "react";
import Post from "../Post";
//import LoginPage from "./LoginPage";
//import RegisterPage from "./RegisterPage";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);

      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post key={post._id}{...post} />
      ))}
    </>
  );
}