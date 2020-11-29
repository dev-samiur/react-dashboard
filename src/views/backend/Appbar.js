import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import EventIcon from '@material-ui/icons/Event';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PostAddIcon from '@material-ui/icons/PostAdd';
import TheatersIcon from '@material-ui/icons/Theaters';
import DnsIcon from '@material-ui/icons/Dns';
import SettingsIcon from '@material-ui/icons/Settings';
import { Route, Switch, Link } from 'react-router-dom';

import { Dashboard } from './Dashboard'
import News from './News'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: theme.palette.primary.dark,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    color:'#F6F6F6',
    background: theme.palette.primary.main,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    color:'#F6F6F6',
    background: theme.palette.primary.main,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    color: '#F6F6F6',
    overflow: 'hidden',
  },
  link: {
    color: '#F6F6F6'
  }
}));

export default function Appbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Box width="100%" display="flex" justifyContent="center">
            <Typography variant="h6" style={{color: '#1E1E2E', fontWeight: 600}}>Xiah Legends</Typography>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem component={Link} to="/" className={classes.link}>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem component={Link} to="/news" className={classes.link}>
              <ListItemIcon><AnnouncementIcon /></ListItemIcon>
              <ListItemText primary="News" />
            </ListItem>
            <ListItem component={Link} to="/" className={classes.link}>
              <ListItemIcon><EventIcon /></ListItemIcon>
              <ListItemText primary="Events" />
            </ListItem>
            <ListItem component={Link} to="/" className={classes.link}>
              <ListItemIcon><PeopleOutlineIcon /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem component={Link} to="/" className={classes.link}>
              <ListItemIcon><PostAddIcon /></ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItem>
            <ListItem component={Link} to="/" className={classes.link}>
              <ListItemIcon><TheatersIcon /></ListItemIcon>
              <ListItemText primary="Media" />
            </ListItem>
            <ListItem component={Link} to="/" className={classes.link}>
              <ListItemIcon><DnsIcon /></ListItemIcon>
              <ListItemText primary="Wiki" />
            </ListItem>
            <ListItem component={Link} to="/" className={classes.link}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Container maxWidth="xl">
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/news" component={News} exact />
              </Switch>
            </Container>
      </main>
    </div>
  );
}
