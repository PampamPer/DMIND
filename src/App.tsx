import "./App.css";
import { Stack, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h3">ผลการประเมินของคุณ</Typography>
      <Stack spacing={1}>
        {/* <div id="cardResult"> */}
        <Typography variant="h4">ความเสี่ยงโรคซึมเศร้าระดับ</Typography>
        <div className="slider-container">
          <input type="range" min={0} max={100} value={50} className="slider" />
        </div>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">ต่ำ</Typography>
          <Typography variant="body2">ปานกลาง</Typography>
          <Typography variant="body2">รุนแรง</Typography>
        </Stack>
        {/* </div> */}
      </Stack>
      <div id="resultText">
        <Typography variant="h5">เยี่ยมมาก</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab deleniti
          id asperiores voluptates recusandae sapiente sunt omnis officia cum ad
          dolore harum, culpa iusto placeat nostrum itaque et explicabo ipsum
          consequuntur repellendus ducimus error dolor. Temporibus, illum.
          Magni, consequuntur blanditiis ea harum adipisci a quam modi nesciunt
          repudiandae expedita quis.
        </Typography>
      </div>
    </>
  );
}

export default App;
