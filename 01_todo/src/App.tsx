import { useState } from 'react';
import * as C from './App.styles'
import AddArea from './components/AddArea';
import ListItem from './components/ListItem';
import { Item } from './types/Item'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list, {id: uuidv4(), name: taskName, done: false}]
    setList(newList);
  }

  const handleRemoveTask = (item: Item) => {
    let newList = list.filter(element => element.id !== item.id)
    setList(newList)
  }

  const handleChekedStatus = (item: Item) => {
    let updatedList = list.map(i => {
      if(item.id === i.id) {
        return {...i, done: item.done}
      }
      return i
    });
    setList(updatedList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item) => 
          <ListItem key={item.id} item={item} handleChekedStatus={handleChekedStatus} handleRemoveTask={handleRemoveTask} />
        )}

      </C.Area>
    </C.Container>
  )
}

export default App;