import axios from "axios";

const usersInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users/",
});

export const getAllUsers = () => usersInstance.get("/");
