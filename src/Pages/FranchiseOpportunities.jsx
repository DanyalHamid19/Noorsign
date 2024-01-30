import React from "react";
import franchise from "../Images/franchise.jpg";
import fr1 from "../Images/fr1.png";
import fr2 from "../Images/fr2.png";
import fr3 from "../Images/fr3.png";
import fr4 from "../Images/fr4.png";
import fr5 from "../Images/fr5.png";
import Box from "@mui/material/Box";
import maps from "../Images/maps.png";

import { Typography } from "@mui/material";

export default function FranchiseOpportunities() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", height: "600px" }}
          src={franchise}
          alt=""
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#002A86",
            paddingTop: "30px",
          }}
        >
          <strong>Discover NOORSIGN</strong>
        </Typography>
        <Typography variant="h6" sx={{ marginTop: "10px", color: "#002A86" }}>
          Sign & Graphics Franchise Opportunity
        </Typography>
        <Typography style={{ paddingTop: "20px" }}>
          As a growing $29 billion industry, signage and graphics will be in
          demand as long as businesses need to be seen. NOORSIGN will be there
          to create captivating, high-performing visuals for businesses around
          the world—and you can be a part of it. NOORSIGN offers entrepreneurs
          and current business owners an opportunity to meet a growing demand
          for eye-catching graphics and marketing through franchising.
        </Typography>
        <Typography style={{ paddingTop: "20px" }}>
          Since opening up our business model in 1985, we have grown into one of
          the most highly trusted names in the franchise industry. We have 120+
          corporate employees serving 775+ locations. That’s over a 1:6 ratio
          for supporting franchisees—the largest support resources in the
          industry!
        </Typography>
        <Typography style={{ paddingTop: "20px" }}>
          Our dedication to franchisee success is why our two of our company’s
          "Key Strategic Objectives" center on increasing franchisee's center
          sales and profitability. It's also why we’ve won awards for our level
          of franchisee satisfaction—and ultimately, it’s why our franchisees
          have achieved financial success and personal fulfillment.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            paddingTop: "50px",
            color: "#5C5D5F",
          }}
        >
          <strong>Why NOORSIGN ?</strong>
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "200px",
            paddingTop: "50px",
            justifyContent: "center",
          }}
        >
          <div style={{ paddingLeft: "30px" }}>
            <img src={fr1} alt="" />
            <Typography style={{ paddingTop: "10px", color: "#0066B3" }}>
              MORE THAN 35 YEARS OF PROVEN HISTORY
            </Typography>
          </div>
          <div>
            <img src={fr2} alt="" />
            <Typography style={{ paddingTop: "10px", color: "#0066B3" }}>
              50% OFF OUR FRANCHISE FEE FOR VETERANS & FIRST RESPONDERS
            </Typography>
          </div>
          <div>
            <img src={fr3} alt="" />
            <Typography style={{ paddingTop: "10px", color: "#0066B3" }}>
              24/7 ONLINE EDUCATION AT FASTSIGNS UNIVERSITY
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "200px",
            paddingTop: "40px",
            justifyContent: "center",
          }}
        >
          <div>
            <img src={fr4} alt="" />
            <Typography style={{ paddingTop: "10px", color: "#0066B3" }}>
              LEADER OF $29 BILLION INDUSTRY
            </Typography>
          </div>
          <div style={{ paddingRight: "50px" }}>
            <img src={fr1} alt="" />
            <Typography style={{ paddingTop: "10px", color: "#0066B3"}}>
              MORE THAN 35 YEARS OF PROVEN HISTORY
            </Typography>
          </div>
          <div style={{ paddingRight: "40px" }}>
            <img src={fr5} alt="" />
            <Typography style={{ paddingTop: "10px", color: "#0066B3" }}>
              TOP RATED B2B BRAND
            </Typography>
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#464A55",
            marginTop: "30px",
            color: "white",
          }}
        >
          <div style={{ textAlign: "center", width: "50%", padding: "30px" }}>
            <Typography
              style={{ fontWeight: "bold", paddingTop: "50px" }}
              variant="h4"
              gutterBottom
            >
              For More Information,Visit
            </Typography>
            <Typography variant="body1" paragraph>
              We are located in Lahore, Pakistan.
            </Typography>
            <Typography
              style={{ fontWeight: "bold" }}
              variant="body1"
              paragraph
            >
              Opening hours
            </Typography>
            <Typography variant="body1" paragraph>
              Monday - Saturday, 10am - 6pm
            </Typography>
            <Typography
              style={{ fontWeight: "bold" }}
              variant="body1"
              paragraph
            >
              ADDRESS
            </Typography>
            <Typography variant="body1" paragraph>
              SignBoard Market, Lahore, Lukhshami Chowk, Punjab 54900, Pakistan
            </Typography>
          </div>
          <img style={{ padding: "20px", width: "50%" }} src={maps} alt="" />
        </Box>
      </div>
    </div>
  );
}
