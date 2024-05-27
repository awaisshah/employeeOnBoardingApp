import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { List, ListItem, ListItemText } from "@mui/material";

export default function ConfirmationModal({ values }: any) {
  console.log("Confirmation Values: ", values);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    handleClickOpen();
  }, []);

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Confirmation Model
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm to proceed ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <List>
              <ListItem>
                <ListItemText
                  primary="First Name"
                  secondary={values.firstName}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={values.lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={values.email} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Organization"
                  secondary={values.organizationField.label}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Department"
                  secondary={values.departmentField.label}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Division"
                  secondary={values.divisionField.label}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Daily Spending Limit"
                  secondary={values.dailySpendingLimit}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Give Login"
                  secondary={values.giveLogin ? "Yes" : "No"}
                />
              </ListItem>
              <ListItem>
                {values?.photo && (
                  <ListItemText
                    primary="Photo"
                    secondary={
                      <a
                        href={URL.createObjectURL(values?.photo)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {values.photo.name}
                      </a>
                    }
                  />
                )}
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
