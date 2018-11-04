import tabs from '../../components/tabs'

test('Tabs render', () => {
  expect(tabs()).toMatchSnapshot()
})