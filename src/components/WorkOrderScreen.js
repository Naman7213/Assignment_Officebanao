// import React, { useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Checkbox from "@mui/material/Checkbox";
// import Button from "@mui/material/Button";
// import Drawer from "@mui/material/Drawer";
// import { styled } from "@mui/system";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";

// const StyledTable = styled(Table)({
//   borderCollapse: "collapse",
//   width: "100%",
//   border: "1px solid #ddd",
//   "& th, td": {
//     borderBottom: "1px solid #ddd",
//     padding: "8px",
//     textAlign: "left",
//   },
//   "& th": {
//     backgroundColor: "#f2f2f2",
//   },
// });

// const Header = styled("div")({
//   display: "flex",
//   justifyContent: "space-between",
//   padding: "10px",
//   color: "#333",
//   alignItems: "center",
// });

// const ContentContainer = styled("div")({
//   marginTop: "20px",
//   marginLeft: "20px",
//   marginRight: "20px",
// });

// const DrawerContent = styled("div")({
//   width: "400px", // Adjust the width as needed
//   padding: "20px",
// });

// const FieldContainer = styled("div")({
//   marginBottom: "15px",
// });

// const StyledTextField = styled(TextField)({
//   width: "100%",
//   marginBottom: "15px",
//   borderRadius: "8px", // Set border-radius
// });

