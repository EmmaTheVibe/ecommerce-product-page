import { useState } from "react";
import ImageCard from "./ImageCard";
import NavBar from "./NavBar";
import ModalBox from "./ModalBox";
import Counter from "./Counter";
import Button from "./Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Cart from "./Cart";
import DrawerTab from "./DrawerTab";
import PopUp from "./PopUp";
import Slide from "@mui/material/Slide";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function App() {
  const matches = useMediaQuery("(max-width: 875px)");
  const [selectedId, setSelectedId] = useState(0);
  const [count, setCount] = useState(0);
  const [filledCart, setFilledCart] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [popUp, setPopUp] = useState({
    open: false,
    Transition: SlideTransition,
  });

  const incrCount = () => {
    if (filledCart) return;
    setCount((curr) => (curr < 10 ? curr + 1 : curr));
  };

  const decrCount = () => {
    if (filledCart) return;
    setCount((curr) => (curr > 0 ? curr - 1 : curr));
  };

  const handleOpen = () => {
    if (!matches) {
      setOpenModal(true);
    }
  };
  const handleClose = () => setOpenModal(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => setOpenDrawer(false);

  const fillCart = () => {
    setFilledCart(true);
    setPopUp({
      ...popUp,
      open: true,
    });
  };
  return (
    <section className="main">
      {matches && (
        <DrawerTab
          openDrawer={openDrawer}
          handleCloseDrawer={handleCloseDrawer}
        />
      )}
      <ModalBox
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleClose={handleClose}
      >
        <ImageCard
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          showSlider={true}
          id="scale"
        />
      </ModalBox>
      <NavBar
        matches={matches}
        count={count}
        setCount={setCount}
        showCart={showCart}
        setShowCart={setShowCart}
        filledCart={filledCart}
        setFilledCart={setFilledCart}
        handleOpenDrawer={handleOpenDrawer}
      />
      <div className="box">
        <div className="container">
          <ImageCard
            handleOpen={handleOpen}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            matches={matches}
          >
            {matches && showCart && (
              <Cart
                setCount={setCount}
                count={count}
                setShowCart={setShowCart}
                showCart={showCart}
                filledCart={filledCart}
                setFilledCart={setFilledCart}
              />
            )}
          </ImageCard>
          <div className="info">
            <p style={{ fontWeight: "700" }}>SNEAKER COMPANY</p>
            <h1>
              Fall Limited Edition <br />
              Sneakers
            </h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>

            <div className="price-box">
              <div className="pricebar">
                <h2>$125.00</h2>
                <div className="discount">
                  <p>50%</p>
                </div>
              </div>

              <p className="strike">$250.00</p>
            </div>

            <div className="adder-box">
              <Counter
                incrCount={incrCount}
                decrCount={decrCount}
                count={count}
              />
              <Button handleClick={fillCart} count={count} className="buttonB">
                <svg
                  width="22"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cart-btn-svg"
                >
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="hsl(220, 13%, 13%)"
                    fillRule="nonzero"
                  />
                </svg>{" "}
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PopUp popUp={popUp} setPopUp={setPopUp} matches={matches} />
    </section>
  );
}

export default App;
