import Slider from "react-slick";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Craig is doing all the electrical work for Pizza Hut and we're well satisfied. He's an easy guy to work with without any hassle. I personally recommend hiring Craig for any electrical help.",
      author: "Dave Singh",
    },
    {
      quote:
        "Craig is doing all the electrical work for Pizza Hut and we're well satisfied. He's an easy guy to work with without any hassle. I personally recommend hiring Craig for any electrical help.",
      author: "Anonymous",
    },
    {
      quote:
        "Very happy with the service from Craig. I needed an outdoor power supply fitted. I called Craig and he was here the next day. Supplied me with different options and educated me on the interior wiring of my house. Fitted an RCD to the main switchboard and completed a full check on the new power supply. All of this for a very good price. I will be using Craig again for future projects and highly recommend them.",
      author: "Steve Rickerby",
    },
    {
      quote:
        "We used Craig to do the complete fit-out of our Kebab shop and Craig was fast, friendly, efficient and very professional. I highly recommend it to all.",
      author: "Hasan Kali",
    },
    {
      quote:
        "We used Craig for the renovation of our branch. The project was completed on time and within budget in a professional, fast, efficient manner and the finish of the job was excellent. We highly recommend Craig",
      author: "Alistair McFadzien",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 1024, // for screens larger than 1024px
        settings: {
          slidesToShow: 2, // show 2 slides
        },
      },
      {
        breakpoint: 600, // for screens larger than 600px
        settings: {
          slidesToShow: 1, // show 1 slide
        },
      },
    ],
  };

  return (
    <>
      <style>
        {`
          .slick-slide {
            padding: 15px;
          }
          .testimonial-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            padding: 20px;
          }
          .testimonial-quote {
            font-size: 1rem;
            text-align: center;
            margin-bottom: 20px;
          }
          .testimonial-author {
            font-size: 1.25rem;
            font-weight: bold;
            text-align: center;
          }
          .testimonial-icon {
            font-size: 3rem;
            color: #4A90E2;
            margin-bottom: 20px;
          }
        `}
      </style>
      <div className="bg-oe-blue py-12 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-20">
            Testimonials
          </h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="testimonial-card bg-white rounded-lg shadow-md">
                  <FaQuoteLeft className="testimonial-icon mr-auto w-8" />
                  <p className="testimonial-quote text-gray-600">
                    {testimonial.quote}
                  </p>
                  <FaUserCircle className="testimonial-icon" />
                  <p className="testimonial-author text-gray-900">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};