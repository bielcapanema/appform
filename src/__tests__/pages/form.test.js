import form from '../../pages/form'

test('Form render', () => {
  expect(form()).toMatchSnapshot()
})