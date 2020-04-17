'use strict';


class Storage{
    constructor(arr){
        this.items = arr;
    }
    getItems(){
        return this.items;
    }
    addItem(item){
        this.items.push(item);
        return this.items;
    }
    removeItem(item){
        for(let el of this.items){
            if (el === item){
                const removeElement = this.items.indexOf(el);
                this.items.splice(removeElement,1);
            }
        }
    }
}


const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items= storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]