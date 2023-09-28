import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


export default function BasicAccordion() {
return (
    <div>
    <Accordion sx={{padding:'10px'}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:'#1D4ED8'}}/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography sx={{fontSize:'14px'}}> <DescriptionOutlinedIcon/> Personal Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion sx={{padding:'10px'}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:'#1D4ED8'}}/>}
        aria-controls="panel2a-content"
        id="panel2a-header"
        >
        <Typography sx={{fontSize:'14px'}}><DescriptionOutlinedIcon/>  Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion sx={{padding:'10px'}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:'#1D4ED8'}} />}
        aria-controls="panel2a-content"
        id="panel2a-header"
        >
        <Typography sx={{fontSize:'14px'}}><DescriptionOutlinedIcon/>  Work Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion sx={{padding:'10px'}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:'#1D4ED8'}} />}
        aria-controls="panel2a-content"
        id="panel2a-header"
        >
        <Typography sx={{fontSize:'14px'}}><DescriptionOutlinedIcon/>  Activity Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
        </AccordionDetails>
    </Accordion>
   
    </div>
);
}