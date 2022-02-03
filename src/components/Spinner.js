import { Bars } from "react-loader-spinner";
const Spinner = ({ height, width }) => {
  return (
    <div className="d-flex justify-content-center mt-2">
      <Bars height={height} width={width} color="white" />
    </div>
  );
};

export default Spinner;
