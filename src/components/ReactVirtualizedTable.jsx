import React, { useState, useEffect } from "react"; // Ensure these are imported correctly
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import { fetchQuery } from "./api"; // Ensure this path is correct
import InputForm from "./InputForm";

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent(columns) {
  return (
    <TableRow>
      {columns.slice(1).map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width || 150 }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row, columns) {
  return (
    <React.Fragment>
      {columns.slice(1).map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query) => {
    setLoading(true);
    try {
      const result = await fetchQuery(query);
      const key = Object.keys(result)[0];
      const players = result[key];

      if (players.length > 0) {
        const derivedColumns = Object.keys(players[0]).map((key) => ({
          width: 150,
          label: key.charAt(0).toUpperCase() + key.slice(1),
          dataKey: key,
          numeric: typeof players[0][key] === "number",
        }));
        setColumns(derivedColumns);
      }

      setData(players);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class='flex flex-col items-center w-full'>
      <div>
        <Paper style={{ height: 600, width: 1200 }}>
          {loading ? (
            <span className="loading loading-ring loading-lg"></span>
          ) : (
            <TableVirtuoso
              data={data}
              components={VirtuosoTableComponents}
              fixedHeaderContent={() => fixedHeaderContent(columns)}
              itemContent={(index, row) => rowContent(index, row, columns)}
            />
          )}
        </Paper>
      </div>
      <div class="mt-6">
        <InputForm onSubmit={fetchData} />
      </div>
    </div>
  );
}
