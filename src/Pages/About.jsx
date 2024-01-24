import React from "react";
import aboutus from "../Images/aboutus.jpg";
import personOnPhone from "../Images/personOnPhone.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function About() {
  return (
    <>
      <section style={{ position: "relative" }}>
        <img
          src={aboutus}
          alt="Section Background"
          style={{ width: "100%", height: "400px" }}
        />
        {/* <Box
          sx={{
            position: "absolute",
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Center both horizontally and vertically
            width: "20%",
            height: "20%", // Adjust the width as needed
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0%",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h3" color="white" style={{ fontWeight: "bold" }}>
            About us
          </Typography>
        </Box> */}
      </section>
      <section>
        <Typography
          variant="h4"
          style={{
            marginTop: "40px",
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
            background: "#8EE5EC",
            padding: "10px",
          }}
        >
          NOORSIGNS
        </Typography>

        <Typography
          variant="h6"
          style={{ marginTop: "30px", color: "#000081" }}
        >
          Bringing Messages to Life with Custom Signage, Graphics and More
        </Typography>

        <Typography variant="body1" style={{ marginTop: "10px" }}>
          At NOORSIGN, we are more than just signs. We are designers, planners,
          and marketers that work closely with our clients to help increase
          their business’ visibility. Whether you own a small retail store, a
          large commercial property, or just about anything in between, we can
          help you convey your message, promote your products, or get the word
          out about your brand. We offer everything - digital signage, content
          marketing, graphic design, and so much more.
        </Typography>
        <Typography variant="body1" style={{ marginTop: "10px" }}>
          Our services are all about you and your business. We are industry
          leaders in the business of creating visual communications. We strive
          to increase our client’s visibility through a comprehensive, creative,
          and results-based approach.
        </Typography>

        <Typography
          variant="h6"
          style={{ marginTop: "30px", color: "#000081" }}
        >
          Services Tailored to Your Business
        </Typography>

        <Typography variant="body1" style={{ marginTop: "10px" }}>
          Marketing your business requires much more than just hanging up a few
          simple signs. In order to project your message to the community you
          serve, you need to take a comprehensive approach. Companies work with
          us because they have visual communications challenges they need to
          solve, such as building brand awareness, promoting a product,
          increasing business “findability”, and more. The NOORSIGN team uses
          every tool in our toolbox to get your message across.
        </Typography>

        <Typography
          variant="h6"
          style={{ marginTop: "30px", color: "#000081" }}
        >
          Our services include the following:
        </Typography>

        <ul>
          <li
            style={{
              color: "black",
              listStyle: "none",
              position: "relative",
              paddingLeft: "1.5em",
            }}
          >
            <span
              style={{
                color: "#8EE5EC",
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                display: "inline-block",
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                backgroundColor: "#8EE5EC",
              }}
            ></span>
            Custom banners, signs, and graphics, including germ prevention
            signage, exhibits and displays, digital displays, and more
          </li>
          <li
            style={{
              color: "black",
              listStyle: "none",
              position: "relative",
              paddingLeft: "1.5em",
            }}
          >
            <span
              style={{
                color: "#8EE5EC",
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                display: "inline-block",
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                backgroundColor: "#8EE5EC",
              }}
            ></span>
            Content development, including a targeted content strategy
          </li>
          <li
            style={{
              color: "black",
              listStyle: "none",
              position: "relative",
              paddingLeft: "1.5em",
            }}
          >
            <span
              style={{
                color: "#8EE5EC",
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                display: "inline-block",
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                backgroundColor: "#8EE5EC",
              }}
            ></span>
            Installation of interior and exterior signage
          </li>
          <li
            style={{
              color: "black",
              listStyle: "none",
              position: "relative",
              paddingLeft: "1.5em",
            }}
          >
            <span
              style={{
                color: "#8EE5EC",
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                display: "inline-block",
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                backgroundColor: "#8EE5EC",
              }}
            ></span>
            Graphic design to bring your visual communications to life
          </li>
          <li
            style={{
              color: "black",
              listStyle: "none",
              position: "relative",
              paddingLeft: "1.5em",
            }}
          >
            <span
              style={{
                color: "#8EE5EC",
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                display: "inline-block",
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                backgroundColor: "#8EE5EC",
              }}
            ></span>
            Project management from start to finish
          </li>
          <li
            style={{
              color: "black",
              listStyle: "none",
              position: "relative",
              paddingLeft: "1.5em",
            }}
          >
            <span
              style={{
                color: "#8EE5EC",
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                display: "inline-block",
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                backgroundColor: "#8EE5EC",
              }}
            ></span>
            Survey and permitting to obtain permits and ensure compliance with
            local laws
          </li>
          <li
            style={{
              color: "black",
              listStyle: "none",
              position: "relative",
              paddingLeft: "1.5em",
            }}
          >
            <span
              style={{
                color: "#8EE5EC",
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                display: "inline-block",
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                backgroundColor: "#8EE5EC",
              }}
            ></span>
            Shipping and storage for your signage
          </li>
        </ul>

        <Typography>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              backgroundColor: "#8EE5EC",
              padding:"10px",
            }}
          >
            NOORSIGN Company Facts
          </h2>
        </Typography>
        <Typography style={{ padding: "10px" }}>
          Founded in 1985, NOORSIGN International, Inc. is the global franchisor
          of NOORSIGN® sign and graphic centers. We are a business-to-business
          franchise with more than 750 locations in 8 countries. NOORSIGN
          locations span across the United States, Puerto Rico, the United
          Kingdom, Canada, Chile, Grand Cayman, Malta, the Dominican Republic,
          and Australia (where centers operate as SIGNWAVE®).
        </Typography>
        <Typography style={{ padding: "10px" }}>
          NOORSIGN locations provide comprehensive sign and graphic solutions
          (custom signs and visual graphics) to help businesses and
          organizations - including manufacturers, schools and universities,
          retailers, construction companies, healthcare facilities and many
          other industries - extend their brand’s reach and communicate messages
          to their audiences.
        </Typography>
        <Typography style={{ padding: "10px" }}>
          Companies work with us because they have a need to solve a visual
          communications challenge such as building brand awareness, increasing
          location “findability”, promoting a product or service, helping people
          find their way around a facility or campus, hosting an event,
          communicating with employees, improving workflow, meeting safety and
          compliance regulations, etc.
        </Typography>
      </section>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px",
            backgroundColor: "#8EE5EC",
          }}
        >
          <div>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", paddingLeft: "0px" }}
            >
              Ready to get started
            </Typography>
            <Typography variant="h6" paragraph>
              Tell us about your project so we can help you Design the solution
              that fits your needs!
            </Typography>
            <Button variant="contained">Get your Quote</Button>
          </div>
          <img
            src={personOnPhone}
            alt="Person on Phone"
            style={{ width: "50%", borderRadius: "8px" }}
          />
        </Box>
      </div>
    </>
  );
}
