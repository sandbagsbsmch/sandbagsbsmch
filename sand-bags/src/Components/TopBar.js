import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from '../Assets/Untitled.png'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  background: `rgba(0, 0, 0, 0.5) url(${Image})`,
  backgroundBlendMode: 'darken',
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 158  },
}));

export default function ProminentAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            dir='rtl'
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            {props.children}
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
