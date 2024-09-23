import img1 from "../assets/madal bal 1.jpg";
import { useState, useRef, useEffect } from "react";
import img2 from "../assets/mbal2.jpg";
import img3 from "../assets/mbal3.jpg";
import img4 from "../assets/mbal4.jpg";
import video1 from "../assets/vid.mp4";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const images = [img1, img2, img3, img4];
  const totalImages = images.length;

  const updateCarousel = () => {
    if (galleryRef.current) {
      const width = galleryRef.current.clientWidth;
      galleryRef.current.style.transform = `translateX(-${
        currentIndex * width
      }px)`;
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => updateCarousel();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="experience">
      <h2>My Experience</h2>

      {/* ComeTe Jewelry Internship */}
      <div className="experience-item">
        <h3>Freelancer at Apostrof d.o.o</h3>
        <p>
          As a freelancer for Apostrof d.o.o, I was tasked with creating and
          managing ad campaigns for Meta platforms, including Facebook and
          Instagram. I designed and implemented targeted ads aimed at driving
          engagement and brand awareness, optimizing performance through
          continuous testing and data analysis. My approach focused on
          delivering tailored ad creatives that resonated with the audience and
          maximized conversion rates. This freelance role allowed me to enhance
          my skills in paid social media advertising, focusing on achieving
          tangible results for clients through strategic digital marketing
          efforts.
        </p>

        <p>For more about my work, you can visit:</p>

        <a
          href="https://comete.hr/?gad_source=1&gclid=Cj0KCQjwgL-3BhDnARIsAL6KZ69nWEbfOEmmOeRsHf1f638SJQSd3aXuaxuhpBrwmpG0aIvqx2h4n0EaAmB4EALw_wcB"
          style={{
            fontSize: "1.5rem",
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            backgroundColor: "#0056b3",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
            margin: "2rem",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#004494")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0056b3")}
        >
          Come Te
        </a>
      </div>

      {/* Event Management Agency - Student Events, London */}
      <div className="experience-item">
        <h3>Event Management Agency - Student Events, London</h3>
        <p>
          I collaborated with a London-based event management agency focused on
          student events to help them significantly increase their audience
          reach and drive ticket sales. By conducting a thorough analysis of
          their current digital marketing efforts, I identified key
          opportunities to enhance engagement.
        </p>
        <p>
          My approach involved restructuring their social media strategy by
          creating highly targeted ad campaigns on platforms like Instagram and
          Facebook, aimed specifically at university students in the London
          area. I also optimized the content by introducing eye-catching visuals
          and event-specific promotional offers that resonated with the student
          demographic.
        </p>
        <p>
          Additionally, I implemented a retargeting strategy to engage users who
          had previously shown interest in their events but had not yet
          completed a purchase. This campaign boosted conversions by re-engaging
          potential attendees. Within two weeks, the results were remarkable: a
          400% increase in ticket sales, with improved social media engagement
          and brand visibility.
        </p>

        <a
          href="https://www.instagram.com/alivenlive/"
          style={{
            fontSize: "1.2rem",
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            backgroundColor: "#e4405f",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
            margin: "2rem",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c6354f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#e4405f")}
        >
          AliveNlive Instagram
        </a>
      </div>

      {/* Lorem d.o.o Project */}
      <div className="experience-item">
        <h3>Project with Lorem d.o.o</h3>
        <p>
          I reached out to Lorem d.o.o, a prominent Croatian company
          specializing in the import of pharmaceutical products, to present a
          unique opportunity for growth. Leveraging my expertise in digital
          marketing and my skills in creating efficient websites, I proposed a
          tailored strategy to enhance their online presence and profitability.
          By developing a custom-built website and implementing a targeted
          digital marketing campaign for one of their specific products, Madal
          Bal Neera sirup, we successfully generated €4,000 in revenue within
          just four weeks. Currently, I continue to support Lorem d.o.o as they
          remain my client, managing their Meta ads (Facebook and Instagram) and
          overseeing their social media accounts for their product. This
          collaboration not only demonstrates the potential for increased
          profits but also establishes a strong foundation for ongoing digital
          transformation, with many more plans in the pipeline.
        </p>

        <a
          href="https://madalbal-hrvatska.com/it"
          style={{
            marginTop: "2rem",

            fontSize: "1.5rem",
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            backgroundColor: "#0056b3",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
            marginBottom: "1.3rem",
            marginLeft: "1rem",
            // Space between links
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#004494")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0056b3")}
        >
          Madal Bal Web Shop
        </a>
        <br />
        <a
          href="https://www.instagram.com/madalbal.hr/"
          style={{
            fontSize: "1.5rem",
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            backgroundColor: "#e4405f",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
            marginBottom: "2rem",
            marginLeft: "1rem",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c6354f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#e4405f")}
        >
          Madal Bal Instagram
        </a>

        <section className="ad-creatives">
          <h2>Ad Creatives</h2>
          <div className="gallery-carousel">
            <div className="gallery" ref={galleryRef}>
              {images.map((img, index) => (
                <img key={index} src={img} alt={`Ad Creative ${index + 1}`} />
              ))}
            </div>
            <button className="prev-btn" onClick={prevImage}>
              &#8612;
            </button>
            <button className="next-btn" onClick={nextImage}>
              &#8614;
            </button>
          </div>

          <div className="video-section">
            <h3>Video (In croato)</h3>
            <div className="video-container">
              <video controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="video-caption">
              Questo video è in lingua croata e si rivolge al pubblico croato.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;
