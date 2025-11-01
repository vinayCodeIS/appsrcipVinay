import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your e-mail..." required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="footer-links-wrapper">

          {/* About Section */}
          <div className="footer-section">
            <h4>mettä muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQS</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="footer-section">
            <h4>CONTACT US</h4>
            <ul>
              <li>+44 221 133 5360</li>
              <li>customercare@mettamuse.com</li>
            </ul>

            <h4>CURRENCY</h4>
            <p>USD — Transactions will be completed in Euros and a currency reference is available on hover.</p>

            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
              <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
              <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" />
              <img src="https://img.icons8.com/ios-filled/50/ffffff/pinterest.png" alt="Pinterest" />
            </div>

            <h4>ACCEPTS</h4>
            <div className="payment-icons">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/google-pay.png" alt="Google Pay" />
              <img src="https://img.icons8.com/ios-filled/50/ffffff/amex.png" alt="AMEX" />
              <img src="https://img.icons8.com/ios-filled/50/ffffff/paypal.png" alt="PayPal" />
              <img src="https://img.icons8.com/ios-filled/50/ffffff/visa.png" alt="Visa" />
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>Copyright © 2023 mettä muse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
