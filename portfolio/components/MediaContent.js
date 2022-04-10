const MediaContent = (props) => {
  return (
    <div
      className={`content-box media-content-grid ${props.customClassName}`}
      style={{ backgroundColor: props.bg }}
      {...props}
    >
      {props.reverse ? (
        <>
          <div className="media">{props.media}</div>
          <div className="content">
            <h3>{props.heading}</h3>
            {props.content}
          </div>
        </>
      ) : (
        <>
          <div className="content">
            <h3>{props.heading}</h3>
            {props.content}
          </div>
          <div className="media">{props.media}</div>
        </>
      )}
    </div>
  );
};

export default MediaContent;
