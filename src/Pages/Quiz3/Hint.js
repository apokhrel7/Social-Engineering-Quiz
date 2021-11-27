import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const HintButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  borderRadius: 8,
  maxWidth: "600px",
  maxHeight: "35px",
  minWidth: "600px",
  minHeight: "35px",
  "&:hover": {
    backgroundColor: purple[700],
    padding: "10px",
    boxShadow: "4px 4px lightblue",
  },
}));
export default function Hint() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <HintButton
        onClick={handleOpen}
        variant="contained"
        size="medium"
      >
        Need some help? Click here for a Hint!
      </HintButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Hint:
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Sometimes there are very subtle differences between a real page
              and a fake one like some words may not be what they seem!{" "}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
