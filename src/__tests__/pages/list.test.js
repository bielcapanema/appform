import list from '../../pages/list'

test('List render', () => {
  expect(list([])).toMatchSnapshot()
})