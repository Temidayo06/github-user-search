import React from "react";
import "../styles/card.css";
import { useGlobalContext } from "../hooks/useGlobalContext";
import {MdBusiness, MdLocationOn, MdLink} from 'react-icons/md'

const Card = () => {
  const { githubUser } = useGlobalContext();
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <div className="card-wrapper">
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name || 'user name'}</h4>
          <p>@ {twitter_username || "No twitter account"}</p>
        </div>
        <a href={html_url} target="_blank">
          Follow
        </a>
      </header>
      <p className="bio"> {bio || 'No bio Added'} </p>
      <div className="links">
        {
          company && <p> <MdBusiness /> {company} </p>
        }

        {
          <p> <MdLocationOn /> {location || 'Earth'} </p>
        }

        {
          blog && <a href={`https://${blog}`}>
            <MdLink /> {blog}
          </a>
        }
      </div>
    </div>
  );
};

export default Card;
