import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
      <div>
        <div className="landing-content">
          <h1>Shwitter</h1>
          <div>
            <h2>FOLLOW</h2>
            <p>people around the globe</p>
          </div>
          <div>
            <h2>CONNECT</h2>
            <p>with your friends</p>
          </div>
          <div>
            <h2>SHARE</h2>
            <p>what you're thinking</p>
          </div>

          <button>Join Now</button>
          <Link>Already have an account</Link>
        </div>
        <div className="landing-img"></div>
      </div>
    )
}