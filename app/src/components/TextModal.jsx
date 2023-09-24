import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

function TextModal({ open, handleClose, prompt, cid }) {
  const yourText = `
    


    lilypad run lora_inference:v0.1.7-lilypad1 '{lora_cid: ${cid}, prompt: "${prompt} <s1><s2>", seed: 3}'  `;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <h1>Running Low Rank Adaptation Model on Prompt</h1>
          <h2>Commad sent to run Lilypad job:</h2>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {yourText}
        </Typography>
      </Box>
    </Modal>
  );
}

export default TextModal;
