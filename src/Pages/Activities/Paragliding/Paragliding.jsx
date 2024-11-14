import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./Paragliding.css";

const Paragliding = () => {
  const packages = [
    {
      id: 1,
      images: [
        "https://b4holiday.com/wp-content/uploads/2017/11/Hadimba-Devi-Mandir-Manali-1024x683.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbQbA6pFKZID9NyuOezrCefNYZyP9nQlcxw&s",
        "https://images1.livehindustan.com/uploadimage/library/2019/12/17/16_9/16_9_2/after_snowfall_temperature_decreases_in_upper_shimla_areas_and_water_started_frozen_1576586584.jpg",
      ],
      title: "Frozen Shimla-Manali",
      location: "Himachal, India",
      duration: "6 Days - 5 Nights",
      people: "2 People",
      discount: "13% Off",
      price: "₹17,000",
      originalPrice: "₹19,500",
      nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
      featured: true,
    },
    {
      id: 2,
      images: [
        "https://cleansofindiatravel.com/wp-content/uploads/2017/09/camel-1024x682.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_2fJ1CoTPMVyZDOwTY98UPuT0zKFJoglmQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMXsPMsUu0QQ0i-mooBwMl4V7F8gLwBI96g&s",
      ],
      title: "Royal Rajasthan Tour",
      location: "Rajasthan, India",
      duration: "6 Days - 5 Nights",
      people: "2-10 People",
      discount: "12% Off",
      price: "₹19,000",
      originalPrice: "₹21,500",
      nextDepartures: ["Nov 22", "Nov 23", "Nov 24"],
      featured: true,
    },

    {
      id: 3,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQRF_C1Q3p-CirIrccQtgmnS_bUpRLZY59g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGmGQgKbyNlVJ0ecuJ0DInmIVfAFsViqKcQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pO0rlhIpYA-NMtoYSR8ezHb5HLWmT1Rfng&s",
      ],
      title: "Kullu Manali",
      location: "Himachal, India",
      duration: "4 Days - 3 Nights",
      people: "2-10 People",
      discount: "20% Off",
      price: "₹11,250",
      originalPrice: "₹14,000",
      nextDepartures: ["Nov 14", "Nov 15", "Nov 16"],
      featured: true,
    },
    {
      id: 4,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNf-8AO7xWkA1qKMdMNnB4GorVhc57apmFwQ&s",
        "https://www.himalayanecotourism.com/wp-content/uploads/2023/06/spiti-link-1.jpg",
        "https://www.citybit.in/wp-content/uploads/2024/10/Spiti-Valley-Photos-1024x576.jpg",
      ],
      title: "Spiti Valley Adventure",
      location: "Spiti, India",
      duration: "7 Days - 6 Nights",
      people: "4-8 People",
      discount: "10% Off",
      price: "₹22,000",
      originalPrice: "₹24,500",
      nextDepartures: ["Nov 17", "Nov 18"],
      featured: true,
    },
    {
      id: 5,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjF7z3ZQDBAgx_EimMTo3Viz2wZyVdeIzgA&s",
        "https://royalskyholidays.com/wp-content/uploads/2021/12/Leh-Ladakh-Packages.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9x-MU2XMe7KHrelpXLU-j5G0pr4Eb7X8Ydg&s",
      ],
      title: "Leh Ladakh Expedition",
      location: "Ladakh, India",
      duration: "8 Days - 7 Nights",
      people: "2-6 People",
      discount: "25% Off",
      price: "₹29,500",
      originalPrice: "₹39,000",
      nextDepartures: ["Nov 20", "Nov 21", "Nov 22"],
      featured: true,
    },
    {
      id: 6,
      images: [
        "https://www.bogmallobeachresort.com/wp-content/uploads/2024/07/F8A4669.webp",
        "https://www.estrelahotels.com/blog/wp-content/uploads/2023/06/beach-resort-goa-1024x577.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGOH_n76qzNycmNK8FdyzBpGTOHXq3mQ_VA&s",
      ],
      title: "Goa Beach Retreat",
      location: "Goa, India",
      duration: "5 Days - 4 Nights",
      people: "2 People",
      discount: "15% Off",
      price: "₹18,500",
      originalPrice: "₹21,000",
      nextDepartures: ["Nov 19", "Nov 20"],
      featured: true,
    },
    {
      id: 7,
      images: [
        "https://ihplb.b-cdn.net/wp-content/uploads/2014/06/Best-Things-to-do-in-Shimla.jpg",
        "https://media1.thrillophilia.com/filestore/l5stwgse3qt889ohvpojpa13ftp0_Mall_Road_Shimla_1.jpg?w=400&dpr=2",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/445773682.jpg?k=0f35bfef4772be87015561f512a3ca0e3f2aa2d665e7bf70475d01c1edc67548&o=&hp=1",
      ],
      title: "Shimla",
      location: "Himachal, India",
      duration: "4 Days - 3 Nights",
      people: "2 People",
      discount: "35% Off",
      price: "₹16,700",
      originalPrice: "₹25,500",
      nextDepartures: ["Nov 14", "Nov 15"],
      featured: true,
    },
    {
      id: 8,
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Houseboats_at_Kerala_Backwaters.jpg/640px-Houseboats_at_Kerala_Backwaters.jpg",
        "https://www.tripsavvy.com/thmb/UoylMLyzOBPdDp34ForEiJd9m3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-522478216-5ab12c4e3de4230036949cee.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoWmAl5YG_tgPKfjQ-1_NqLmKVnF42vLOgA&s",
      ],
      title: "Kerala Backwaters",
      location: "Kerala, India",
      duration: "5 Days - 4 Nights",
      people: "2-4 People",
      discount: "20% Off",
      price: "₹15,500",
      originalPrice: "₹19,000",
      nextDepartures: ["Nov 25", "Nov 26"],
      featured: true,
    },
    {
      id: 9,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14p2iPF-bbbYPn0IL9FRp81TY43vaGjDF0g&s",
        "https://andamanemeraldholidays.com/wp-content/uploads/2022/04/Port-Blair-to-Ross-Island-and-Excursion-to-Coral-IslandNorth-Bay.jpg",
        "https://cdn.prod.website-files.com/5b56319971ac8c56a6a9d887/5c4bb53cc49ea6b924af7244_Ross%20Island.JPG",
      ],
      title: "Andaman Islands Escape",
      location: "Andaman, India",
      duration: "7 Days - 6 Nights",
      people: "2-6 People",
      discount: "18% Off",
      price: "₹25,000",
      originalPrice: "₹30,500",
      nextDepartures: ["Nov 28", "Nov 29"],
      featured: true,
    },
    {
      id: 10,
      images: [
        "https://live.staticflickr.com/4028/4719743807_ff75c131a2.jpg",
        "https://qph.cf2.quoracdn.net/main-qimg-58a9eef5c2587e098d215ca73ebe061a-lq",
        "https://www.uttarakhandtraveltourism.com/wp-content/uploads/2022/03/Bhimtal.png",
      ],
      title: "Nainital Lake Paradise",
      location: "Nainital, India",
      duration: "3 Days - 2 Nights",
      people: "2-5 People",
      discount: "10% Off",
      price: "₹12,500",
      originalPrice: "₹14,000",
      nextDepartures: ["Nov 30", "Dec 1"],
      featured: true,
    },
  ];

  return (
    <div className="paragliding-container">
      <h1>Paragliding</h1>
      <div className="paragliding-cards">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

const PackageCard = ({ pkg }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showMap, setShowMap] = useState(false);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? pkg.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === pkg.images.length - 1 ? 0 : prev + 1));
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="paragliding-card">
      {pkg.featured && <span className="badge">Featured</span>}
      <div className="image-slider">
        {showMap ? (
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              pkg.location
            )}&output=embed`}
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        ) : (
          <img
            src={pkg.images[currentImage]}
            alt={pkg.title}
            className="card-image"
          />
        )}
        <button
          className="arrow left"
          onClick={handlePrevImage}
          disabled={showMap}
        >
          ❮
        </button>
        <button
          className="arrow right"
          onClick={handleNextImage}
          disabled={showMap}
        >
          ❯
        </button>
        <div className="map-icon-container">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="map-toggle-icon"
            onClick={toggleMap}
          />
        </div>
      </div>
      <h2 className="title">{pkg.title}</h2>
      <div className="card-details">
        <p>
          <span>📍</span>
          {pkg.location}
        </p>
        <p>
          <span>🕒</span>
          {pkg.duration}
        </p>
        <p>
          <span>👥</span>
          {pkg.people}
        </p>
        <div className="price-section">
          <span className="discount">{pkg.discount}</span>
          <span className="price">{pkg.price}</span>
          <span className="original-price">{pkg.originalPrice}</span>
        </div>
        <p>Next Departure</p>
        <ul className="departures">
          {pkg.nextDepartures.map((date, index) => (
            <li key={index}>✔ {date}</li>
          ))}
        </ul>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default Paragliding;