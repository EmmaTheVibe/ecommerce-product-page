import Slider from "./Slider";

export default function ImageCard({
  selectedId,
  setSelectedId,
  matches,
  showSlider = matches ? true : false,
  handleOpen = () => {},
  id = "",
  children,
}) {
  const images = [
    {
      id: 0,
      picUrl: "./images/image-product-1.jpg",
      thumbnailUrl: "./images/image-product-1-thumbnail.jpg",
      selected: true,
    },
    {
      id: 1,
      picUrl: "./images/image-product-2.jpg",
      thumbnailUrl: "./images/image-product-2-thumbnail.jpg",
      selected: false,
    },
    {
      id: 2,
      picUrl: "./images/image-product-3.jpg",
      thumbnailUrl: "./images/image-product-3-thumbnail.jpg",
      selected: false,
    },
    {
      id: 3,
      picUrl: "./images/image-product-4.jpg",
      thumbnailUrl: "./images/image-product-4-thumbnail.jpg",
      selected: false,
    },
  ];

  const nextImage = () => {
    setSelectedId((curr) => {
      if (curr === images.length - 1) return 0;
      return curr + 1;
    });
  };
  const prevImage = () => {
    setSelectedId((curr) => {
      if (curr === 0) return images.length - 1;
      return curr - 1;
    });
  };

  return (
    <div className="image-card" id={id}>
      <div className="main-image" onClick={handleOpen}>
        <div className="carousel">
          {images.map((image) => (
            <img
              key={image.id}
              className="mainimg"
              src={image.picUrl}
              style={{ translate: `${-100 * selectedId}%` }}
              alt=""
            />
          ))}
        </div>

        {showSlider ? (
          <Slider
            selectedId={selectedId}
            nextImage={nextImage}
            prevImage={prevImage}
          />
        ) : (
          ""
        )}
        {children}
      </div>
      {!matches && (
        <div className="thumbnails">
          {images.map((image) => (
            <div
              className={`thmb ${image.id === selectedId ? "selected" : ""}`}
              key={image.id}
            >
              <img
                onClick={() => setSelectedId(image.id)}
                src={image.thumbnailUrl}
                alt=""
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
