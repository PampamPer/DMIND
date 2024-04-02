import "./App.css";
import { Stack, Typography, Button } from "@mui/material";

function App() {
  return (
    <>
      <Stack gap="12px" alignItems='center'>
        <div className="background">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
        </div>
        <Typography variant="h3">ผลการประเมินของคุณ</Typography>
        <Stack
          gap="8px"
          p="12px"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            borderRadius: "25px",
          }}
        >
          <Stack
            gap="16px"
            px="40px"
            py="16px"
            alignItems="center"
            sx={{ backgroundColor: "#CEEEDC", borderRadius: "25px" }}
          >
            {/* <div id="cardResult"> */}
            <Typography variant="h4">ความเสี่ยงโรคซึมเศร้าระดับ</Typography>
            <Stack
              px="8px"
              py="4px"
              style={{
                backgroundColor: "#60C78F",
                width: "fit-content",
                borderRadius: "25px",
              }}
            >
              <Typography variant="h6">ต่ำ</Typography>
            </Stack>
            {/* <div className="slider-container"> */}
            <input
              type="range"
              min={0}
              max={100}
              value={50}
              className="slider"
              id="slider"
            />
            {/* </div> */}
            <Stack direction="row" justifyContent="space-between" width="100%">
              <Typography variant="body2">ต่ำ</Typography>
              <Typography variant="body2">ปานกลาง</Typography>
              <Typography variant="body2">รุนแรง</Typography>
            </Stack>
            {/* </div> */}
          </Stack>
          <Stack px="12px" py="4px">
            <Typography variant="h6">
              เยี่ยมมาก <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              reprehenderit dolor earum temporibus iusto animi necessitatibus
              aliquid officia ad ducimus.
            </Typography>
          </Stack>
        </Stack>
        <Button
          variant="text"
          fullWidth
          sx={{
            backgroundColor: "#FDFDFE",
            color: "#767DFF",
            borderRadius: "50px",
            boxShadow: "0px 2px 5px rgba(25, 28, 50, 0.1)",
          }}
        >
          ให้คะแนนความพึงพอใจ
        </Button>
        
      </Stack>
    </>
  );
}

export default App;
