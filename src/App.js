import React from 'react'
import InventoryMainInterface from './inventoryMainInterface/inventoryMainInterface';

function App() {
  const arrayOfItems_test = [
    { url: "https://img.icons8.com/emoji/48/undefined/dagger.png", item_value: "rare", description: "1" },
    { url: "https://img.icons8.com/plasticine/100/undefined/staff-stick.png", item_value: "usual", description: "2" }
  ];
  const lang_bug = 'Bug'
  return (
    <InventoryMainInterface items_list = {arrayOfItems_test} label = {lang_bug}></InventoryMainInterface>
  );
}

export default App;