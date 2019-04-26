<script>
  import TodoList from './components/TodoList.svelte'

  const todos = [
    { title: 'Buy some more milk', done: true },
    { title: 'Make great apps', done: false },
    { title: 'World peace', done: false },
  ]
</script>

<TodoList todos={todos} />
