import React from "react";
import HomePageImage from "../Images/HomePageImage.jpg"; 
import homepage2 from "../Images/homepage2.jpg";
import homepage3 from "../Images/homepage3.png";
import homepage4 from "../Images/homepage4.jpg";
import homepage5 from "../Images/homepage5.jpg";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";


const Home = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "400px",
          position: "relative",
        }}
      >
        {/* Background Image */}
        <img
          src={HomePageImage}
          alt="/"
          style={{ width: "100%", height: "100%" }}
        />

        {/* Text Overlay */}
        <div
          style={{
            position: "absolute",
            width: "40%",
            paddingLeft: "30px",
            top: 0,
            left: 0,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", paddingLeft: "90px" }}
          >
            <strong>MAKE YOUR STATEMENT</strong>
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            <strong>
              Transform Your Business with NOORSIGN Custom Signs and Visual
              Solutions
            </strong>
          </Typography>
        </div>
      </Box>
      <Box
        style={{ display: "flex", flexDirection: "row", paddingTop: "30px" }}
      >
        <div style={{ marginRight: "10px" }}>
          <Typography
            variant="h4"
            style={{ color: "#000081", fontWeight: "bold" }}
          >
            <strong>
              If You have a vision then,
              <br />
              we’re here to help!
            </strong>
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#000081", paddingTop: "20px" }}
          >
            Top-Rated Sign Company Near you
          </Typography>
          <Typography style={{ paddingTop: "20px" }}>
            Your business deserves to be seen, and at the custom sign shop
            NOORSIGN, we can help you with visibility and so much more. We are
            a custom sign and visual solutions company that can handle a wide
            variety of your business’s needs, including content development,
            graphic design, and project management. Our visual idea experts
            offer unmatched insight and will work closely with you to understand
            your business and develop customized solutions that convey your
            message.{" "}
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#000081", paddingTop: "20px" }}
          >
            Visual Communication Solutions to Put Your Business Where It Needs
            To Be
          </Typography>
          <Typography style={{ paddingTop: "20px" }}>
            Our approach is simple: You have visual communication challenges, we
            have the tools and technology to put your company in front of the
            right audience. Whether you are looking to build brand awareness,
            increase location “findability”, or promote a service or product,
            our team of visual idea experts and collaborators will use the
            perfect mix of innovative marketing and graphics solutions to
            deliver exactly what you need.
          </Typography>
          <Typography style={{ paddingTop: "20px" }}>
            At NOORSIGN, we specialize in a variety of services to meet all
            your signage needs. That includes indoor/outdoor signs and banners;
            yard & site signs; vehicle graphics, window lettering and decals’
            custom tradeshow displays & exhibits; wall, floor or ceiling murals
            as well as messaging boards and digital sign technology solutions.
          </Typography>
        </div>
        <img style={{ width: "50%" }} src={homepage2} alt="" />
      </Box>
      <Box
        style={{ display: "flex", flexDirection: "row", paddingTop: "30px" }}
      >
        <img style={{ width: "50%" }} src={homepage3} alt="" />
        <div style={{ marginRight: "10px" }}>
          <Typography
            variant="h4"
            style={{ color: "#000081", fontWeight: "bold" }}
          >
            <strong>
              See how we’ve helped
              <br />
              businesses like yours.
            </strong>
          </Typography>
          <Typography style={{ paddingTop: "20px" }}>
            For over 35 years, NOORSIGN has been helping businesses of all
            kinds bring their vision to life and extend their brand’s reach –
            and we can’t wait to do the same for you. To learn how we can help
            you make impactful, lasting impressions, see some of our customer
            stories about how we have helped other business owners overcome
            their branding and messaging challenges.
          </Typography>
          <Typography style={{ paddingTop: "20px" }}>
            With our extensive selection of digital signage, interior and
            exterior signs, banners and vehicle wraps – among a wide variety of
            other sign products – you know that discovering creative solutions
            for your branding needs is as easy as calling us. We are passionate
            about helping each business we work with build their own identity
            through strategically designed messaging backed by quality
            craftsmanship in all aspects of the finished product.
          </Typography>
        </div>
      </Box>

      <Box
        style={{ display: "flex", flexDirection: "row", paddingTop: "30px" }}
      >
        <div style={{ marginRight: "10px" }}>
          <Typography
            variant="h4"
            style={{ color: "#000081", fontWeight: "bold" }}
          >
            <strong>
              Discover the power of comprehensive visual solutions.
            </strong>
          </Typography>
          <Typography style={{ paddingTop: "20px" }}>
            Our customers trust us because our custom sign shops provide them
            with the most cutting-edge products and services available. Browse
            some of our case studies to see how NOORSIGN has helped businesses
            in all types of industries make their statement and stand out from
            their competitors through custom signs and graphics.
          </Typography>
          <Typography style={{ paddingTop: "20px" }}>
            Explore our case studies to witness firsthand how NOORSIGN has been
            instrumental in helping businesses from various sectors make a
            lasting statement and distinguish themselves in the market. From
            eye-catching outdoor signage to captivating indoor displays, our
            success stories showcase the versatility of our custom solutions.
            Whether it's enhancing brand visibility, promoting special offers,
            or creating a memorable customer experience, our tailored approach
            to signage has consistently empowered businesses to stand out from
            their competitors. Join the ranks of satisfied clients who have
            experienced the transformative power of NOORSIGN in elevating their
            brand presence and making a lasting impression on their target
            audience.
          </Typography>
        </div>
        <img style={{ width: "50%" }} src={homepage4} alt="" />
      </Box>
      <img
        style={{ width: "100%", paddingTop: "30px" }}
        src={homepage5}
        alt=""
      />
      <Typography variant="h4" style={{ color: "#000081", fontWeight: "bold",textAlign:"center",paddingTop:"20px" }}>
        <strong>From start to finish, we've got you covered.</strong>
      </Typography>
      <Typography style={{ paddingTop: "20px" ,textAlign:"center"}}>
        At NOORSIGN, we are more than just signs. We are a strategic partner
        that helps to increase our customers’ visibility through a
        comprehensive, creative, and results-based approach. That’s why we offer
        a variety of graphic and visual solutions as well as services like
        content development, project management, graphic design, and more.
        Content Development Work with our experts to create a targeted content
        strategy for your signs. Installation Services Leave the heavy lifting
        to our experts for safe & proper installation for your sign. Project
        Management We offer full project management for your project from start
        to finish.
      </Typography>
    </div>
  );
};

export default Home;
