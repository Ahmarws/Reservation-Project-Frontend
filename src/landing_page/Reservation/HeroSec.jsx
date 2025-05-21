import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./HeroSec.css";

const theme = createTheme({
  palette: {
    DataGrid: {
      
      bg: "transparent",
      pinnedBg: "#ffffff",
      headerBg: "transparent",
      header:"bold",
      // rowBg: "transparent",
      borderColor: "transparent",
    },
  },
});

const initialRows = [
  {
    id: 1,
    submittedDate: "2025-05-05",
    group: "Group A",
    sport: "Football",
    field: "Field 1",
    date: "2025-05-06",
    time: "08:00–11:00",
    status: "Pending",
  },
  {
    id: 2,
    submittedDate: "2025-05-05",
    group: "Group A",
    sport: "Football",
    field: "Field 1",
    date: "2025-05-06",
    time: "08:00–11:00",
    status: "Approved",
  },
  {
    id: 3,
    submittedDate: "2025-05-05",
    group: "Group A",
    sport: "Football",
    field: "Field 1",
    date: "2025-05-06",
    time: "08:00–11:00",
    status: "Rejected",
  },
  {
    id: 4,
    submittedDate: "2025-05-05",
    group: "Group A",
    sport: "Football",
    field: "Field 1",
    date: "2025-05-06",
    time: "08:00–11:00",
    status: "Cancelled",
  },
  {
    id: 5,
    submittedDate: "2025-05-05",
    group: "Group A",
    sport: "Football",
    field: "Field 1",
    date: "2025-05-06",
    time: "08:00–11:00",
    status: "Cancelled",
  },
  {
    id: 6,
    submittedDate: "2025-05-05",
    group: "Group A",
    sport: "Football",
    field: "Field 1",
    date: "2025-05-06",
    time: "08:00–11:00",
    status: "Cancelled",
  },
  {
    id: 7,
    submittedDate: "2025-05-05",
    group: "Group A",
    sport: "Football",
    field: "Field 1",
    date: "2025-05-06",
    time: "08:00–11:00",
    status: "Cancelled",
  },
  {
    id: 8,
    submittedDate: "2025-05-05",
    group: "Group A",
    sport: "Football",
    field: "Field 1",
    date: "2025-05-06",
    time: "08:00–11:00",
    status: "Cancelled",
  },
  {
    id: 9,
    submittedDate: "2025-05-05",
    group: "Group A",
    sport: "Football",
    field: "Field 1",
    date: "2025-05-06",
    time: "08:00–11:00",
    status: "Cancelled",
  },

];

const Hero = () => {
  const [rows, setRows] = useState(initialRows);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  const handleStatusChange = (newStatus) => {
    const updated = rows.map((row) =>
      row.id === selectedId ? { ...row, status: newStatus } : row
    );
    setRows(updated);
    handleMenuClose();
  };

  const columns = [
    { field: "submittedDate", headerName: "Submitted Date", flex: 1 },
    { field: "group", headerName: "Group", flex: 1 },
    { field: "sport", headerName: "Sport", flex: 1 },
    { field: "field", headerName: "Field", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "time", headerName: "Time", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        let bgColor = "";
        let textColor = "";

        switch (params.value) {
          case "Approved":
            bgColor = "#ccffcc";
            textColor = "green";
            break;
          case "Rejected":
            bgColor = "#ffcccc";
            textColor = "red";
            break;
          case "Pending":
            bgColor = "#fff4cc";
            textColor = "#d9a400";
            break;
          case "Cancelled":
            bgColor = "#e0e0e0";
            textColor = "#666";
            break;
          default:
            bgColor = "#f0f0f0";
            textColor = "#000";
        }

        return (
          <span
            style={{
              backgroundColor: bgColor,
              color: textColor,
              padding: "6px 10px ",
              borderRadius: "50px",
              fontWeight: "400",
              fontSize: "0.80rem",
              // display: "inline-block",
              // maxHeight: "100%",
              minWidth: "60%",
              textAlign: "center",
             
            }}
          >
            {params.value}
          </span>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton onClick={(e) => handleMenuOpen(e, params.row.id)}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          sx={{
            border: 0,
            boxShadow: 0,
            '.MuiDataGrid-columnHeaderTitle': {
         fontWeight: 'bold',
        //  overflow: 'visible', // Optional, to prevent text from overflowing
       },
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "&.MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-row": {
              marginTop: "0.5%",
              backgroundColor: "#ffffff",
              borderRadius: ".5%",
            },
            margin: ".5% 7%",
          }}
          rows={rows}
          columns={columns}
          pagination={false} 
        />
      </ThemeProvider>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleStatusChange("Approved")}>Approve</MenuItem>
        <MenuItem onClick={() => handleStatusChange("Rejected")}>Reject</MenuItem>
        <MenuItem onClick={() => handleStatusChange("Cancelled")}>Cancel</MenuItem>
      </Menu>
    </div>
  );
};

export default Hero;
