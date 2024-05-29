import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { fetchQuery } from "../src/components/api.js"; // Ensure this path is correct
import InputForm from "../src/components/InputForm.jsx";

const LoadingIndicator = () => (
  <Box sx={{ width: '100%' }}>
    <LinearProgress />
  </Box>
);

export default function ReactMaterialUITable() {
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
        setColumns(derivedColumns.slice(1));
      }

      setData(players);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div>
        <Paper style={{ height: 600, width: 1200 }}>
          {loading ? (
            <LoadingIndicator />
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.dataKey}
                        align={column.numeric ? "right" : "left"}
                        style={{ width: column.width || 150 }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {columns.map((column) => (
                        <TableCell
                          key={column.dataKey}
                          align={column.numeric ? "right" : "left"}
                        >
                          {row[column.dataKey]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </div>
      <div className="mt-6">
        <InputForm onSubmit={fetchData} />
      </div>
    </div>
  );
}
