import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '', width:250 },
  { field: 'slug', headerName: 'slug', width:250, description: 'slug', },
  { field: 'b_name', headerName: 'b_name', width:250, description: 'b_name', },
  {
    field: 'vb_name', headerName: 'vb_name', description: 'vb_name', width: 160,
  },
];

const rows = [
  { id: "1.", slug: 'Snow', b_name: 'Jon', vb_name: 35 },
  { id: "2.", slug: 'Lannister', b_name: 'Cersei', vb_name: 42 },
  { id: "3.", slug: 'Lannister', b_name: 'Jaime', vb_name: 45 },
  { id: "4.", slug: 'Stark', b_name: 'Arya', vb_name: 16 },
  { id: "5.", slug: 'Targaryen', b_name: 'Daenerys', vb_name: 12 },
  { id: "6.", slug: 'Melisandre', b_name: 'null', vb_name: 150 },
  { id: "7.", slug: 'Clifford', b_name: 'Ferrara', vb_name: 44 },
  { id: "8.", slug: 'Frances', b_name: 'Rossini', vb_name: 36 },
  { id: "9.", slug: 'Roxie', b_name: 'Harvey', vb_name: 65 },
];

export default function DataTable({data}) {
  // console.log(data,'d')
  return (
    <div style={{ height: 400, width: '100%',marginTop:12 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
