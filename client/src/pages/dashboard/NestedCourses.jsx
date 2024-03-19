import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import SvgIcon from '@mui/material/SvgIcon';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import axios from 'axios';
const PdfIcon = () => (
  <SvgIcon viewBox="0 0 24 24" color="action">
    <path d="M14 0h4v14h-4zM0 0h10v14H0zM16 0h8v14h-8z" />
  </SvgIcon>
);


function NestedList({ selectedProject }) {
  const [open, setOpen] = useState(true);
  const [projectPdfUrl, setProjectPdfUrl] = useState('');



  const handleStarredClick = () => {
    fetch(projectPdfUrl)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, 'course.pdf'); // Customize filename as needed
        console.log('PDF download initiated');
      })
      .catch(error => {
        console.error('Error downloading PDF:', error);
        // Handle download errors here (e.g., display error message)
      });
  };

  const handleClick = () => {
    setOpen(!open);
  };
//  function to upload image , zip , file ... 
  const [file, setFile] = React.useState(null);
  const uploadPdf = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Attachement');
  
    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dbe8ewrpo/raw/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de l\'upload du PDF :', error.message);
    }
  };
  
// fin de function 
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {/* Content */}
        </ListSubheader>
      } >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <HtmlRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} >
          <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
          <br/>
          <button onClick={uploadPdf}> upload  </button>
     
  </ListItemButton>
          {/* Other list items */}
        </List>
      </Collapse>
    </List>
  );
}

export default NestedList;
