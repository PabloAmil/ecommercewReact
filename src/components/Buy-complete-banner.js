import './buy-complete-banner.css';
import { Link } from "react-router-dom";

function BuyCompleteBanner(props) {

    const { hideBanner } = props;

    return (
    <>
      <div className="banner-container">
        <div className="banner">
          <h3>Thank you!</h3>
          <p>Your order will arrive soon.</p>
          <Link to='/'><button onClick={hideBanner}>Close</button></Link>
        </div>
      </div>
    </>
    )
}

export default BuyCompleteBanner;