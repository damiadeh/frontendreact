import { useContext, useEffect, useState } from 'react';
import Table from '../components/datatable/Table';
import { TableData } from '../interfaces/dtos';
import itemsData from '../datasource/items.json';
import formData from '../datasource/form.json';
import { Check, Clear } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Form from '../components/form/Form';
import { StoreContext, StoreProvider } from '../context/store';
import { SET_HIDDEN_TABLE_COLUMNS, SET_SELECTED_TABLE_DATA, SET_TABLE_DATA } from '../context/actions';

const Home = () => {
  const { state, dispatch } = useContext(StoreContext);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    if(width <= 1400) dispatch({type:SET_HIDDEN_TABLE_COLUMNS,payload:[10]})
    if(width <= 1200) dispatch({type:SET_HIDDEN_TABLE_COLUMNS,payload:[6,7,10]})
    if(width <= 900) dispatch({type:SET_HIDDEN_TABLE_COLUMNS,payload:[6,7,8,9,10]})
    if(width <= 700) dispatch({type:SET_HIDDEN_TABLE_COLUMNS,payload:[]})
    if(width > 1400) dispatch({type:SET_HIDDEN_TABLE_COLUMNS,payload:[]})
  },[width]);

  useEffect(() => {
    let tableData: TableData[] = [];
    for (const item of itemsData.collection.items) {
      let data = item.entity.data;
      tableData.push({
        id: data.id,
        type: data.type,
        nextReviewOn: data.nextReviewOn,
        number: data.number,
        summary: data.summary,
        isPrivate: {
          switchValue: data.isPrivate,
          displays: { true: () => <Check color="success" />, false: () => <Clear color="error" /> }
        },
        status: data.status,
        service: data.service,
        author: data.author,
        created: data.createdOn,
        updated: data.updatedOn
      })
    }
    dispatch({ type: SET_TABLE_DATA, payload: tableData })
  }, [])

  const onRowClick = (rowData: any) => {
    dispatch({ type: SET_SELECTED_TABLE_DATA, payload: rowData })
    dispatch({ type: SET_HIDDEN_TABLE_COLUMNS, payload: [6, 7, 8, 9, 10] })
  }

  const onCancelView = () => {
    dispatch({ type: SET_SELECTED_TABLE_DATA, payload: null })
    dispatch({ type: SET_HIDDEN_TABLE_COLUMNS, payload: [] })
  }
  
  return (
    <Grid container >
      <Grid item md={!!state.selectedData ? 6 : 12} xs={12} sx={{ display: { xs: !!state.selectedData ? "none" : "flex", md: "flex" } }}>
        <Table
          tableData={state.tableData}
          headingColumns={["", "", "", 'Type #', 'Summary', 'Private', 'Status', 'Service', 'Author', "Created", "Updated"]}
          onRowClick={onRowClick}
        />
      </Grid>
      {!!state.selectedData && <Grid item md={6} xs={12} data-testid="right-panel" className="right-grid">
        <Form data={formData} cancel={onCancelView} />
      </Grid>}
    </Grid>
  );
}

export default Home;