import { Data } from "./dummy";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {Data.map((item) => {
        return (
          <div>
            <h3>Id : {item.id}</h3>
            <h3> Name : {item.username}</h3>
            <img width={"70px"} src={item.image} alt="" />
            <h3>followers : {item.follower}</h3>
            <h3>following : {item.following}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
