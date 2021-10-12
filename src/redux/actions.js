import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContact = createAction("contacts/addContact", data => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number
  }
}));

export const delContact = createAction("contacts/delContact");

export const changeFilter = createAction("contacts/filter");
