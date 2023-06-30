import Label from '../ContactForm/Label/Label';
import s from './Filter.module.css';

const Filter = ({name, onFilterChange}) => {
    return <Label labelTitle={'Find contacts by name'}>
        <input className= {s.input}
            type="text"
            name="filter"
            placeholder='Search name'
            value={name}
            onChange={onFilterChange}
    />
    </Label>
}

export default Filter;