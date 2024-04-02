import "./App.css";
import { Stack } from "@mui/material";
import CircularWithValueLabel from "./CircularProgress";

function Loading() {
  return (
    <div className="overlay">
      <Stack
        px="64px"
        py="32px"
        gap="4px"
        alignItems="center"
        sx={{ backgroundColor: "#fff", borderRadius: "25px" }}
      >
        <CircularWithValueLabel />
      </Stack>
    </div>
  );
}

export default Loading;
