import React from "react";

import { accountService } from "../_services";
import { PricingSection } from "./pricing";
import { Feature1Section } from "./feature1";

function Home() {
  const user = accountService.userValue;

  return (
    <div>
      <section>
        <div className="container">
          <div className="row align-items-center vh-100">
            <div className="col">
              <div className="row">
                <div className="col-md-8 d-flex flex-column align-items-start">
                  <h1 className="text-left mb-4 display-4">
                    It's better than sliced bread!
                  </h1>
                  <p className="text-left mb-5">
                    Tell the world how awesome your app is and why they should
                    use it!!
                  </p>
                  <button
                    class="btn btn-outline-secondary btn-lg"
                    href="classificator"
                    type="button"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img
                  className="col-md-12 rounded"
                  src="https://cosmosmagazine.com/wp-content/uploads/2019/12/190108-fake-thumb.jpg"
                  alt="Fake news"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feature1Section></Feature1Section>
      <PricingSection></PricingSection>
    </div>
  );
}

export { Home };
