import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center relative mt-6 lg:mt-20" id="hero-section">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          filter: "brightness(0.5)", // adjust brightness (0-1)
          opacity: 0.5, // adjust opacity (0-1)
          
        }}
      >
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide z-10">
        Bringing Ideas to Life
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          with PrakashAI
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-100 max-w-4xl z-10">
        Empower and bring your business online with our
        intuitive service. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10 z-10">
        <a
          href="#contact-us-footer"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Book Immediately
        </a>
        <a href="#contact-us-footer" className="py-3 px-4 mx-3 rounded-md border">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default HeroSection;