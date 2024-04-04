import { Stack, Typography } from "@mui/material";


function CommentDrawer() {
  return (
    <>
      <Stack p='20px' gap='12px' alignItems='center'>
        <Typography variant="h6">แสดงความคิดเห็นเพิ่มเติม</Typography>
        <Stack width='100%' height='120px' p='16px' sx={{backgroundColor: 'black', borderRadius: '6px'}}>
            <Typography variant="body2" color='#A9AAB6'>ความคิดเห็น</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default CommentDrawer;
