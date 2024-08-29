export default function Slider({ prevImage, nextImage }) {
  return (
    <div className="sliderB">
      <span style={{ paddingRight: "4px" }} onClick={prevImage}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </span>
      <span style={{ paddingLeft: "4px" }} onClick={nextImage}>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
}
