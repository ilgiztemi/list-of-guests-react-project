import { createContext, useEffect, useState } from "react";

const localStorageGuests = JSON.parse(localStorage.getItem("list-of-guests"));
const initialGuests = localStorageGuests !== null ? localStorageGuests : [];
export const GuestsContext = createContext();
export const GeustsProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [guestInput, setGuestInput] = useState("");
  const [list, setList] = useState(initialGuests);
  const [guest, setGuest] = useState("");
  const [confirmedGuests, setConfirmedGuests] = useState(0);
  const updateGuestName = (id, name, confirmed) => {
    const newList = list.map((el) =>
      el.id === id ? { id, name, confirmed } : el
    );
    setList(newList);
    setGuest("");
  };
  useEffect(() => {
    localStorage.setItem("list-of-guests", JSON.stringify(list));
  }, [list]);
  return (
    <GuestsContext.Provider
      value={{
        inputValue,
        setInputValue,
        list,
        setList,
        guest,
        setGuest,
        confirmedGuests,
        setConfirmedGuests,
        guestInput,
        setGuestInput,
        updateGuestName
      }}
    >
      {children}
    </GuestsContext.Provider>
  );
};
