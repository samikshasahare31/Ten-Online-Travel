import React from "react";
import "./About.css";
const AboutUs = () => {
  const images = [
    "https://tse4.mm.bing.net/th?id=OIP.GRnVzP2Ef2fc43EHT31AawHaDf&pid",
    "https://cdn.newsapi.com.au/image/v1/2ce97da73c2360879125bcbcd297c36d",
    "https://b4holiday.com/wp-content/uploads/2022/02/IMG-20190614-WA0017.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.nXAA4tV1x3IL55OSZe7d_wHaE8&pid=Api&P=0&h=180",
    "https://www.tripfore.com/wp-content/uploads/2020/02/best-vacation-spots-in-the-world.jpeg",
    "https://wisdomswebzine.com/wp-content/uploads/2013/07/1381482_14408778.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.ylHV8SPDpVc7FntTo0ZBsQHaEK&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.oEV457iq2o2Xif-8uaxrAQHaFj&pid=Api&P=0&h=180",
  ];
  return (
    <section>
      <div className='About-description'>
        <img
          src='https://b4holiday.com/wp-content/uploads/2022/02/Why-Book-with-before-holiday.jpeg'
          alt='Why Book with Before Holiday'
        />
        <p>
          TEN Travel is a Delhi-NCR-based online travel agency, proudly serving
          travelers since 2016. We specialize in delivering a diverse range of
          world-class travel services at competitive prices. With years of
          experience, innovative tour packages, and a long list of happy
          clients, we’ve earned our place as one of India’s leading tour
          companies. Our approach is guided by the principle of “leaving no
          stone unturned,” which has cemented our reputation in the travel
          industry.
        </p>
        <p>
          Whether you have a clear idea of your dream vacation, want to
          customize a multi-destination itinerary, or are interested in
          theme-based travel, we make planning effortless. Our romantic couple
          packages are thoughtfully crafted to make every journey feel like a
          second honeymoon, complete with exclusive perks and surprises. For our
          corporate partners, we guarantee seamless planning and execution for
          all events and retreats.
        </p>
        <p>
          At TEN Travel, we’re more than just a travel agency. We’re creators of
          lifelong memories—whether it’s a getaway with friends, a family
          adventure, or a corporate outing. Since 2016, thousands of satisfied
          travelers have embarked on unforgettable experiences with us, and
          we’re dedicated to continuing this tradition for all future trips.
        </p>
        <div className='image-grid'>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Travel ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
