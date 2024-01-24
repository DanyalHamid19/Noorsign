import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import contactus from "../Images/contactus.jpg";
import maps from "../Images/maps.png";


export default function ContactUs() {
  return (
    <div>
      <img style={{ width: "100%", height: "400px" }} src={contactus} alt="" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#464A55",
          marginTop: "30px",
          color:"white"
        }}
      >
        <div style={{ textAlign: "center", width: "50%", padding: "30px" }}>
          <Typography style={{fontWeight:"bold", paddingTop:"50px"}} variant="h4" gutterBottom>
            Come And Visit
          </Typography>
          <Typography variant="body1" paragraph>
            We are located in Lahore, Pakistan.
          </Typography>
          <Typography  style={{fontWeight:"bold"}} variant="body1" paragraph>
            Opening hours
          </Typography>
          <Typography variant="body1" paragraph>
            Monday – Saturday, 10am – 6pm
          </Typography>
          <Typography  style={{fontWeight:"bold"}} variant="body1" paragraph>
            ADDRESS
          </Typography>
          <Typography variant="body1" paragraph>
           SignBoard Market, Lahore, Lukhshami Chowk, Punjab 54900, Pakistan
          </Typography>
        </div>
        <img style={{ padding: "20px", width: "50%" }} src={maps} alt="" />
      </Box>
      <Typography
        style={{
          textAlign: "center",
          paddingTop: "30px",
          fontWeight: "bold",
          fontFamily: "inherit",
        }}
        variant="h3"
        paragraph
      >
        Have Suggesstions or need Assistance? Reach out to us using the form
        below.
      </Typography>

      <form>
        <Box
          sx={{ display: "flex", flexDirection: "column", maxWidth: "100%" }}
        >
          <TextField
            label="Your Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            label="Email Address"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            label="Message"
            multiline
            rows={8}
            variant="outlined"
            margin="normal"
            required
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{ marginTop: "16px", mx: "auto" }}
          >
            Submit Comment
          </Button>
        </Box>
      </form>

      <Box sx={{ marginTop: "40px" }}>
        <Typography variant="h4" gutterBottom>
          Your Feedback Matters!
        </Typography>
        <Typography variant="body1" paragraph>
          We appreciate your feedback. If you have any comments or suggestions,
          please feel free to share them with us below.
        </Typography>

        {/* Comment Section */}
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            marginTop: "16px",
          }}
        >
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Comments
          </Typography>
          {/* Example Comment */}
          {/* Add more comments as needed */}
          <div>
            <Typography
              style={{ fontWeight: "bold" }}
              variant="h6"
              gutterBottom
            >
              Abu Bakar
            </Typography>
            <Typography variant="body2">
              I love the variety of signboards available on this website! The
              designs are eye-catching and innovative
            </Typography>
          </div>
          <div>
            <Typography
              style={{ fontWeight: "bold" }}
              variant="h6"
              gutterBottom
            >
              Zain Ali
            </Typography>
            <Typography variant="body2">
              "The LED-illuminated signboards are a game-changer! They add such
              a vibrant and modern touch to any space."
            </Typography>
          </div>
          <div>
            <Typography
              style={{ fontWeight: "bold" }}
              variant="h6"
              gutterBottom
            >
              Daniyal hameed
            </Typography>
            <Typography variant="body2">
              "Great service and quick response! Keep up the good work.It would
              be great to see a 'Design Your Own Signboard' feature. This way,
              customers can unleash their creativity and make truly unique
              signs."
            </Typography>
          </div>
        </Box>
      </Box>
    </div>
  );
}
