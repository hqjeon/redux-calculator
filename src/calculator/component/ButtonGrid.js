import { useDispatch } from "react-redux";
import { actions } from "../state";

const ButtonGrid = ({ buttonItems }) => {
  const dispatch = useDispatch();
  const numClick = ({ target: { value } }) => {
    dispatch(actions.setInputValue(value));
    dispatch(actions.updateCursor(1));
  };
  const utilClick = ({ target: { value } }) => {
    switch (value) {
      case "=":
        dispatch(actions.evaluate());
        break;
      default:
        dispatch(actions.setInputValue(value));
        dispatch(actions.updateCursor(1));
    }
  };
  return (
    <div className="button-grid">
      {buttonItems.map(({ value, type, label }) => (
        <button
          className="button-dial"
          onClick={type == "num" ? numClick : utilClick}
          value={value}
          key={value}
        >
          {label ? label : value}
        </button>
      ))}
    </div>
  );
};

export default ButtonGrid;
