import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState([
    { 
        id: 1, 
        checked: true,
        item: 'Milk'
    },
    {
        id: 2,
        checked: false,
        item: 'Eggs'
    },
    {
        id: 3,
        checked: false,
        item: 'Bread'
    },
]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <div className="App">
     <Header />
     <Content 
      items={items}
      setItems={setItems}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
     <Footer length={items.length}/>
    </div>
  );
}

export default App;
