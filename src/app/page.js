"use client";
import "./style.css";
import users from "./product.json";
import Card from "./card.js";

export default function Home() {
  return (
    <div className="card-container">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}
