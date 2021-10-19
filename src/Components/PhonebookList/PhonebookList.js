import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/phoneBook/actions";
import style from "./PhonebookList.module.css";

export default function PhonebookList() {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const normalizedInput = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedInput));

  const dispatch = useDispatch();
  const deleteBtnHandler = contact => dispatch(actions.delContact(contact));

  return (
    <>
      <ul className={style.listWrapper}>
        {filteredContacts.map(contact => (
          <li className={style.listItem} key={contact.id}>
            <span className={style.listItemdData}>
              {contact.name}: <a href="tel:+{contact.number}">{contact.number}</a>
            </span>
            <button className={style.listItemBtn} type="button" onClick={() => deleteBtnHandler(contact)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
