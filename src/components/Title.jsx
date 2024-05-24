const Title = (props) => {
  return (
    <div className={`col-${props.col} mb-5 text-${props.align}`}>
      <span className="hint-title text-primary text-base uppercase tracking-[5px]">
        <b>{props.title}</b>
      </span>
      <h1 className="title text-black text-4xl mt-1 mb-7 font-medium">
        <b>{props.subtitle}</b>
      </h1>
    </div>
  );
};

export default Title;
