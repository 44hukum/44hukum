import image from '../assets/img/team/1675786229596.jpeg'
function Profile(){
    return (
        <section className="py-5 mt-5">
  <div className="container py-5">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
      <div className="col-auto mb-4" style={{ width: "100%" }}>
        <div
          className="d-flex flex-column align-items-center align-items-sm-start"
          style={{ width: "100%" }}
        >
          <div className="d-flex">
            <img
              className="rounded-circle flex-shrink-0 me-3 fit-cover"
              width={50}
              height={50}
              src={image}
              alt="abc"
            />
            <div>
              <p
                className="fw-bold text-success mb-0"
                style={{ color: "var(--bs-pink)" }}
              >
                Hukum Gosain
              </p>
              <p className="text-muted mb-0">The Constant Dreamer</p>
            </div>
          </div>
          <p
            className="bg-dark border rounded border-dark p-4"
            style={{
              marginTop: 24,
              fontFamily: "Inter, sans-serif",
              width: "100%"
            }}
          >
            Experienced Python Developer with expertise in developing highly
            scalable and robust web applications using Flask, Django, and other
            Python frameworks. Proven track record of developing and
            implementing complex solutions for a variety of industries including
            Blockchain, Facility Management, and Food Delivery. Proficient in
            microservices architecture, Docker, PostgreSQL, AWS, and Rust.
            Passionate about AI/ML and has experience in developing pet projects
            using TensorFlow, Keras, and Scikit-learn
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}

export default Profile;