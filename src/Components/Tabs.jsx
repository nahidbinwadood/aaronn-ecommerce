/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled Tab component to replicate the design in the image
const StyledTabs = styled(Tabs)({
  borderBottom: '1px solid #e0e0e0', // Bottom border for the tabs container
  '& .MuiTabs-indicator': {
    backgroundColor: '#2979ff', // Blue indicator for the active tab
    height: '3px', // Thickness of the underline
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none', // Keep the text normal (no uppercase)
    minWidth: 72,
    fontFamily: '"Open Sans", sans-serif', // Custom font family
    fontSize: '18px', // Custom font size
    fontStyle: 'normal', // Custom font style
    fontWeight: 600, // Custom font weight
    lineHeight: '132%', // Custom line height
    letterSpacing: '-0.48px', // Custom letter spacing
    marginRight: '32px', // Margin between tabs
    color: '#6c757d', // Default color for inactive tabs
    '&.Mui-selected': {
      color: '#3979F0', // Active tab color
    },
  })
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const MyTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="custom styled tabs"
      >
        <StyledTab label="Description" {...a11yProps(0)} />
        <StyledTab label="Care & Maintenance" {...a11yProps(1)} />
      </StyledTabs>
      <TabPanel className="text-[#868686] " value={value} index={0}>
        <Box sx={{ color: '#868686', '& > p': { marginBottom: 2 } }}>
          <p>
            We’ve created a full-stack structure for our working workflow
            processes, were from the funny the century initial all the made,
            have spare to negatives. But the structure was from the funny the
            century rather, initial all the made, have spare to negatives. We’ve
            created a full-stack structure for our working workflow processes,
            were from the funny the century initial all the made, have spare to
            negatives. But the structure was from the funny the century rather,
            initial all the made, have spare to negatives.
          </p>
          <p>
            We’ve created a full-stack structure for our working workflow
            processes, were from the funny the century initial all the made,
            have spare to negatives. But the structure was from the funny the
            century rather, initial all the made, have spare to negatives. We’ve
            created a full-stack structure for our working workflow processes,
            were from the funny the century initial all the made, have spare to
            negatives. But the structure was from the funny the century rather,
            initial all the made, have spare to negatives.
          </p>
          <p>
            We’ve created a full-stack structure for our working workflow
            processes, were from the funny the century initial all the made,
            have spare to negatives. But the structure was from the funny the
            century rather, initial all the made, have spare to negatives. We’ve
            created a full-stack structure for our working workflow processes,
            were from the funny the century initial all the made, have spare to
            negatives. But the structure was from the funny the century rather,
            initial all the made, have spare to negatives.
          </p>
        </Box>
      </TabPanel>
      <TabPanel className="text-[#868686]" value={value} index={1}>
        <Box sx={{ color: '#868686', '& > p': { marginBottom: 2 } }}>
          <p>
            We’ve created a full-stack structure for our working workflow
            processes, were from the funny the century initial all the made,
            have spare to negatives. But the structure was from the funny the
            century rather, initial all the made, have spare to negatives. We’ve
            created a full-stack structure for our working workflow processes,
            were from the funny the century initial all the made, have spare to
            negatives. But the structure was from the funny the century rather,
            initial all the made, have spare to negatives.
          </p>
          <p>
            We’ve created a full-stack structure for our working workflow
            processes, were from the funny the century initial all the made,
            have spare to negatives. But the structure was from the funny the
            century rather, initial all the made, have spare to negatives. We’ve
            created a full-stack structure for our working workflow processes,
            were from the funny the century initial all the made, have spare to
            negatives. But the structure was from the funny the century rather,
            initial all the made, have spare to negatives.
          </p>
          <p>
            We’ve created a full-stack structure for our working workflow
            processes, were from the funny the century initial all the made,
            have spare to negatives. But the structure was from the funny the
            century rather, initial all the made, have spare to negatives. We’ve
            created a full-stack structure for our working workflow processes,
            were from the funny the century initial all the made, have spare to
            negatives. But the structure was from the funny the century rather,
            initial all the made, have spare to negatives.
          </p>
          <p>
            We’ve created a full-stack structure for our working workflow
            processes, were from the funny the century initial all the made,
            have spare to negatives. But the structure was from the funny the
            century rather, initial all the made, have spare to negatives. We’ve
            created a full-stack structure for our working workflow processes,
            were from the funny the century initial all the made, have spare to
            negatives. But the structure was from the funny the century rather,
            initial all the made, have spare to negatives.
          </p>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default MyTabs;
