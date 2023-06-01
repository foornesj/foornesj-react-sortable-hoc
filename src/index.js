import React, { Component, forwardRef } from 'react';
import { createRoot } from 'react-dom/client';
import { sortableContainer, sortableElement } from '../Sortable/index';
import { arrayMoveImmutable as arrayMove } from 'array-move';

const SortableItem = sortableElement(forwardRef(({ value }, ref) => {
  return <li ref={ref}>{value}</li>
})
);

const SortableContainer = sortableContainer(forwardRef(({ children }, ref) => {
  return <ul ref={ref}>{children}</ul>;
}));

class App extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <SortableContainer onSortEnd={this.onSortEnd}>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value}/>
        ))}
      </SortableContainer>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);