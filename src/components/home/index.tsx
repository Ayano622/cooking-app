import { Box, Paper } from "@mui/material";
import "./index.css";

export default function Home() {
  return (
    <>
      <body>
        <div>
          ここがホームのページになります。ログインした後に見られるよ。
          <br />
          私の作った料理の写真が並んでいる。
          <br />
          <ul></ul>
          <div className="dishes">
            <Paper>
              <Box>料理</Box>
            </Paper>
          </div>
        </div>
      </body>
    </>
  );
}