// const WorkOrderScreen = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [selectedPackages, setSelectedPackages] = useState([]);
//   const [isRowExpanded, setRowExpanded] = useState({});
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [selectedClient, setSelectedClient] = useState("");
//   const [selectedCommencementDate, setSelectedCommencementDate] = useState("");
//   const [selectedCompletionDate, setSelectedCompletionDate] = useState("");
//   const [selectedRfqCode, setSelectedRfqCode] = useState("");

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   const handleCheckboxChange = (packageId) => {
//     const updatedPackages = selectedPackages.includes(packageId)
//       ? selectedPackages.filter((id) => id !== packageId)
//       : [...selectedPackages, packageId];
//     setSelectedPackages(updatedPackages);
//   };

//   const handleRowToggle = (rowNumber) => {
//     setRowExpanded((prevExpanded) => ({
//       ...prevExpanded,
//       [rowNumber]: !prevExpanded[rowNumber],
//     }));
//   };

//   const handleSaveClick = () => {
//     setDrawerOpen(true);
//   };

//   const handleCloseDrawer = () => {
//     setDrawerOpen(false);
//   };

//   const handleDoneClick = () => {
//     console.log("Client Name:", selectedClient);
//     console.log("Date of Commencement:", selectedCommencementDate);
//     console.log("Date of Completion:", selectedCompletionDate);
//     console.log("RFQ Code:", selectedRfqCode);
//   };

//   const packageData = [
//     { id: 1, name: "Civil1" },
//     { id: 2, name: "Civil2" },
//     // Add more packages as needed
//   ];

//   return (
//     <ContentContainer>
//       <Header>
//         <div>Create WorkOrder</div>
//         <Button variant="contained" color="primary" onClick={handleSaveClick}>
//           Save
//         </Button>
//       </Header>

//       <Tabs
//         value={tabValue}
//         onChange={handleTabChange}
//         style={{ marginBottom: "20px" }}
//       >
//         <Tab label="Overview" />
//         <Tab label="Other" />
//       </Tabs>

//       {tabValue === 0 && (
//         <TableContainer>
//           <StyledTable>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Select</TableCell>
//                 <TableCell>Packages</TableCell>
//                 <TableCell>Rate (in sqft)</TableCell>
//                 <TableCell>Total</TableCell>
//                 <TableCell></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {packageData.map((packageItem, index) => (
//                 <React.Fragment key={packageItem.id}>
//                   <TableRow>
//                     <TableCell>
//                       <Checkbox
//                         checked={selectedPackages.includes(packageItem.id)}
//                         onChange={() => handleCheckboxChange(packageItem.id)}
//                       />
//                     </TableCell>
//                     <TableCell>{packageItem.name}</TableCell>
//                     <TableCell>567.80</TableCell>
//                     <TableCell>2,98,678</TableCell>
//                     <TableCell>
//                       <Button onClick={() => handleRowToggle(index)}>
//                         {isRowExpanded[index] ? "-" : "+"}
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                   {isRowExpanded[index] && (
//                     <TableRow>
//                       <TableCell colSpan={5}>
//                         <StyledTable>
//                           <TableBody>
//                             <TableRow>
//                               <TableCell>
//                                 <Checkbox
//                                   checked={selectedPackages.includes(
//                                     packageItem.id
//                                   )}
//                                   onChange={() =>
//                                     handleCheckboxChange(packageItem.id)
//                                   }
//                                 />
//                               </TableCell>
//                               <TableCell>{packageItem.name}</TableCell>
//                               <TableCell>567.80</TableCell>
//                               <TableCell>2,98,678</TableCell>
//                               <TableCell>
//                                 <Button onClick={() => handleRowToggle(index)}>
//                                   {isRowExpanded[index] ? "-" : "+"}
//                                 </Button>
//                               </TableCell>
//                             </TableRow>
//                           </TableBody>
//                         </StyledTable>
//                       </TableCell>
//                     </TableRow>
//                   )}
//                 </React.Fragment>
//               ))}
//             </TableBody>
//           </StyledTable>
//         </TableContainer>
//       )}

//       {tabValue === 1 && <div>Hello World!</div>}

//       <Drawer anchor="right" open={isDrawerOpen} onClose={handleCloseDrawer}>
//         <DrawerContent>
//           <h2>Work Order Details</h2>

//           <FieldContainer>
//             <label>Client Name:</label>
//             <div>
//               <StyledTextField
//                 select
//                 variant="outlined"
//                 fullWidth
//                 native={false}
//                 value={selectedClient}
//                 onChange={(e) => setSelectedClient(e.target.value)}
//               >
//                 <MenuItem value="A">A</MenuItem>
//                 <MenuItem value="B">B</MenuItem>
//                 <MenuItem value="C">C</MenuItem>
//               </StyledTextField>
//             </div>
//           </FieldContainer>

//           <FieldContainer>
//             <label>Date of Commencement:</label>
//             <div>
//               <StyledTextField
//                 type="date"
//                 variant="outlined"
//                 fullWidth
//                 value={selectedCommencementDate}
//                 onChange={(e) => setSelectedCommencementDate(e.target.value)}
//               />
//             </div>
//           </FieldContainer>

//           <FieldContainer>
//             <label>Date of Completion:</label>
//             <div>
//               <StyledTextField
//                 type="date"
//                 variant="outlined"
//                 fullWidth
//                 value={selectedCompletionDate}
//                 onChange={(e) => setSelectedCompletionDate(e.target.value)}
//               />
//             </div>
//           </FieldContainer>

//           <FieldContainer>
//             <label>RFQ Code:</label>
//             <div>
//               <StyledTextField
//                 variant="outlined"
//                 fullWidth
//                 value={selectedRfqCode}
//                 onChange={(e) => setSelectedRfqCode(e.target.value)}
//               />
//             </div>
//           </FieldContainer>

//           {/* Done button */}
//           <Button variant="contained" color="primary" onClick={handleDoneClick}>
//             Done
//           </Button>
//         </DrawerContent>
//       </Drawer>
//     </ContentContainer>
//   );
// };

// export default WorkOrderScreen;

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const StyledTable = styled(Table)({
  borderCollapse: "collapse",
  width: "100%",
  border: "1px solid #ddd",
  "& th, td": {
    borderBottom: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  },
  "& th": {
    backgroundColor: "#f2f2f2",
  },
});

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  color: "#333",
  alignItems: "center",
});

const ContentContainer = styled("div")({
  marginTop: "20px",
  marginLeft: "20px",
  marginRight: "20px",
});

const DrawerContent = styled("div")({
  width: "400px", // Adjust the width as needed
  padding: "20px",
});

const FieldContainer = styled("div")({
  marginBottom: "15px",
});

const StyledTextField = styled(TextField)({
  width: "100%",
  marginBottom: "15px",
  borderRadius: "8px", // Set border-radius
});

const WorkOrderScreen = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [isRowExpanded, setRowExpanded] = useState({});
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedCommencementDate, setSelectedCommencementDate] = useState("");
  const [selectedCompletionDate, setSelectedCompletionDate] = useState("");
  const [selectedRfqCode, setSelectedRfqCode] = useState("");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCheckboxChange = (packageId) => {
    const updatedPackages = selectedPackages.includes(packageId)
      ? selectedPackages.filter((id) => id !== packageId)
      : [...selectedPackages, packageId];
    setSelectedPackages(updatedPackages);
  };

  const handleRowToggle = (rowNumber) => {
    setRowExpanded((prevExpanded) => ({
      ...prevExpanded,
      [rowNumber]: !prevExpanded[rowNumber],
    }));
  };

  const handleSaveClick = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleDoneClick = () => {
    // Print selected values to console
    console.log("Client Name:", selectedClient);
    console.log("Date of Commencement:", selectedCommencementDate);
    console.log("Date of Completion:", selectedCompletionDate);
    console.log("RFQ Code:", selectedRfqCode);

    // Clear the fields
    setSelectedClient("");
    setSelectedCommencementDate("");
    setSelectedCompletionDate("");
    setSelectedRfqCode("");
  };

  const packageData = [
    { id: 1, name: "Civil1" },
    { id: 2, name: "Civil2" },
    // Add more packages as needed
  ];

  return (
    <ContentContainer>
      <Header>
        <div>Create WorkOrder</div>
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Header>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        style={{ marginBottom: "20px" }}
      >
        <Tab label="Overview" />
        <Tab label="Other" />
      </Tabs>

      {tabValue === 0 && (
        <TableContainer>
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Packages</TableCell>
                <TableCell>Rate (in sqft)</TableCell>
                <TableCell>Total</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {packageData.map((packageItem, index) => (
                <React.Fragment key={packageItem.id}>
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        checked={selectedPackages.includes(packageItem.id)}
                        onChange={() => handleCheckboxChange(packageItem.id)}
                      />
                    </TableCell>
                    <TableCell>{packageItem.name}</TableCell>
                    <TableCell>567.80</TableCell>
                    <TableCell>2,98,678</TableCell>
                    <TableCell>
                      <Button onClick={() => handleRowToggle(index)}>
                        {isRowExpanded[index] ? "-" : "+"}
                      </Button>
                    </TableCell>
                  </TableRow>
                  {isRowExpanded[index] && (
                    <TableRow>
                      <TableCell colSpan={5}>
                        <StyledTable>
                          <TableBody>
                            <TableRow>
                              <TableCell>
                                <Checkbox
                                  checked={selectedPackages.includes(
                                    packageItem.id
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(packageItem.id)
                                  }
                                />
                              </TableCell>
                              <TableCell>{packageItem.name}</TableCell>
                              <TableCell>567.80</TableCell>
                              <TableCell>2,98,678</TableCell>
                              <TableCell>
                                <Button onClick={() => handleRowToggle(index)}>
                                  {isRowExpanded[index] ? "-" : "+"}
                                </Button>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </StyledTable>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      )}

      {tabValue === 1 && <div>Hello World!</div>}

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleCloseDrawer}>
        <DrawerContent>
          <h2>Work Order Details</h2>

          <FieldContainer>
            <label>Client Name:</label>
            <div>
              <StyledTextField
                select
                variant="outlined"
                fullWidth
                native={false}
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
                <MenuItem value="C">C</MenuItem>
              </StyledTextField>
            </div>
          </FieldContainer>

          <FieldContainer>
            <label>Date of Commencement:</label>
            <div>
              <StyledTextField
                type="date"
                variant="outlined"
                fullWidth
                value={selectedCommencementDate}
                onChange={(e) => setSelectedCommencementDate(e.target.value)}
              />
            </div>
          </FieldContainer>

          <FieldContainer>
            <label>Date of Completion:</label>
            <div>
              <StyledTextField
                type="date"
                variant="outlined"
                fullWidth
                value={selectedCompletionDate}
                onChange={(e) => setSelectedCompletionDate(e.target.value)}
              />
            </div>
          </FieldContainer>

          <FieldContainer>
            <label>RFQ Code:</label>
            <div>
              <StyledTextField
                variant="outlined"
                fullWidth
                value={selectedRfqCode}
                onChange={(e) => setSelectedRfqCode(e.target.value)}
              />
            </div>
          </FieldContainer>

          {/* Done button */}
          <Button variant="contained" color="primary" onClick={handleDoneClick}>
            Done
          </Button>
        </DrawerContent>
      </Drawer>
    </ContentContainer>
  );
};

export default WorkOrderScreen;
