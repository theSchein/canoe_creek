import React, { useEffect, useState } from 'react';

const ImageDisplay = ({ data }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const pngUrls = data.results
        .map(item => item.metadata.image)
        .filter(url => url && url.endsWith('.png'));

      const fetchedImages = await Promise.all(
        pngUrls.map(async url => {
          const response = await fetch(url.replace('ipfs://', 'https://ipfs.io/ipfs/'));
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        })
      );

      setImages(fetchedImages);
    };

    fetchImages();
  }, [data]);

  return (
    <div>
      {images.map((imageSrc, index) => (
        <div key={index}>
          <img src={imageSrc} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
