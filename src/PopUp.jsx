import Snackbar from "@mui/material/Snackbar";

export default function PopUp({ popUp, setPopUp, matches }) {
  const handleClosePopUp = () => {
    setPopUp({
      ...popUp,
      open: false,
    });
  };

  const vertical = "bottom";
  const horizontal = matches ? "center" : "right";

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={popUp.open}
        onClose={handleClosePopUp}
        TransitionComponent={popUp.Transition}
        key={popUp.Transition.name}
        autoHideDuration={1200}
      >
        <div
          style={{
            backgroundColor: "#fff",
            boxShadow: "2px 6px 8px 1px rgba(29, 32, 37, 0.2)",
            borderRadius: "10px",
            width: "200px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "700", color: "hsl(220, 13%, 13%)" }}>
            Added to cart
          </p>
        </div>
      </Snackbar>
    </div>
  );
}
