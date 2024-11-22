import './footer.css'
import logo from "../../../../assets/Logo (3).png";
import { Outlet } from 'react-router-dom';
function Footer() {
  return<>
  <div className="footer">
    <dev className="footer_top">
      <div className="footer_top_left">
        <h1>Think beyond the wave</h1>
        <p>Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help</p>
      </div>
      <div>
        <button>Try for free</button>
      </div>
    </dev>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div>
        <img src={logo} alt="" />
        <p>We built an elegant solution. Our team <br /> created a fully integrated sales and <br /> marketing solution for SMBs</p>
      </div>
      <div>
      <h3>Company</h3>
      <p>About</p>
      <p>Pricing</p>
      <p>Jobs</p>
      <p>Blog</p>
      </div>
      <div>
      <h3>Product</h3>
      <p>Sales Software</p>
      <p>Marketplace</p>
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
      </div>
      <div>
      <h3>Discover</h3>
      <p>Sales Software</p>
      <p>Marketplace</p>
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
      </div>
      <div>
      <h3>Help Center</h3>
      <p>Sales Software</p>
      <p>Marketplace</p>
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
      </div>
    </div>
  </div>
  </>
}
export default Footer