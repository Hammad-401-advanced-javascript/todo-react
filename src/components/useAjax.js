import { useState } from 'react';
import axios from 'axios';

function useAjax(callback) {
  const [items, setItems] = useState([]);

  const addNewItem = async (obj) => {
    obj.complete = false;
    let config = {
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    };
    let url = 'https://lab32-401.herokuapp.com';
    let data = {
      item: obj.item,
      difficulty: obj.difficulty,
      complete: obj.complete,
      assignee: obj.assignee,
    };
    await axios.post(url, data, config);
    let response = await getAllItems();
    setItems([response]);
  };

  const updateItem = async (obj, _id) => {
    let config = {
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    };
    let url = `https://lab32-401.herokuapp.com/${_id}`;
    let data = {
      item: obj.item,
      difficulty: obj.difficulty,
      complete: !obj.complete,
      assignee: obj.assignee,
    };
    await axios.put(url, data, config);
    let response = await getAllItems();
    setItems([response]);
  };

  const deleteItem = async (id) => {
    let config = {
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    };
    let url = `https://lab32-401.herokuapp.com/${id}`;
    await axios.delete(url, config);
    let response = await getAllItems();
    setItems([response]);
  };

  const getAllItems = async () => {
    let config = {
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    };
    let url = 'https://lab32-401.herokuapp.com';
    let response = await axios.get(url, config);

    callback(response.data);
  };

  // useEffect(()=>{

  // });

  return [addNewItem, updateItem, deleteItem, getAllItems, items];
}

export default useAjax;