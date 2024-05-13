import Navbar from '../components/Navbar';
const About = () => {
  return (
    <>
      <Navbar />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>About Us</title>
      <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-3xl">About Us</h1>
      </header>
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center pb-4">Welcome to our Document Verification System!</h2>
          <p className="italic text-center pb-6"><strong>Cruising Toward Efficiency: Your Trusted Partner for Streamlined Verification!</strong></p>
          <img
            src="/src/assets/about.jpeg"
            alt="About Us Image"
            className=" w-full max-w-lg mx-auto mb-6 rounded-lg"
            style={{ height: 'auto', maxHeight: '400px' }}   // Set a maximum height for the image
          />
          <div className="text-justify">
            {/* <p>
              Our platform revolutionizes the way vehicle-related documents are handled,
              ensuring a seamless and efficient process for both drivers and regulatory authorities.
              With our user-friendly interface, users can easily register, log in, upload documents,
              and utilize our advanced document scanning feature. Say goodbye to paperwork and long
              queues at RTO offices. Join us in simplifying document verification and enhancing road safety today!
            </p> */}
            <p>
          Welcome to our digital service revolutionizing document verification for vehicle owners! At our core, we understand the challenges faced by drivers in carrying and managing their essential vehicle-related documents. To address this issue, we've developed an innovative solution that leverages the power of technology to simplify and streamline the entire process.
          </p>
          <p> 
          Our platform utilizes Quick Response (QR) codes, which are machine-readable images scannable with a smartphone camera. This cutting-edge approach allows drivers to access vital information instantly by scanning a unique QR code placed inside their vehicles. No more worries about carrying physical documents or facing difficulties during roadside checks!
          </p>
          <p>
          One of the key features of our service is its seamless integration with Regional Transport Offices (RTOs). RTO officers can efficiently verify vehicle information and check the authenticity of RTO-issued documents by scanning the QR code on the vehicle's number plate. This not only enhances compliance but also promotes road safety by ensuring that vehicles are legally registered and documents are up to date.
          </p>
          <p>
          Moreover, our platform goes beyond mere verification. We proactively notify users about upcoming document renewals, ensuring they stay compliant with regulations without any hassle. By automating these reminders, we contribute to saving valuable time and resources for both drivers and regulatory authorities.
          </p>
          <p>
          Join us in embracing a digital future where document verification is efficient, convenient, and secure. Experience the convenience of QR code-based verification and stay ahead of the curve with our user-friendly platform. Let's drive towards a smarter, more connected world on the road!
          </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;