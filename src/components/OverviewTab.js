import React from "react";
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

const OverviewTab = ({
  packageData,
  selectedPackages,
  isRowExpanded,
  handleCheckboxChange,
  handleRowToggle,
  handleActivityToggle,
  handleWorkItemToggle,
}) => {
  return (
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
          {packageData.map((packageItem, packageIndex) => (
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
                  <Button onClick={() => handleRowToggle(packageIndex)}>
                    {isRowExpanded[packageIndex] ? "-" : "+"}
                  </Button>
                </TableCell>
              </TableRow>
              {isRowExpanded[packageIndex] && (
                <>
                  {packageItem.activities.map((activity, activityIndex) => (
                    <React.Fragment key={activity.id}>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            checked={selectedPackages.includes(packageItem.id)}
                            onChange={() =>
                              handleActivityToggle(packageIndex, activityIndex)
                            }
                          />
                        </TableCell>
                        <TableCell>{activity.name}</TableCell>
                        <TableCell>567.80</TableCell>
                        <TableCell>2,98,678</TableCell>
                        <TableCell>
                          <Button
                            onClick={() =>
                              handleActivityToggle(packageIndex, activityIndex)
                            }
                          >
                            {isRowExpanded[packageIndex]?.[activityIndex]
                              ? "-"
                              : "+"}
                          </Button>
                        </TableCell>
                      </TableRow>
                      {isRowExpanded[packageIndex]?.[activityIndex] && (
                        <>
                          {activity.workItems.map((workItem, workItemIndex) => (
                            <TableRow key={workItem.id}>
                              <TableCell>
                                <Checkbox
                                  checked={selectedPackages.includes(
                                    packageItem.id
                                  )}
                                  onChange={() =>
                                    handleWorkItemToggle(
                                      packageIndex,
                                      activityIndex,
                                      workItemIndex
                                    )
                                  }
                                />
                              </TableCell>
                              <TableCell>{workItem.name}</TableCell>
                              <TableCell>567.80</TableCell>
                              <TableCell>2,98,678</TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                          ))}
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default OverviewTab;
