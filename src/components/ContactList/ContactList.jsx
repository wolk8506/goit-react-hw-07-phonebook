import s from 'components/ContactList/ContactList.module.css';
import {
  fetchContact,
  removeContact,
} from '../../redux/contacts/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';

export default function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const onRemoveContact = text => dispatch(removeContact(text));

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {visibleContacts.map(c => (
        <li className={s.item} key={c.id}>
          <p>
            {c.name} : {c.phone}
          </p>
          <button
            className={s.btn}
            type="button"
            onClick={() => {
              onRemoveContact(c.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
