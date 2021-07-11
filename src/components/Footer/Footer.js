import React from 'react'
import './Footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div className="footer">
<hr className="footer-divider"></hr>
      <div className="footer-info">
        <h4>INFO</h4>
        <p>Contact</p>
        <p>Blog</p>
        <p>Careers</p>
      </div>

      <div className="footer-info">
        <h4>SHOP</h4>
        <p>Coffee Box</p>
        <p>Coffee</p>
        <p>Coffee Kit</p>
      </div>

      <div className="footer-bio">
        <h4>FINCA SAN JOSE</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>

 <hr></hr>
      <div>
      <h4>CONNECT FOR TIPS & REGULAR COFFEE TRICKS</h4>
      <input></input>
 <hr></hr>
      <h4>GET SOCIAL</h4>
      <div>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
  <hr></hr>


      </div>
    </div>
  )
}

export default Footer
