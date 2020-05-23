import React from "react";
import { RecoilRoot } from "recoil";
import FoodTable from './components/DenseTable'
import CreateRowForm from './components/CreateRowForm';

const App = () => {
  return (
    <RecoilRoot>
      <CreateRowForm />
      <FoodTable />
    </RecoilRoot>
  );
}

export default App;