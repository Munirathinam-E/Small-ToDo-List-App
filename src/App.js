import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { useState } from 'react';
import { AddItem } from './AddItem';
function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        item: "Play Cricket",
    },
    {
        id: 2,
        checked: false,
        item: "See Matheesha",
    },
    {
        id: 3,
        checked: false,
        item: "Message Pathirana",
    },
]);

const handleCheck = (id) => {
    const listItem = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);
    localStorage.setItem("todo_list",JSON.stringify(listItem))
};

const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
    localStorage.setItem("todo_list",JSON.stringify(listItem))
};

  return (
    <div className="App">
    <Header title="Matheesha Pathirana"/>
    <AddItem/>
    <Content 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
    />
    <Footer 
      length={items.length}
    />
    </div>
  );
}

export default App;
