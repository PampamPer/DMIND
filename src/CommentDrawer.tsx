import {
  Button,
  Drawer,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function CommentDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button
        variant="text"
        fullWidth
        sx={{
          backgroundColor: "#FDFDFE",
          color: "#767DFF",
          borderRadius: "50px",
          boxShadow: "0px 2px 5px rgba(25, 28, 50, 0.1)",
        }}
        onClick={toggleDrawer(true)}
      >
        ให้คะแนนความพึงพอใจ
      </Button>
      <Drawer open={open} anchor="bottom" onClose={toggleDrawer(false)}>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ position: "absolute", top: "18px", right: "18px" }}
        >
          <CloseIcon />
        </IconButton>
        <Stack px="20px" py='8px' gap="12px" alignItems="center">
          <div
            style={{
              width: "73px",
              height: "5px",
              backgroundColor: "#D9D9D9",
              borderRadius: "14px",
              marginBottom: '25px'
            }}
          ></div>
          <Typography variant="h6">แสดงความคิดเห็นเพิ่มเติม</Typography>
          <TextField
            label="ความคิดเห็น"
            multiline
            minRows={4}
            sx={{ width: "100%" }}
          ></TextField>
          <Button variant="contained" fullWidth>ส่งข้อมูล</Button>
        </Stack>
      </Drawer>
    </>
  );
}

export default CommentDrawer;
