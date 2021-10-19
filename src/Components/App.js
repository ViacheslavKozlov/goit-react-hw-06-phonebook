// import React from "react";
import { useSelector } from "react-redux";
import PhonebookForm from "./PhonebookForm/PhonebookForm";
import PhonebookHeadline from "./PhonebookHeadline/PhonebookHeadline";
import PhonebookList from "./PhonebookList/PhonebookList";
import PhonebookListHeadline from "./PhonebookListHeadline/PhonebookListHeadline";
import PhonebookSearch from "./PhonebookSearch/PhonebookSearch";

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <>
      <PhonebookHeadline title="Phonebook" />
      <PhonebookForm contacts={contacts} />
      {contacts.length > 0 && (
        <>
          <PhonebookListHeadline title="Contacts" />
          <PhonebookSearch />
          <PhonebookList contacts={contacts} />
        </>
      )}
    </>
  );
}
