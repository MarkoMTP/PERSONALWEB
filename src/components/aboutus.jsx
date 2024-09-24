const About = () => {
  return (
    <>
      <section className="about">
        <p style={{ margin: "3rem", maxWidth: "80%", marginTop: "1rem" }}>
          <h2 style={{ margin: "auto, 0" }}>About Me</h2>
          Hi, I'm Marko Matković, a digital marketing expert currently in my
          final year at CIELS University, specializing in Business
          Internationalization and Languages in Padova, Italy. My journey in
          digital marketing has been shaped by hands-on experience in developing
          targeted strategies that drive results. I possess a unique blend of
          skills in software development, enabling me to create effective online
          solutions that enhance user engagement and optimize marketing
          performance. Through my projects, I've demonstrated my ability to
          combine technical expertise with creative marketing strategies,
          ensuring impactful results for my clients.
        </p>

        <section className="education">
          <h2>Languages:</h2>
          <div className="education-item">
            <p>Croatian(Native)</p>
            <p>English(C2)</p>
            <p>Italian(C2)</p>
            <p>Russo(B2)</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
