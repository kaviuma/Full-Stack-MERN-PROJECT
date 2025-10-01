import React, { useState, useEffect } from "react";

export const Slider = () => {
  const slidesData = [
    { img: "https://github.com/kaviuma/Server/blob/main/shop1.jpg?raw=true" },
    { img: "https://github.com/kaviuma/Server/blob/main/online%20shopping.jpg?raw=true" },
    { img: "https://github.com/kaviuma/Backend/blob/main/Ai%20delivery.jpg?raw=true" },
    { img: "https://github.com/kaviuma/Backend/blob/main/Image%20C.jpg?raw=true" },
    { img: "https://github.com/kaviuma/Server/blob/main/Carousel%202.jpg?raw=true" },
    { img: "https://github.com/kaviuma/Server/blob/main/Carousel%203.jpg?raw=true" },
    { img: "https://github.com/kaviuma/Server/blob/main/shop1.jpg?raw=true" },
    { img: "https://github.com/kaviuma/Server/blob/main/shop1.jpg?raw=true" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);


  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setSlidesToShow(4);
      else if (w >= 768) setSlidesToShow(3);
      else if (w >= 480) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (startIndex + slidesToShow < slidesData.length) {
      setStartIndex(startIndex + slidesToShow);
    }
  };

  const prev = () => {
    if (startIndex - slidesToShow >= 0) {
      setStartIndex(startIndex - slidesToShow);
    }
  };

  return (
    <div style={{ position: "relative", margin: "20px" }}>
     
      <div style={{ display: "flex", alignItems: "center" }}>
      
        {startIndex > 0 && (
          <button
            onClick={prev}
            style={{
              zIndex: 1,
              border: "none",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
          >
            &#8592;
          </button>
        )}

        {/* Slides */}
        <div
          style={{
            overflow: "hidden",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(-${(startIndex * 100) / slidesToShow}%)`,
            }}
          >
            {slidesData.map((item, index) => (
              <div
                key={index}
                style={{
                  flex: `0 0 ${100 / slidesToShow}%`,
                  boxSizing: "border-box",
                  padding: "5px",
                }}
              >
                <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                  <img
                    src={item.img}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        {startIndex + slidesToShow < slidesData.length && (
          <button
            onClick={next}
            style={{
              zIndex: 1,
              border: "none",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
          >
            &#8594;
          </button>
        )}
      </div>
    </div>
  );
};
