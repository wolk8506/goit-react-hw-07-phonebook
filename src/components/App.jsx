import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLoading } from 'redux/contacts/contacts-selectors';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';

export default function App() {
  const loading = useSelector(getLoading);
  return (
    <>
      {loading && <Loader />}
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </>
  );
}
