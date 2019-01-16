import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filtersActions';
import moment from 'moment';


test('should setup set text filter action object', () => {
    const filterText = 'Rent';
    const result = setTextFilter(filterText);

    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    });

});

test('should setup set text filter action object with default value', () => {
    const result = setTextFilter();

    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });

});

test('should setup sort by date action object', () => {
    const result = sortByDate();

    expect(result).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should setup sort by amount action object', () => {
    const result = sortByAmount();

    expect(result).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should setup set start date action object', () => {
    const result = setStartDate(moment(0));

    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});


test('should setup set end date action object', () => {
    const result = setEndDate(moment(1));

    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1)
    });
});