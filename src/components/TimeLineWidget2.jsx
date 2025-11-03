import React, { useEffect } from "react";
import styles from "@/components/TimeLineWidget2.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const TimeLineWidget2 = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(
      `.${styles.TimeLineWidget2highlight}`
    );

    const handleScroll = () => {
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;

        if (top < window.innerHeight - 100 && bottom > 0) {
          section.classList.add(styles._into_view);
        } else {
          section.classList.remove(styles._into_view);
        }
      });
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    const images = document.querySelectorAll(`.${styles.lazyloadd}`);

    images.forEach((img) => {
      // Parallax effect - move the image slightly on scroll
      gsap.to(img, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement, // The wrapper div of the image
          start: "top bottom", // Start when image enters viewport
          end: "bottom top", // End when it leaves
          scrub: true, // Smooth scrubbing
        },
      });

      // Optional: zoom-in effect on entry
      gsap.fromTo(
        img,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="" className={styles.TimeLineWidget2}>
      <div className={styles.TimeLineWidget2container}>
        <div className={styles.part_12}>
          <div className={styles.TimeLineWidget2highlights}>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>1992</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Restaurant Recommendations</h6>
              <h4 className={styles.highlightsmallpara}>
            “The Django at the Roxy Hotel in Tribeca was magical. We went on a Tuesday with no expectations. Turned out, six jazz Hall-of-Famers were performing that night. I walked out buzzing.”
              </h4>
              <div className={styles.highlight__text}>
                <p className={styles.hightlight__textpara}>
                  <span>
                   Lush, sun-drenched, and impossibly serene. For couples looking to celebrate their just-married bliss, this Indian Ocean Island offers a kind of natural romance that’s quietly powerful. What sets Mauritius apart is its deeply immersive sense of nature.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._large}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Feditor-images%2F2025-08-06T07%253A04%253A50.180Z-Inline5.jpg&w=3840&q=75"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2005</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Room for Serendipity</h6>
              <h4 className={styles.highlightsmallpara}>
               On this trip, new culinary discoveries included Mignon, “It tastes like home. Like Delhi, actually. And after a week of sushi and jazz, sometimes that’s exactly what I need.”
              </h4>
              <div className={styles.highlight__text}>
                <p>
                  <span>
                   I couldn’t have asked for a more perfect base. Our days alternated between total relaxation, like overwater spa treatments with fresh aloe from the garden, and excursions such as snorkelling in jewel-toned waters and sailing lessons. 
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._halfes}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Feditor-images%2F2025-08-06T07%253A04%253A50.180Z-Inline5.jpg&w=3840&q=75"
                    />
                  </div>
                </div>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Feditor-images%2F2025-08-06T07%253A04%253A50.170Z-Inline1.jpg&w=3840&q=75"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2007</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Where Food Leads, She Follows</h6>
              <h4 className={styles.highlightsmallpara}>
              At the heart of her New York City experience is her brother, who lives in Chelsea.“I always get the stir-fried chicken with bok choy. You’d miss the place if you walked past it. But it’s our thing.”
              </h4>
              <div className={styles.highlight__text}>
                <p className={styles.hightlight__textpara}>
                  <span>
                   Modern Indian fine dining by Michelin-starred chef Vineet Bhatia.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._large}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Feditor-images%2F2025-08-06T07%253A04%253A50.181Z-Lead.jpg&w=1920&q=75"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2008</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>The Ritual</h6>
              <h4 className={styles.highlightsmallpara}>
               Her emotional connection to the city runs deep. It is a blend of nostalgia, family, and personal renewal. “The cultural contrasts — from Brooklyn to Manhattan to Harlem — feel like different planets.
              </h4>
              <div className={styles.highlight__text}>
                <p>
                  <span>
                    Samen met Femke Heemskerk, Marleen Veldhuis en Inge Dekker
                    veroverde ze olympisch goud op de 4 x 100 meter vrije slag.
                    Haar eerste gouden plak smaakte naar meer. Deze prestatie
                    markeerde het begin van haar opmars naar individueel succes
                    en vormde de basis voor haar ambities richting Londen 2012.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._overlay}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Feditor-images%2F2025-08-06T07%253A04%253A50.174Z-Inline2.jpg&w=3840&q=75"
                    />
                  </div>
                </div>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.kayak.com/rimg/himg/36/a6/89/expedia_group-136669-41290569-268591.jpg?width=836&height=607&crop=true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLineWidget2;
