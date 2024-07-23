"client side"
import {motion} from 'framer-motion'
import { FaStar } from "react-icons/fa";

const TestimonialSlider = () => {
    const animate = {
        y: [-5, 5],
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
        },
      };
  const testimonials = [
    {
      text: '"This is a great product!" - John Doe',
    },
    {
      text: '"I love this service!" - Jane Doe',
    },
    {
      text: '"This company is amazing!" - Bob Smith',
    },
    // Add more testimonials here
  ];

  return (
    <section className='p-4 flex items-center justify-center mx-auto'>
        <div
        className="flex flex-wrap overflow-x-auto snap-x "
        animate={animate}
        >
      { testimonials.map((testimonial, index) => (
        <div key={index} className="w-64 h-64 mx-4 flex items-center shadow-md justify-center p-5 rounded-lg flex-shrink-0 bg-white text-black ">
          <FaStar />
            <p className="text-lg font-bold mt-4">{testimonial.text}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default TestimonialSlider;