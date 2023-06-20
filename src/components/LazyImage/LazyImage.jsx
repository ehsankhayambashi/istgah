import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";
import { Box } from "@mui/material";
import useImageToBlurhash from "../../hooks/useImageToBlurhash";

function LazyImage({ imageUrl }) {
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);
  const hashUrl = useImageToBlurhash(imageUrl);
  console.log("hashUrl", hashUrl);
  const handleLoad = () => {
    setLoaded(true);
  };
  const handleLoadStarted = () => {
    console.log("Started: ");
    setLoadStarted(true);
  };

  //   const url = `http://localhost:9000/${image.name}`;

  return (
    <Box position="relative">
      <LazyLoadImage
        key={imageUrl}
        src={imageUrl}
        height={500}
        width={333}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
      />
      {!isLoaded && isLoadStarted && (
        // <LazyLoadComponent>
        <Box zIndex={20} position="absolute" top={0} left={0}>
          <Blurhash
            hash="L5F7e_4+6L%E?=npFgro1l-4#mEN"
            width={333}
            height={500}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </Box>
        // </LazyLoadComponent>
      )}
    </Box>
  );
}

export default LazyImage;
