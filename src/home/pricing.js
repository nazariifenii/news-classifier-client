import React from "react";

function PricingSection() {
  return (
    <section class="pricing-table">
      <div class="container">
        <div class="block-heading">
          <h2>Our Pricing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
            urna, dignissim nec auctor in, mattis vitae leo.
          </p>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-md-5 col-lg-4">
            <div class="item">
              <div class="heading">
                <h3>BASIC</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="features">
                <h4>
                  <span class="feature">Full Support</span> :{" "}
                  <span class="value">No</span>
                </h4>
                <h4>
                  <span class="feature">Duration</span> :{" "}
                  <span class="value">30 Days</span>
                </h4>
                <h4>
                  <span class="feature">Storage</span> :{" "}
                  <span class="value">10GB</span>
                </h4>
              </div>
              <div class="price">
                <h4>$25</h4>
              </div>
              <button class="btn btn-block btn-outline-primary" type="submit">
                BUY NOW
              </button>
            </div>
          </div>
          <div class="col-md-5 col-lg-4">
            <div class="item">
              <div class="ribbon">Best Value</div>
              <div class="heading">
                <h3>PRO</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="features">
                <h4>
                  <span class="feature">Full Support</span> :{" "}
                  <span class="value">Yes</span>
                </h4>
                <h4>
                  <span class="feature">Duration</span> :{" "}
                  <span class="value">60 Days</span>
                </h4>
                <h4>
                  <span class="feature">Storage</span> :{" "}
                  <span class="value">50GB</span>
                </h4>
              </div>
              <div class="price">
                <h4>$50</h4>
              </div>
              <button class="btn btn-block btn-primary" type="submit">
                BUY NOW
              </button>
            </div>
          </div>
          <div class="col-md-5 col-lg-4">
            <div class="item">
              <div class="heading">
                <h3>PREMIUM</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="features">
                <h4>
                  <span class="feature">Full Support</span> :{" "}
                  <span class="value">Yes</span>
                </h4>
                <h4>
                  <span class="feature">Duration</span> :{" "}
                  <span class="value">120 Days</span>
                </h4>
                <h4>
                  <span class="feature">Storage</span> :{" "}
                  <span class="value">150GB</span>
                </h4>
              </div>
              <div class="price">
                <h4>$150</h4>
              </div>
              <button class="btn btn-block btn-outline-primary" type="submit">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { PricingSection };
