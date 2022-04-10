const LordIcon = ({
  src,
  size = "130px",
  stroke = "20",
  scale = "75",
  delay = "0",
}) => {
  return (
    <lord-icon
      src={`https://cdn.lordicon.com/${src}.json`}
      trigger="loop"
      colors="primary:#121331,secondary:#08a88a"
      stroke={stroke}
      scale={scale}
      delay={delay}
      style={{ width: size, height: size }}
    ></lord-icon>
  );
};

export default LordIcon;
