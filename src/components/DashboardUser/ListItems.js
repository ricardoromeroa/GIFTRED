import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


// Layer
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import GiftCard from '@material-ui/icons/CardGiftcard';
import Support from '@material-ui/icons/ContactSupport';
// import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem
      component={RouterLink}
      to="../dashboard-user?q=panel"
      button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Panel de Usuario" />
    </ListItem>
    <ListItem
      component={RouterLink}
      to="../dashboard-user?q=user"
      button>
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem>
    <ListItem
      component={RouterLink}
      to="../dashboard-user?q=cards"
      button>
      <ListItemIcon>
        <GiftCard />
      </ListItemIcon>
      <ListItemText primary="Gift - Cards" />
    </ListItem>
    <ListItem
      component={RouterLink}
      to="../dashboard-user?q=support"
      button>
      <ListItemIcon>
        <Support />
      </ListItemIcon>
      <ListItemText primary="Soporte" />
    </ListItem>
  </div>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );