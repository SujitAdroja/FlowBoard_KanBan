const data = [];

const updateDataLocalStorage = () => {
  let existingData = localStorage.getItem("data");
  let dataArray = existingData ? JSON.parse(existingData) : [];
  localStorage.setItem("data", JSON.stringify(dataArray));
};

updateDataLocalStorage();

export default data;
