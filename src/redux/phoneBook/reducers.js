import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, delContact, changeFilter } from "./actions";

const contactsReducer = createReducer([], {
  [addContact]: addContactFunc,
  [delContact]: delContactFunc
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});

function addContactFunc(state, { payload }) {
  if (state.some(contact => contact.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase())) {
    alert(`${payload.name} is alredy exist`);
    return state;
  }
  return [...state, payload];
}

function delContactFunc(state, { payload }) {
  return state.filter(contact => contact.id !== payload.id);
}

export default rootReducer;
