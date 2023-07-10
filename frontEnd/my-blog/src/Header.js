import {Link} from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import { UserContext } from "./userContext";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
         setUserInfo(userInfo);
      });
    });
  }, []);

function logout() {
  fetch('/logout', {
    credentials: 'include',
    method:'POST'
  });
  setUserInfo(null)
}

const username = userInfo?.username
    return (
      <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username && (
          <>
          <Link to="/create" className="logo">Create new post</Link>
          <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )
        }
      </nav>
    </header>
    )
    
}