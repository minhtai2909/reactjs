import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExtensionIcon from '@material-ui/icons/Extension';
import Register from 'features/Auth/Components/Register';
import Login from 'features/Auth/Components/Login';

import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Badge, Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import { logout } from 'features/Auth/userSlice';
import { cartItemsTotalSelector } from 'features/Cart/cartSelector';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: "none"
    }
}));
const MODE = {
    LOGIN: 'login', REGISTER: 'register'
}
export default function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const loggedInUser = useSelector(state => state.user.current);
    const cartItemCount = useSelector(cartItemsTotalSelector);
    const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        dispatch(logout());
    }

    const handleCartClick = () => {
        history.push('/cart');
    }

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                    <ExtensionIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        Minh Tàii 🦊
                    </Typography>

                    <NavLink className={classes.link} to="/todos">
                        <Button color="inherit">Todos</Button>

                    </NavLink>
                    <NavLink to="/albums" className={classes.link}>
                        <Button color="inherit">Albums</Button>
                    </NavLink>
                    <NavLink to="/Practices" className={classes.link}>
                        <Button color="inherit">Practices</Button>

                    </NavLink>
                    <NavLink to="/Counter" className={classes.link}>
                        <Button color="inherit">Counter</Button>
                    </NavLink>

                    <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleCartClick}>
                        <Badge badgeContent={cartItemCount} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    {
                        isLoggedIn
                            ?
                            <>
                                <IconButton color="inherit" onClick={handleUserClick}>
                                    <AccountCircle ></AccountCircle>
                                </IconButton>
                            </>
                            :
                            <>
                                <Button color="inherit" onClick={() => handleClickOpen()}>Login</Button>
                            </>
                    }

                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>

            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    {
                        mode === MODE.REGISTER
                            ?
                            <>
                                <Register closeDialog={handleClose} />
                                <Box textAlign="center">
                                    <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                        Already have an account. Login here
                                    </Button>
                                </Box>
                            </>
                            :
                            <>
                                <Login closeDialog={handleClose} />

                                <Box textAlign="center">
                                    <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                        Dont have an account. Register here
                                    </Button>
                                </Box>
                            </>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
