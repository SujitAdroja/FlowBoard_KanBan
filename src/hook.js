import { useNavigate } from "react-router-dom";
import { uid } from "uid";
const useApp = () => {
  const date = new Date();

  const navigate = useNavigate();
  const CreateBoard = ({ name, color }) => {
    const oldData = JSON.parse(localStorage.getItem("data"));
    const newData = [
      {
        id: uid(),
        name,
        color,
        tabs: { notStarted: [], inProgress: [], blocked: [], done: [] },
        createdAt: `${date.toLocaleString("en-us")}`,
      },
      ...oldData,
    ];

    localStorage.setItem("data", JSON.stringify(newData));
  };
  const updateBoardData = (boardId, tabs) => {
    const oldData = JSON.parse(localStorage.getItem("data"));

    const newData = oldData.map((board) =>
      board.id === boardId
        ? {
            ...board,
            tabs,
            createdAt: `${date.toLocaleString("en-us")}`,
          }
        : board
    );

    localStorage.setItem("data", JSON.stringify(newData));
  };
  const fetchBoards = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    return data;
  };
  const deleteBoard = (boardId) => {
    const oldData = JSON.parse(localStorage.getItem("data"));

    const newData = oldData.filter((board) => board.id !== boardId);

    localStorage.setItem("data", JSON.stringify(newData));
    navigate("/boards");
  };
  return {
    CreateBoard,
    fetchBoards,
    updateBoardData,
    deleteBoard,
  };
};
export default useApp;
