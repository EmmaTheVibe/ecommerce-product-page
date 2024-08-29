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
  const nextImage = () => {
    if (selectedId < 3) {
      setSelectedId((curr) => curr + 1);
    }
  };
  const prevImage = () => {
    if (selectedId > 0) {
      setSelectedId((curr) => curr - 1);
    }
  };

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

  return (
    <div className="image-card" id={id}>
      <div className="main-image" onClick={handleOpen}>
        <img className="mainimg" src={images[selectedId].picUrl} alt="" />
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
