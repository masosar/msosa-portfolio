import React from "react";
import axios from "axios";

const Test = () => {
  //const baseUrl = "https://ghibliapi.herokuapp.com/films/";
  const baseUrl = "https://node-ex-mysql.herokuapp.com/movies";

  const petitionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      console.log(response.data);
    })
    .catch(err=>err);
  };

  return (
    <div>
      <button onClick={petitionGet}>Execute</button>
    </div>
  );
};

export default Test;
