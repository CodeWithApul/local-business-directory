import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // if using react-router

const PromoBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage
    const hasSeenOffer = localStorage.getItem("seenOffer");

    if (!hasSeenOffer) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("seenOffer", "true"); // mark as seen
    setShowModal(false);
  };

  const handleRedirect = () => {
    // localStorage.setItem("seenOffer", "true"); // mark as seen
    handleClose();
    navigate("/add-business", { replace: true }); // or window.location.href = "/offer"
  };

  return (
    showModal && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          //   backgroundImage:
          //  "url('https://img1.paisawapas.com/images/2019/02/12122313/flipkart.png')",
          //   backgroundImage:
          //   "url('https://images.freekaamaal.com/featured_images/149398_flipkart-gift-card.png')", // replace with your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f0eaeaff", // Flipkart light background
          opacity: 0.96,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            // background: "linear-gradient(135deg, #ff7eb3, #ff758c, #ff7eb3)",
            background: "linear-gradient(135deg, #ffd1dc, #ff9a9e, #fad0c4)",
            // background: "linear-gradient(135deg, #ffecd2, #fcb69f)",

            // backgroundColor: "rgba(0, 0, 0, 0.7)",
            // background:
            //   "url('https://img1.paisawapas.com/images/2019/02/12122313/flipkart.png')",

            color: "white",
            padding: "30px",
            borderRadius: "10px",
            textAlign: "center",
            maxWidth: "400px",
          }}
        >
          <img
            src="https://bootflare.com/wp-content/uploads/2025/07/Flipkart-Logo-1536x1024.png"
            alt="Flipkart Gift Card Offer"
            style={{ width: "150px" }}
          />
          <h2 style={{ color: "#2874f0" }}>🎉 Special Offer 🎉</h2>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
            className="colorBlink"
          >
            First 100 Business Owners enter a Lucky Draw to win a{" "}
            <span style={{ textDecoration: "underline" }}>
              ₹1000 Flipkart Voucher!
            </span>
          </p>

          <button
            onClick={handleRedirect}
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#2874f0",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Register Now
          </button>

          <button
            onClick={handleClose}
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "gray",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default PromoBanner;
