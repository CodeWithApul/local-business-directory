import { Box, Grid } from "@mui/material";

interface ImageGalleryProps {
  media?: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ media }) => {
  return (
    <Box sx={{ pt: 2, pb: 2 }}>
      {/* <Typography variant="h6">Image Gallery</Typography> */}
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
      </Grid>
    </Box>
  );
};

export default ImageGallery;
