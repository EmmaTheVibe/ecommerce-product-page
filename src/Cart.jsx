import Button from "./Button";
export default function Cart({
  count,
  setShowCart,
  showCart,
  setCount,
  filledCart,
  setFilledCart,
}) {
  const total = count * 125;
  const handleCheckout = () => {
    setCount(0);
    setShowCart(false);
    setFilledCart(false);
  };
  const handleDelete = () => {
    setCount(0);
    setFilledCart(false);
  };

  return (
    <div className={`cart ${showCart ? "show" : ""}`}>
      <div className="cart-top">
        <p style={{ fontWeight: "700" }}>Cart</p>
      </div>
      <div className="cart-content">
        {filledCart ? (
          <div className="filled-cart">
            <div className="ordered-item">
              <div className="left-order">
                {" "}
                <div className="thmb-2">
                  <img src="./images/image-product-1-thumbnail.jpg" alt="" />
                </div>
                <div className="item-info">
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    <span>$125.00</span> x{" "}
                    <span className="count">{count} </span>
                    <span
                      style={{ fontWeight: "700", color: "hsl(220, 13%, 13%)" }}
                    >
                      ${total}.00
                    </span>
                  </p>
                </div>
              </div>

              <span onClick={handleDelete} style={{ cursor: "pointer" }}>
                <svg
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xlinkHref="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </span>
            </div>
            <Button handleClick={handleCheckout}>Checkout</Button>
          </div>
        ) : (
          <p style={{ fontWeight: "700" }}>Your cart is empty</p>
        )}
      </div>
    </div>
  );
}
