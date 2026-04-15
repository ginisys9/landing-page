

function LandingPage() {
  return (
   <div>
    
      <div className="fixed-bottom bg-dark text-white d-flex justify-content-around p-3" style={{zIndex: 1050}}>
        <button className="btn btn-danger">Book Now</button>
        <a href="https://wa.me/911234567890" className="btn btn-success">WhatsApp</a>
        <a href="tel:+911234567890" className="btn btn-primary">Call</a>
      </div>

      <section className="vh-100 d-flex flex-column justify-content-center align-items-center text-center" style={{background: "linear-gradient(to right, #ffe4e6, #ffffff)"}}>
        <h1 className="display-4 fw-bold mb-3">Lip Blushing in Delhi</h1>
        <p className="mb-4">Achieve soft, natural pink lips with our premium Korean technique</p>
        <button className="btn btn-dark btn-lg">Book Appointment</button>
      </section>

      <section className="container py-5">
        <h2 className="mb-4 fw-bold">Before & After</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="bg-light d-flex align-items-center justify-content-center" style={{height: "200px"}}>Before</div>
          </div>
          <div className="col-md-6">
            <div className="bg-light d-flex align-items-center justify-content-center" style={{height: "200px"}}>After</div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{backgroundColor: "#fff1f2"}}>
        <div className="container">
          <h2 className="mb-4 fw-bold">Benefits</h2>
          <ul className="list-unstyled">
            <li>✔ Natural pink tint</li>
            <li>✔ Long-lasting results</li>
            <li>✔ Smudge-proof look</li>
            <li>✔ Enhances lip shape</li>
          </ul>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="mb-4 fw-bold">Procedure</h2>
        <ol>
          <li>Consultation</li>
          <li>Numbing</li>
          <li>Pigmentation</li>
          <li>Healing</li>
        </ol>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 fw-bold">Pricing</h2>
          <p className="fs-4">Starting from ₹4,999</p>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="mb-4 fw-bold">Testimonials</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="p-3 shadow-sm border rounded">"Amazing results!"</div>
          </div>
          <div className="col-md-6">
            <div className="p-3 shadow-sm border rounded">"Totally worth it."</div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{backgroundColor: "#fff1f2"}}>
        <div className="container">
          <h2 className="mb-4 fw-bold">Book Now</h2>
          <form className="row g-3" style={{maxWidth: "500px"}}>
            <div className="col-12">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="col-12">
              <input type="tel" placeholder="Phone" className="form-control" />
            </div>
            <div className="col-12">
              <button className="btn btn-dark w-100">Submit</button>
            </div>
          </form>
        </div>
      </section>

    </div>
  )
}

export default LandingPage