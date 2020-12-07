function Feature1Section() {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row align-items-center" style={{ height: "70vh" }}>
          <div className="col">
            <div className="row">
              <img
                className="col-md-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Newspaper_Cover2.svg/1200px-Newspaper_Cover2.svg.png"
                alt="Fake news"
              ></img>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-md-8 d-flex flex-column align-items-start">
                <h1 className="text-left mb-4">Save your text news!</h1>
                <p className="text-left mb-5">
                  Explanation of why you are going to love it and the benefit!
                </p>
                <button
                  class="btn btn-outline-secondary btn-lg"
                  href="classificator"
                  type="button"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Feature1Section };
