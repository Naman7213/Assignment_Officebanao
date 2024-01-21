import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OverviewTab from "./OverviewTab";
import OtherTab from "./OtherTab";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const packageData = [
  {
    id: 1,
    name: "Civil1",
    activities: [
      {
        id: 101,
        name: "Activity1",
        workItems: [
          { id: 1001, name: "WorkItem1" },
          { id: 1002, name: "WorkItem2" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Civil2",
    activities: [
      {
        id: 102,
        name: "Activity1",
        workItems: [
          { id: 1003, name: "WorkItem1" },
          { id: 1004, name: "WorkItem2" },
        ],
      },
    ],
  },
  // Add more packages as needed
];
const DrawerContent = styled("div")({
  width: "400px",
  padding: "20px",
});
const FieldContainer = styled("div")({
  marginBottom: "15px",
});
const ContentContainer = styled("div")({
  marginTop: "20px",
  marginLeft: "20px",
  marginRight: "20px",
});
const StyledTextField = styled(TextField)({
  width: "100%",
  marginBottom: "15px",
  borderRadius: "8px",
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

  const handleRowToggle = (packageIndex) => {
    setRowExpanded((prevExpanded) => ({
      ...prevExpanded,
      [packageIndex]: !prevExpanded[packageIndex],
    }));
  };

  const handleActivityToggle = (packageIndex, activityIndex) => {
    setRowExpanded((prevExpanded) => {
      const newExpanded = { ...prevExpanded };
      newExpanded[packageIndex] = {
        ...newExpanded[packageIndex],
        [activityIndex]: !newExpanded[packageIndex]?.[activityIndex],
      };
      return newExpanded;
    });
  };

  const handleWorkItemToggle = (packageIndex, activityIndex, workItemIndex) => {
    setRowExpanded((prevExpanded) => {
      const newExpanded = { ...prevExpanded };
      newExpanded[packageIndex] = {
        ...newExpanded[packageIndex],
        [activityIndex]: {
          ...newExpanded[packageIndex]?.[activityIndex],
          [workItemIndex]:
            !newExpanded[packageIndex]?.[activityIndex]?.[workItemIndex],
        },
      };
      return newExpanded;
    });
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
  const Header = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    color: "#333",
    alignItems: "center",
  });

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
        <OverviewTab
          packageData={packageData}
          selectedPackages={selectedPackages}
          isRowExpanded={isRowExpanded}
          handleCheckboxChange={handleCheckboxChange}
          handleRowToggle={handleRowToggle}
          handleActivityToggle={handleActivityToggle}
          handleWorkItemToggle={handleWorkItemToggle}
        />
      )}

      {tabValue === 1 && <OtherTab />}

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
