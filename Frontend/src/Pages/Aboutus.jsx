import { useEffect } from "react";
import Laptop from './shopbycategry/Laptop';


const About = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto">
          <div className="py-16">
            <h1 className="text-4xl font-bold text-center mb-8 text-sky-700 ">Welcome to our Electronic Shop</h1>
            <p className="text-xl text-center mx-auto max-w-xl  lato-regular-italic " data-aos="fade-right">We are dedicated to providing the latest and most innovative electronic devices and accessories to our customers. Explore our wide selection of products and enjoy a seamless shopping experience.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-16">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 " data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4">Explore our Mobile Phones</h2>
              <p className="text-lg">Discover a wide range of smartphones from leading brands, featuring cutting-edge technology and stunning designs. Whether you're looking for the latest flagship model or a budget-friendly option, we have something for everyone.</p>
              <p className="text-lg mt-4">Stay connected and productive with the latest mobile devices.</p>
              <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">View Mobile Phones</a>
            </div>
            <div className="w-full md:w-1/2">
              <img className="w-full rounded-xl" src="\src\assets\mbn.png" alt="Mobile Phones"    />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img className="w-full rounded-xl" src="\src\assets\lap.png" alt="Laptops"  />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4">Discover our Laptops</h2>
              <p className="text-lg">Experience power and performance with our range of laptops, perfect for work, gaming, and entertainment. From lightweight ultrabooks to high-performance gaming rigs, we have the perfect laptop for your needs.</p>
              <p className="text-lg mt-4">Upgrade your computing experience with our latest laptop models.</p>
              <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">View Laptops</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-16">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4">Shop Accessories</h2>
              <p className="text-lg">Enhance your electronic devices with our range of accessories, including cases, chargers, headphones, and more. Personalize your devices and optimize your user experience with our premium accessories.</p>
              <p className="text-lg mt-4">Find the perfect accessories to complement your mobile phones and laptops.</p>
              <a href="/accessories" className="text-blue-500 hover:underline mt-4 inline-block">View Accessories</a>
            </div>
            <div className="w-full md:w-1/2">
              <img className="w-full rounded-xl" src="\src\assets\sha.png" alt="Accessories" data-aos="fade-right" />
            </div>
          </div>

          <div className="text-center py-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg">At our electronic shop, we strive to provide the best products and services to our customers. Here's why you should choose us:</p>
            <ul className="text-left mt-4">
              <li className="mb-2"><span className="text-blue-500 font-bold">Wide Selection:</span> We offer a diverse range of electronic devices and accessories to suit every need and budget.</li>
              <li className="mb-2"><span className="text-blue-500 font-bold">Quality Products:</span> We source our products from reputable brands known for their quality and reliability.</li>
              <li className="mb-2"><span className="text-blue-500 font-bold">Exceptional Service:</span> Our friendly and knowledgeable staff are here to assist you every step of the way, from product selection to after-sales support.</li>
              <li className="mb-2"><span className="text-blue-500 font-bold">Competitive Prices:</span> Enjoy competitive prices and great deals on the latest electronic gadgets and accessories.</li>
              <li className="mb-2"><span className="text-blue-500 font-bold">Convenient Shopping:</span> Shop online or visit our store for a seamless shopping experience, with fast delivery and easy returns.</li>
            </ul>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default About;
