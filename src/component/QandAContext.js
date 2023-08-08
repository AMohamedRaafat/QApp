import { createContext, useState, useEffect } from "react";

export const QuestionsContext = createContext();

export const QandAContext = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("items") !== null) {
      return;
    } else {
      localStorage.setItem("items", JSON.stringify([]));
    }
    console.log(JSON.parse(localStorage.getItem("items")));
  }, []);
  const dataFromLocal = JSON.parse(localStorage.getItem("items"));
  const [data, setData] = useState(dataFromLocal);
  localStorage.setItem("items", JSON.stringify(data));
  const AddItem = (newItem) => {
    setData([...dataFromLocal, newItem]);
    localStorage.setItem("items", JSON.stringify(data));
  };
  const DeleteItem = (id) => {
    setData((prev) => {
      return prev.filter((item) => item.id !== id);
    });
    localStorage.setItem("items", JSON.stringify(data));
  };
  const DeleteAll = () => {
    setData([]);
    localStorage.removeItem("items");
  };
  return (
    <QuestionsContext.Provider value={{ data, AddItem, DeleteItem, DeleteAll }}>
      {children}
    </QuestionsContext.Provider>
  );
};
