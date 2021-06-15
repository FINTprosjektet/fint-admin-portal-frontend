import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BusinessIcon from "@material-ui/icons/Business";
import ContactIcon from "@material-ui/icons/Person";
import ComponentIcon from "@material-ui/icons/WebAsset";
import AccessIcon from "@material-ui/icons/LockOpen";
import ToolsIcon from "@material-ui/icons/Build";
import {Link} from "react-router-dom";

const menuLink = {
    textDecoration: 'none'
};

export const MENU_ITEMS = (
    <div>
        <Link to="/" style={menuLink}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
        </Link>
        <Link to="/organisations" style={menuLink}>
            <ListItem button>
                <ListItemIcon>
                    <BusinessIcon/>
                </ListItemIcon>
                <ListItemText primary="Organisasjoner"/>
            </ListItem>
        </Link>
        <Link to="/contacts" style={menuLink}>
            <ListItem button>
                <ListItemIcon>
                    <ContactIcon/>
                </ListItemIcon>
                <ListItemText primary="Kontakter"/>
            </ListItem>
        </Link>
        <Link to="/components" style={menuLink}>
            <ListItem button>
                <ListItemIcon>
                    <ComponentIcon/>
                </ListItemIcon>
                <ListItemText primary="Komponenter"/>
            </ListItem>
        </Link>
        <Link to="/access" style={menuLink}>
            <ListItem button>
                <ListItemIcon>
                    <AccessIcon/>
                </ListItemIcon>
                <ListItemText primary="Tilgangspakker"/>
            </ListItem>
        </Link>
        <Link to="/tools" style={menuLink}>
            <ListItem button>
                <ListItemIcon>
                    <ToolsIcon/>
                </ListItemIcon>
                <ListItemText primary="Verktøy"/>
            </ListItem>
        </Link>
    </div>
);