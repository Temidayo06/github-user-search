import { useContext } from "react";
import { GithubContext } from "../context/context";

export const useGlobalContext = () => useContext(GithubContext);
