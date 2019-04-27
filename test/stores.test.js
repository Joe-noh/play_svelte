import { todos } from '../src/stores.js'
import { get } from 'svelte/store'

describe('todos store', () => {
  describe('initial value', () => {
    test('is an empty array', () => {
      expect(get(todos)).toEqual([])
    })
  })

  describe('manipulations', () => {
    beforeEach(() => {
      todos.clear()
    })

    test('add', () => {
      todos.add('Something has to be done')

      const [added] = get(todos)

      expect(added.done).toBe(false)
      expect(added.title).toBe('Something has to be done')
      expect(added.id).toEqual(expect.any(String))
    })

    test('toggle', () => {
      todos.add('Something you must toggle')
      todos.toggle(get(todos)[0].id)

      const [toggled] = get(todos)

      expect(toggled.done).toBe(true)
    })

    test('remove', () => {
      todos.add('Buy something great')
      todos.add('Buy something good')

      expect(get(todos).length).toEqual(2)

      todos.remove(get(todos)[0].id)

      expect(get(todos).length).toEqual(1)
    })

    test('clear', () => {
      todos.add('Buy something great')
      todos.add('Buy something good')

      todos.clear()

      expect(get(todos)).toEqual([])

    })
  })
})
