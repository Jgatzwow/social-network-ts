import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';

export const sada = {}
describe('ProfileStatus component', () => {
  test('status from props should be in state', () => {
    const component = create(<ProfileStatus status={'It-incubator'}/>)
    const instance = component.getInstance()
    // @ts-ignore
    expect(instance?.state.status).toBe('It-incubator')
  });
  test('span should be displayed after mounting', () => {
    const component = create(<ProfileStatus status={'It-incubator'}/>)
    const root = component.root

    // @ts-ignore
    let span = root.findByType('span')
    expect(span).not.toBeNull()
  })

  test('input should not be displayed after mounting', () => {
    const component = create(<ProfileStatus status={'It-incubator'}/>)
    const root = component.root

    // @ts-ignore

    expect(() => {
      let input = root.findByType('input')
    }).toThrow()
  })
})

test('span should be displayed after mounting with correct status', () => {
  const component = create(<ProfileStatus status={'It-incubator'}/>)
  const root = component.root

  // @ts-ignore
  let span = root.findByType('span')
  expect(span.children[0]).toBe('It-incubator')
})

test('callback should be called', () => {
  const mockCallback = jest.fn()
  const component = create(<ProfileStatus status={'It-incubator'} updateStatus={mockCallback}/>)
  const instance = component.getInstance()
  // @ts-ignore
  instance.deactivateEditMode();
  expect(mockCallback.mock.calls.length).toBe(1)
})


test('input should be displayed in editMode instead of span', () => {
  const component = create(<ProfileStatus status={'It-incubator'}/>)
  const root = component.root
  let span = root.findByType('span')
  span.props.onDoubleClick()
  let input = root.findByType('input');
  expect(input.props.value).toBe('It-incubator')
})
