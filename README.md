# react-easy-grid-dnd

## Demo
https://codesandbox.io/s/react-easy-grid-dnd-nxhcnq

## Installation

```javascript
npm install react-easy-grid-dnd
```

## Usage

```javascript
import React from 'react';
import Grid from 'react-easy-grid-dnd';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ]);

  const Element = ({ item }) => <div>id: {item.id}</div>;

  return (
    <div className="App">
      <Grid
        items={items}
        onReorder={(data) => setItems([...data])}
        render={(item) => <Element item={item} />}
      />
    </div>
  );
}
```
 
