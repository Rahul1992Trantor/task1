import React from 'react';
import './App.css';
// import Table from './components/table'
import Closure from './components/Closure';
import Rahul from './components/HoCs/rahul';
import Simran from './components/HoCs/simran';




function App() {

// const columns = React.useMemo(
//   () => [
//     {
//       Header: "Fiserv",
//       Footer: "Footer 1",
//       columns: [
//         {
//           Header: "Mech",
//           accessor: "firstcolumn"
//         },
//         {
//           Header: "Elec",
//           accessor: "secondcolumn"
//         }
//       ]
//     },
//     {
//       Header: "Barclys",
//       Footer: "Footer 2",
//       columns: [
//         {
//           accessor: "thirdcolumn"
//         }
//       ]
//     }
//   ],
//   []
// );

// const data = React.useMemo(
//   () => [
//     {
//       firstcolumn: "Row 1 Column 1",
//       secondcolumn: "Row 1 Column 2",
//       thirdcolumn: "Row 1 Column 3"
//     },
//     {
//       firstcolumn: "Row 2 Column 1",
//       secondcolumn: "Row 2 Column 2",
//       thirdcolumn: "Row 2 Column 3"
//     }
//   ],
//   []
// );

  return (
    <div className="App">
      {/* <h1 align="center">table Task</h1>
      <Table columns={columns} data={data} />;
     */}

     {/* <Closure/> */}
   <Simran/>
    </div>
  );
}

export default App;
