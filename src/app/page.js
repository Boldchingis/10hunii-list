"use client";
import "./style.css";
import users from "./product.json";
export default function Home() {
  const userList = users.map((props) => (
    <div key={props.id} className="card">
      <div className="leftSide">
        {" "}
        <h2>
          {props.firstName} {props.lastName}
        </h2>
        <p>
          <strong>Number :</strong> {props.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {props.email}
        </p>
        <p>
          <strong>Address:</strong> {props.address}
        </p>{" "}
      </div>
      <div className="rightSide">
        <div className="company"> {props.companyName} </div>
        <img className="logo" src="Logo000 1.png"></img>
        <img className="rightLogo" src="Shape.png"></img>
      </div>
    </div>
  ));
  return <div>{userList}</div>;
}
