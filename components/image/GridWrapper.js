const GridWrapper = (props) => {
  const { children } = props;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
      {children}
    </div>
  );
};

export default GridWrapper;
