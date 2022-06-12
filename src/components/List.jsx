import { useContext, useEffect } from "react";
import { GuestsContext } from "../context/Context";
// import Name from "./Name";

const List = () => {
  const {
    list,
    setList,
    guest,
    setGuest,
    setConfirmedGuests,
    guestInput,
    setGuestInput,
    updateGuestName
  } = useContext(GuestsContext);
  const handleCheckbox = (el) => {
    setList(
      list.map((item) => {
        if (item.id === el.id) {
          return { ...item, confirmed: !el.confirmed };
        } else {
          return item;
        }
      })
    );
  };
  useEffect(() => {
    const checked = list.filter((el) => el.confirmed === true && el);
    setConfirmedGuests(checked.length);
  }, [list, setConfirmedGuests]);
  const handleDelete = (el) => {
    setList(list.filter((item) => item.id !== el.id));
  };
  const handleEdit = (el) => {
    const findGuest = list.find((item) => item.id === el.id);
    setGuest(findGuest);
    if (guestInput) {
      updateGuestName(guest.id, guestInput, guest.confirmed);
    }
  };
  const handleGuestInput = (e) => {
    setGuestInput(e.target.value);
  };

  return (
    <div className="main">
      {list.map((el) => (
        <div className="card" key={el.id}>
          {guest.id !== el.id ? (
            <p className="name">{el.name}</p>
          ) : (
            <input
              className="name-input"
              onChange={handleGuestInput}
              value={guestInput}
              type="text"
            />
          )}
          <label className="label">Confirm</label>
          <input
            className="checkboxBtn"
            onChange={() => handleCheckbox(el)}
            type="checkbox"
          />
          <button className="editBtn" onClick={() => handleEdit(el)}>
            {guest.id !== el.id ? "edit" : "save"}
          </button>
          <button className="deleteBtn" onClick={() => handleDelete(el)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default List;
