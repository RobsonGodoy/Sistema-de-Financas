import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

const App = () =>{
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  useEffect(() =>{
    setFilteredList (filterListByMonth(list,currentMonth) );
  }, [list, currentMonth]);
  
  return (
    <C.Container>
       <C.Header>
        <C.HeaderText> Sistema Financeiro <br/>Junex Enterprises LTDA</C.HeaderText>
       </C.Header>
       <C.Body>
       
       {/* Área de informações*/}

       {/* Área de inserção*/}

       <TableArea list={filteredList}/>

       </C.Body>
    </C.Container>
  );
}

export default App;