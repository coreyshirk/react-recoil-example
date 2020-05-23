import React from "react";
import { useRecoilState } from "recoil";
import { Button } from '@material-ui/core';
import { listData } from '../listData';


const CreateRowForm = () => {
  const [list, setList] = useRecoilState(listData);

  const addRow = () => {
    setList([...list, { name: 'Burger', calories: 100, fat: 10, carbs: 10, protein: 20 }])
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => addRow()}>
        Add a row
      </Button>
    </div>
  );
};

export default CreateRowForm;