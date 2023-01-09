import {React,useEffect,useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function Table({data}) {
    // console.log(data);
    const columns = [
        { field: 'id', headerName: 'Year', width: 330},
        { field: 'Count', headerName: 'Count', width: 430 },
        { field: 'Prices', headerName: 'Prices', width: 480 },
        
      ];
      
      const [rows,setRows] = useState([]);
      var temp=[]
      useEffect(() => {
          if(data)   {
              data.areaPrices.map((element)=>{temp.push({id:element.year,Count:element.count,Prices:element.max})})
              console.log(data);}
            setRows(temp);
      }, [data])
      
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
    />
  </div>
  )
}
