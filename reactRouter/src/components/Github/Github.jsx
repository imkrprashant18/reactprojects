import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/imkrprashant18")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className=" text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub Followers:{data.followers}
      <p>{data.bio}</p>
      <h3>{data.name}</h3>
      <img src={data.avatar_url} alt="git pic" width={300} />
      <h4>{data.login}</h4>
      <h5>{data.blog}</h5>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/imkrprashant18");
  return res.json();
};
