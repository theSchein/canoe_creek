import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ImageTile from './ImageTile';
import Image from 'next/image'

const localImages = [
  '../public/nouns_ipfs/output_nouns_88.png'
  // 'src/libs/nouns_ipfs/output_nouns_89.png',
  // '/libs/nouns_ipfs/output_nouns_90.png',
  // '@/libs/nouns_ipfs/output_nouns_92.png',
  // '../libs/nouns_ipfs/output_nouns_93.png',
  // '../libs/nouns_ipfs/output_nouns_94.png',
  // '../libs/nouns_ipfs/output_nouns_96.png',
  // '../libs/nouns_ipfs/output_nouns_97.png',
  // '../libs/nouns_ipfs/output_nouns_98.png',
  // '../libs/nouns_ipfs/output_nouns_99.png'
];

function ImageTilesContainer() {
  const [currentImage, setCurrentImage] = useState(localImages[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % localImages.length;
      setCurrentImage(localImages[index]);
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={4}>
        <ImageTile imageSrc={currentImage} />
      </Grid>
    </Grid>
  );
}

export default ImageTilesContainer;
