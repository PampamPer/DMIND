import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number; label: string }
) {
  const { value, label } = props;
  return (
    <Stack gap="4px" alignItems="center">
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" value={value} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="subtitle2">{label}</Typography>
    </Stack>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);
  const [label, setLabel] = React.useState("กำลังประมวลผล");

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setLabel("ประมวลผลสำเร็จ");
          return 0;
        } else {
          setLabel("กำลังประมวลผล");
          return prevProgress + 10;
        }
      });
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} label={label} />;
}
