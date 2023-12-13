import React from "react";
import "../styles/followers.css";
import { useGlobalContext } from "../hooks/useGlobalContext";

const Followers = () => {
  const { followers } = useGlobalContext();
  return (
    <div className="followers-wrapper">
      <div className="followers">
        {followers.map((follower, index) => {
          const { html_url, avatar_url, login } = follower;
          return (
            <article key={index}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4> {login} </h4>
                <a href={html_url} target="_blank">
                  {html_url}{" "}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Followers;
