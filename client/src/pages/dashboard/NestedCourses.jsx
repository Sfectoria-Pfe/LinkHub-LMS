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
const PdfIcon = () => (
  <SvgIcon viewBox="0 0 24 24" color="action">
    <path d="M14 0h4v14h-4zM0 0h10v14H0zM16 0h8v14h-8z" />
  </SvgIcon>
);


function NestedList({ selectedProject }) {
  const [open, setOpen] = useState(true);
  const [projectPdfUrl, setProjectPdfUrl] = useState('');

  // Replace this logic with your implementation to determine the PDF URL based on project data
  React.useEffect(() => {
    if (selectedProject) {
      const projectId = selectedProject.id; // Assuming project has an ID
      setProjectPdfUrl(`./../../../public/assets/CDC_LMS (2).pdf`); // Adjust path based on your structure
    }
  }, [selectedProject]);

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
  const handlePdfView = () => {
    window.open(projectPdfUrl, '_blank'); // Open PDF in new tab
  };
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {/* Content */}
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <HtmlRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick={handlePdfView}>
    <ListItemIcon>
      <PdfIcon />
    </ListItemIcon>
    <ListItemText primary="View Course PDF" />
  </ListItemButton>
          {/* Other list items */}
        </List>
      </Collapse>
    </List>
  );
}

export default NestedList;
