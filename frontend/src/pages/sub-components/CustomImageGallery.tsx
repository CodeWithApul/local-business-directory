import { ImageGallery } from "react-image-grid-gallery";

import { Box, Typography } from "@mui/material";

interface CustomImageGalleryProps {
  media: string[];
}

const CustomImageGallery: React.FC<CustomImageGalleryProps> = ({ media }) => {
  const imagesWithSrcAndAlt = media.map((m, i) => {
    return {
      id: i + 1,
      src: m,
      alt: "Media " + (i + 1),
      caption: "Media " + (i + 1),
    };
  });
  console.log(imagesWithSrcAndAlt);
  return (
    <Box sx={{ pt: 2, pb: 2 }}>
      <Typography variant="h6">Image Gallery</Typography>
      {imagesWithSrcAndAlt.length > 0 && (
        <ImageGallery
          imagesInfoArray={[...imagesWithSrcAndAlt]}
          // customStyles={{
          //   imageContainerStyle: {
          //     width: "200px",
          //     height: "150px",
          //     objectFit: "cover",
          //   },
          // }}
          // customStyles={{
          //   galleryContainerStyle: {
          //     padding: "10px",
          //     borderRadius: "8px",
          //     display: "flex",
          //     justifyContent: "center",
          //   },
          // }}
          customStyles={{
            galleryContainerStyle: {
              display: "flex",
              flexWrap: "wrap", // ✅ wrap to next line
              gap: "16px", // spacing between thumbs
              justifyContent: "flex-start", // align left
              paddingTop: "20px",
            },
            imageStyle: {
              width: "200px",
              height: "150px",
              objectFit: "cover", // ✅ crops but keeps aspect ratio
              borderRadius: "6px",
            },
          }}
        />
      )}
      {/* 
      <Grid container spacing={2}>
        {media?.map((src, index) => (
          <Grid sx={{ xs: 6, md: 4 }} key={index}>
            <Box sx={{ overflow: "hidden", borderRadius: 2 }}>
              <img
                src={src}
                height={140}
                alt={`Business image ${index + 1}`}
                style={{
                  width: "100%",
                  transition: "transform 0.3s",
                  transform: "scale(1)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Box>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default CustomImageGallery;
