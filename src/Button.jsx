export default function Button({
  handleClick,
  count,
  className = "",
  children,
}) {
  return (
    <button
      className={`button ${className}`}
      onClick={handleClick}
      disabled={count === 0}
    >
      {children}
    </button>
  );
}
