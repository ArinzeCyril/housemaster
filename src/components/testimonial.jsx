const Testimonial = ({ Tsmny1, Tsmny2, Tsmny3 }) => {
  return (
    <div className="testimony">
      <div className="tsmny-qute-up">"</div>
      <div className="tsmny">
        <h1>Testimonials</h1>
        <div className="cards">
          <div className="card">
            <div className="card-p">
              <h4>A Good Environment</h4>
              <p>They are absolutly the best. I have never regretted working with them. They help with productivity and offer valuable sugggestions </p>
            </div>
            <div className="card-user">
              <img src={Tsmny1} alt="" />
              <div className="card-user-dtil">
                <p>Elizabeth Charles</p>
                <div className="rating">
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-p">
              <h4>Met all my expectations</h4>
              <p>You might wanna give them a try. I have worked with them for over 2 Years and everytime, I'm happy I made the decision to work with them </p>
            </div>
            <div className="card-user">
              <img src={Tsmny2} alt="" />
              <div className="card-user-dtil">
                <p>David Karley</p>
                <div className="rating">
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-p">
              <h4>Best realtor I've worked with</h4>
              <p>I would highly recomend Housemaster they really listen to customer requests and goes extra miles with customer service.</p>
            </div>
            <div className="card-user">
              <img src={Tsmny3} alt="" />
              <div className="card-user-dtil">
                <p>John Marsden</p>
                <div className="rating">
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                  <span className="fa-solid fa-star checked"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tsmny-qute-dn">"</div>
    </div>
  )
}

export default Testimonial
