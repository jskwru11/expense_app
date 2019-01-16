import getVisibleExpenses from '../../selectors/selectors';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 195000,
    createdAt: 1
}, {
    id: '3',
    description: 'Food',
    note: '',
    amount: 1950,
    createdAt: 2
}];

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters)

    expect(result).toEqual([expenses[1]]);
});