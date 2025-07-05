import { FINAL_API } from "../const/constants.js";
import axios from "axios";

const fetchToDoList = async () => {
  try {
    const response = await axios.get(FINAL_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

const fetchAddToDo = async (data) => { 
  try {
    const response = await axios.post(`${FINAL_API}`, data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

const fetchGetOneToDo = async (id) => {
  try {
    const response = await axios.get(`${FINAL_API}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

const fetchUpdateOneToDo = async (id, isDone) => {
  try {
    const response = await axios.put(`${FINAL_API}${id}`, { isDone });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

const fetchDeleteOneToDo = async (id) => {
  try {
    const response = await axios.delete(`${FINAL_API}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

export {
  fetchToDoList,
  fetchAddToDo,
  fetchGetOneToDo,
  fetchUpdateOneToDo,
  fetchDeleteOneToDo
}