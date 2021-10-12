// import React from "react";
import { useSelector } from "react-redux";

import PhonebookForm from "./PhonebookForm/PhonebookForm";
import PhonebookHeadline from "./PhonebookHeadline/PhonebookHeadline";
import PhonebookList from "./PhonebookList/PhonebookList";
import PhonebookListHeadline from "./PhonebookListHeadline/PhonebookListHeadline";
import PhonebookSearch from "./PhonebookSearch/PhonebookSearch";

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  // [
  //   { id: "id-1", name: "Darth Vader", number: "459-12-56" },
  //   { id: "id-2", name: "Luke Skywalker", number: "443-89-12" },
  //   { id: "id-3", name: "ObiWan Kenobi", number: "645-17-79" },
  //   { id: "id-4", name: "R2 D2", number: "227-91-26" },
  //   { id: "id-5", name: "Padme Amidala", number: "123-34-67" },
  //   { id: "id-6", name: "Darth Sidius", number: "467-54-34" },
  //   { id: "id-7", name: "QuaiGon Jinn", number: "789-23-45" },
  //   { id: "id-8", name: "Boba Fett", number: "274-45-09" }
  // ]

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
