import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
const App = () =>{
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [exoense, setExpense] = useState(0);
  
  useEffect(() =>{
    setFilteredList (filterListByMonth(list,currentMonth) );
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }
  
  return (
    <C.Container>
       <C.Header>
        <C.HeaderText> Sistema Financeiro <br/>Junex Enterprises LTDA</C.HeaderText>
       </C.Header>
       <C.Body>
       
       <InfoArea
        currentMonth = {currentMonth}
        onMonthChange = {handleMonthChange}
        income = {income}
        />

       {/* Área de inserção*/}

       <TableArea list={filteredList}/>

       </C.Body>
    </C.Container>
  );
}

export default App;