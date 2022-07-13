import { changeFilter } from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <label>
      Find contacts by name &nbsp;
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        title="filter"
        required
      />
    </label>
  );
}
