import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, Dialog, IconButton, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PauseIcon from "@mui/icons-material/PlayArrow";

// Images
import img1 from "../assets/InteriorExteriorgallery1.jpeg";
import img2 from "../assets/InteriorExteriorgallery2.jpeg";
import img3 from "../assets/InteriorExteriorgallery3.jpeg";
import img4 from "../assets/InteriorExteriorgallery4.jpeg";
import img5 from "../assets/InteriorExteriorgallery5.jpeg";
import img6 from "../assets/InteriorExteriorgallery6.jpeg";
import img7 from "../assets/InteriorExteriorgallery7.jpeg";
import img8 from "../assets/InteriorExteriorgallery8.jpeg";
import img9 from "../assets/InteriorExteriorgallery9.jpeg";
import img10 from "../assets/InteriorExteriorgallery10.jpeg";
import img11 from "../assets/InteriorExteriorgallery11.jpeg";
import img12 from "../assets/InteriorExteriorgallery12.jpeg";
import img13 from "../assets/InteriorExteriorgallery13.jpeg";
import img14 from "../assets/InteriorExteriorgallery14.jpeg";
import img15 from "../assets/InteriorExteriorgallery15.jpeg";
import video1 from "../assets/InteriorExteriorgallery1.mp4";
import video2 from "../assets/InteriorExteriorgallery2.mp4";
import video3 from "../assets/InteriorExteriorgallery3.mp4";
import video4 from "../assets/InteriorExteriorgallery4.mp4";
import video5 from "../assets/InteriorExteriorgallery5.mp4";
import video6 from "../assets/InteriorExteriorgallery6.mp4";
import video7 from "../assets/InteriorExteriorgallery7.mp4";
import video8 from "../assets/InteriorExteriorgallery8.mp4";
import video9 from "../assets/InteriorExteriorgallery9.mp4";
import video10 from "../assets/InteriorExteriorgallery10.mp4";
import video11 from "../assets/InteriorExteriorgallery11.mp4";
import video12 from "../assets/InteriorExteriorgallery12.mp4";
import video13 from "../assets/InteriorExteriorgallery13.mp4";
import video14 from "../assets/InteriorExteriorgallery14.mp4";

// Sample Videos
const videos = [
  { id: 1, url:video1, title: "Sample Video 1" },
  { id: 2, url:video2 , title: "Sample Video 2" },
  { id: 3, url:video3 , title: "Sample Video 2" },
  { id: 4, url:video4 , title: "Sample Video 2" },
  { id: 5, url:video5 , title: "Sample Video 2" },
  { id: 6, url:video6 , title: "Sample Video 2" },
  { id: 7, url:video7 , title: "Sample Video 2" },
  { id: 8, url:video8 , title: "Sample Video 2" },
  { id: 9, url:video9 , title: "Sample Video 2" },
  { id: 10, url:video10 , title: "Sample Video 2" },
  { id: 11, url:video11 , title: "Sample Video 2" },
  { id: 12, url:video12 , title: "Sample Video 2" },
  { id: 13, url:video13 , title: "Sample Video 2" },
  { id: 14, url:video14 , title: "Sample Video 2" },
];

