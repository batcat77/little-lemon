import { Link } from "react-router-dom";
import Image1 from "../images/photo5.jpg";

function ReservationSuccess () {
  return (
    <main>
      <div className="reservation-success">
        <div className="card">
          <h1>Congratulation!</h1>
          <h1>Your table has reserved</h1>
          <p>Thank you for choosing Little Lemon</p>
          <Link to="/" className="actionBtn">Done</Link>
        </div>
        <img src={Image1} alt="Little Lemon"></img>
      </div>
    </main>
  )
}

export default ReservationSuccess;