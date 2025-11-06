import "./Loader.css";

const Loader = () => {
  return (
    <div className="h-96 flex items-center justify-center min-h-6/12">
      <div className="loadingspinner">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
    </div>
  );
};

export default Loader;
