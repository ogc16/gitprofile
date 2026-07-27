import { useState, Fragment, useEffect } from 'react';

const LazyImage: React.FC<{
  placeholder: React.ReactElement;
  src: string;
  alt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}> = ({ placeholder, src, alt, ...rest }): React.ReactElement => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;

    imageToLoad.onload = () => {
      setLoading(false);
    };

    imageToLoad.onerror = () => {
      setLoading(false);
      setError(true);
    };
  }, [src]);

  if (error) {
    return <Fragment>{placeholder}</Fragment>;
  }

  return (
    <Fragment>
      {loading ? (
        placeholder
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="transition-opacity duration-300"
          {...rest}
        />
      )}
    </Fragment>
  );
};

export default LazyImage;