const GalleryPage = () => {
  const allImages = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14, img15
  ];

  const [activeTab, setActiveTab] = useState("images");

  // Image Gallery State
  const [activeDisplayIndex, setActiveDisplayIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCurrentImageIndex, setModalCurrentImageIndex] = useState(0);
  const autoslideRef = useRef(null);

  // Video State
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Auto slide for images only if image tab is active
  const startAutoslide = useCallback(() => {
    if (autoslideRef.current) clearInterval(autoslideRef.current);
    if (activeTab !== "images") return;

    autoslideRef.current = setInterval(() => {
      setActiveDisplayIndex((prev) => (prev + 1) % allImages.length);
    }, 4000);
  }, [allImages.length, activeTab]);

  useEffect(() => {
    startAutoslide();
    return () => clearInterval(autoslideRef.current);
  }, [startAutoslide]);

  // Handlers
  const handleThumbnailClick = (i) => {
    setActiveDisplayIndex(i);
    startAutoslide();
  };

  const handleOpenModal = (i) => {
    setModalCurrentImageIndex(i);
    setIsModalOpen(true);
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    setIsVideoModalOpen(true);
  };

  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 2, md: 2 }, px: 3 }}>

      {/* Title */}
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        sx={{
          mb: 1,
          background: "#0097b1",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Works
      </Typography>

      <Box
        sx={{
          width: 180,
          mx: "auto",
          mb: 4,
          backgroundColor: "#000000ff",
          height: 3,
          borderRadius: 2,
        }}
      />

      {/* Tabs */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 5 }}>
        <Button
          onClick={() => setActiveTab("images")}
          sx={{
            background: activeTab === "images" ? "#0097b1" : "#ddd",
            color: activeTab === "images" ? "#fff" : "#000",
            px: 4,
            py: 1,
            fontWeight: "bold",
            "&:hover": { background: "#0096b196 ", color: "#fff" },
          }}
        >
          Images
        </Button>

        <Button
          onClick={() => setActiveTab("videos")}
          sx={{
            background: activeTab === "videos" ? "#0097b1" : "#ffffffd9",
            color: activeTab === "videos" ? "#fff" : "#000",
            px: 4,
            py: 1,
            fontWeight: "bold",
            "&:hover": { background: "#0096b194", color: "#fff" },
          }}
        >
          Videos
        </Button>
      </Box>

      {/* ===================== IMAGES SECTION ===================== */}
      {activeTab === "images" && (
        <>
          {/* Slideshow */}
          <Box
            sx={{
              position: "relative",
              cursor: "pointer",
              mb: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => handleOpenModal(activeDisplayIndex)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeDisplayIndex}
                src={allImages[activeDisplayIndex]}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "300px",
                  objectFit: "contain",
                }}
              />
            </AnimatePresence>

            {/* Arrows */}
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setActiveDisplayIndex(
                  activeDisplayIndex === 0
                    ? allImages.length - 1
                    : activeDisplayIndex - 1
                );
              }}
              sx={{
                position: "absolute",
                left: { xs: 10, md: 200 },
                background: "#0097b1",
                color: "#fff",
                "&:hover": { background: "#63cbe0" },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setActiveDisplayIndex((activeDisplayIndex + 1) % allImages.length);
              }}
              sx={{
                position: "absolute",
                right: { xs: 10, md: 200 },
                background: "#0097b1",
                color: "#fff",
                "&:hover": { background: "#63cbe0" },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          {/* Thumbnails */}
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 2,
              pb: 2,
            }}
          >
            {allImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleThumbnailClick(i)}
                style={{
                  flexShrink: 0,
                  width: "150px",
                  height: "90px",
                  borderRadius: 8,
                  overflow: "hidden",
                  border:
                    i === activeDisplayIndex
                      ? "3px solid #0097b1"
                      : "3px solid transparent",
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "100%",
                    
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            ))}
          </Box>

          {/* Image Modal */}
          <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} fullWidth maxWidth="lg">
            <Box sx={{ position: "relative", background: "black" }}>
              <IconButton
                onClick={() => setIsModalOpen(false)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>

              <Box sx={{ textAlign: "center", py: 4 }}>
                <motion.img
                  src={allImages[modalCurrentImageIndex]}
                  style={{
                    maxWidth: "90%",
                    maxHeight: "80vh",
                    objectFit: "contain",
                  }}
                  initial={{ opacity: 0.8, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                />
              </Box>
            </Box>
          </Dialog>
        </>
      )}

      {/* ===================== VIDEOS SECTION ===================== */}
     {activeTab === "videos" && (
  <Box
    sx={{
      display: {
        xs: "flex",     // row scroll on mobile
        sm: "flex",
        md: "grid",     // grid on desktop+
      },
      gridTemplateColumns: {
        md: "1fr 1fr 1fr",
      },
      gap: 3,
      overflowX: {
        xs: "auto",
        sm: "auto",
        md: "unset",
      },
      scrollSnapType: {
        xs: "x mandatory",
        sm: "x mandatory",
      },
      "&::-webkit-scrollbar": { display: "none" },
    }}
  >
    {videos.map((video) => (
      <Box
        key={video.id}
        sx={{
          position: "relative",
          cursor: "pointer",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",

          // Individual item styling
          flex: {
            xs: "0 0 80%",   // show 80% width card in scroll mode
            sm: "0 0 60%",
            md: "unset",
          },
          scrollSnapAlign: {
            xs: "center",
            sm: "center",
          },
        }}
      >
        {/* Video Element */}
        <video
          id={`video-${video.id}`}
          src={video.url}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          muted
        />

        {/* Play/Pause Button */}
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            const vid = document.getElementById(`video-${video.id}`);
            if (vid.paused) vid.play();
            else vid.pause();
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 30,
            width: 50,
            height: 50,
            background: "rgba(0,0,0,0.5)",
            color: "white",
            "&:hover": { background: "rgba(0,0,0,0.7)" },
          }}
        >
          <PauseIcon fontSize="inherit" />
        </IconButton>

        {/* Open Modal */}
        <Box
          onClick={() => handleVideoClick(video)}
          sx={{
            position: "absolute",
            inset: 0,
          }}
        />
      </Box>
    ))}

    {/* Video Modal */}
    <Dialog
      open={isVideoModalOpen}
      onClose={() => setIsVideoModalOpen(false)}
      maxWidth="md"
      fullWidth
    >
      <Box sx={{ position: "relative", background: "#000" }}>
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 20,
            color: "white",
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <CloseIcon fontSize="large" color="error" />
        </IconButton>

        {currentVideo && (
          <video
            src={currentVideo.url}
            controls
            muted
            autoPlay
            style={{
              width: "100%",
              maxHeight: "80vh",
              background: "#000",
            }}
          />
        )}
      </Box>
    </Dialog>
  </Box>
)}

    </Box>
  );
};

export default GalleryPage;
