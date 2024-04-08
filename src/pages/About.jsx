import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n        }\n        header {\n            background-color: #333;\n            color: #fff;\n            text-align: center;\n            padding: 20px 0;\n        }\n        section {\n            padding: 20px;\n        }\n        h1, h2 {\n            text-align: center;\n        }\n        .container {\n            max-width: 900px;\n            margin: auto;\n        }\n        .slogan {\n            font-style: italic;\n            text-align: center;\n            margin-bottom: 30px;\n        }\n        .about-text {\n            text-align: justify;\n        }\n        .about-img {\n            display: block;\n            margin: auto;\n            max-width: 100%;\n            height: auto;\n            margin-bottom: 20px;\n        }\n    "
    }}
  />
  <header>
    <h1>About Us</h1>
  </header>
  <section>
    <div className="container -mt-16" >
      <h2 style={{paddingBottom: "20px"}}><strong>Welcome to our Document Verification System!</strong></h2>
      <p className="slogan"><b><i>Cruising Toward Efficiency: Your Trusted Partner for Streamlined Verification!</i></b></p>
      <img className="about-img "
        src="/src/assets/about.jpeg"
        alt="About Us Image"
      />
      <div className="about-text">
        <p>
        Our platform revolutionizes the way vehicle-related documents are handled,
        ensuring a seamless and efficient process for both drivers and regulatory authorities.
        With our user-friendly interface, users can easily register, log in, upload documents,
        and utilize our advanced document scanning feature. Say goodbye to paperwork and long
        queues at RTO offices. Join us in simplifying document verification and enhancing road safety today!
        </p>
      </div>
    </div>
  </section>
</>
  )
}
export default About