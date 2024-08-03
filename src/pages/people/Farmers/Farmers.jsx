// src/components/FarmersReview.jsx
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const farmersData = [
  {
    id: 1,
    name: "John Doe",
    address: "1234 Farmer St, Village, State",
    photo: "https://via.placeholder.com/150",
    review: "John's produce is always fresh and organic. Highly recommend!",
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "5678 Green Ave, Village, State",
    photo: "https://via.placeholder.com/150",
    review: "Jane has the best dairy products in the area. Very satisfied.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    address: "91011 Harvest Rd, Village, State",
    photo: "https://via.placeholder.com/150",
    review: "Emily's farm offers a great variety of vegetables and fruits.",
  },
  {
    id: 4,
    name: "Michael Brown",
    address: "1213 Orchard St, Village, State",
    photo: "https://via.placeholder.com/150",
    review: "Michael's honey is delicious and pure.",
  },
  {
    id: 5,
    name: "Sarah Davis",
    address: "1415 Meadow Ln, Village, State",
    photo: "https://via.placeholder.com/150",
    review: "Sarah's herbs are fresh and aromatic.",
  },
  {
    id: 6,
    name: "David Wilson",
    address: "1617 Field Rd, Village, State",
    photo: "https://via.placeholder.com/150",
    review: "David's organic vegetables are top-notch.",
  },
  {
    id: 7,
    name: "Laura Martinez",
    address: "1819 Farmhouse Dr, Village, State",
    photo: "https://via.placeholder.com/150",
    review: "Laura's free-range eggs are the best.",
  },
  {
    id: 8,
    name: "James Anderson",
    address: "2021 Cropland Rd, Village, State",
    photo: "https://via.placeholder.com/150",
    review: "James's dairy products are always fresh.",
  },
  {
    id: 9,
    name: "Emma Thompson",
    address: "2223 Plantation St, Village, State",
    photo: "https://via.placeholder.com/150",
    review: "Emma's jams and preserves are delightful.",
  },
  {
    id: 10,
    name: "Robert Lee",
    address: "2425 Homestead Ave, Village, State",
    photo: "https://via.placeholder.com/150",
    review: "Robert's organic fruits are the best.",
  },
];

const Farmers = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-green-500">Farmers</span>{" "}
        <span className="text-yellow-500">Review</span>
      </h1>
      {farmersData.map((farmer, index) => (
        <ReviewCard key={farmer.id} farmer={farmer} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
};

const ReviewCard = ({ farmer, reverse }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100px)",
  });

  return (
    <animated.div
      ref={ref}
      style={props}
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } mb-8`}
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={farmer.photo}
          alt={farmer.name}
          className="w-32 h-32 rounded-full"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start p-4">
        <h2 className="text-xl font-bold text-green-500">{farmer.name}</h2>
        <p className="mb-4 text-yellow-600">{farmer.address}</p>
        <p className="italic text-gray-500">{farmer.review}</p>
      </div>
    </animated.div>
  );
};

export default Farmers;
