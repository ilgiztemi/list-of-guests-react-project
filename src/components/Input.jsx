import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import { GuestsContext } from "../context/Context";
const Input = () => {
  const {
    inputValue,
    setInputValue,
    list,
    setList,
    guest,
    confirmedGuests,
    setGuestInput
  } = useContext(GuestsContext);
  useEffect(() => {
    if (guest) {
      setGuestInput(guest.name);
    } else {
      setGuestInput("");
    }
  }, [setGuestInput, guest]);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!guest && inputValue !== "") {
      setList([{ id: nanoid(), name: inputValue, confirmed: false }, ...list]);
      setInputValue("");
    }
  };
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <input
        className="form-input"
        value={inputValue}
        type="text"
        placeholder="Enter a new guest..."
        onChange={handleInput}
      />
      <button className="submitBtn" type="submit">
        Submit
      </button>
      <p className="confirmed">
        {confirmedGuests ? confirmedGuests : 0}{" "}
        {confirmedGuests > 1 ? "confirmed guests!" : "confirmed guest!"}
      </p>
    </form>
  );
};
export default Input;
