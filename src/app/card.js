function Card({ user }) {
  return (
    <div className="card">
      <div className="leftSide">
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <p>
          <strong>Number:</strong> {user.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </div>
      <div className="rightSide">
        <div className="company"> {user.companyName} </div>
        <img className="logo" src="Logo000 1.png" alt="Company Logo" />
        <img className="rightLogo" src="Shape.png" alt="Shape Logo" />
      </div>
    </div>
  );
}

export default Card;
