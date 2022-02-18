import React from 'react'
import PerkInfo from './PerkInfo'

import {
    CssBaseline,
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Divider,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.appBar_menu_items = [
            {title: "Sword", value: "sword"},
            {title: "Rapier", value: "rapier"},
            {title: "Hatchet", value: "hatchet"},
            {title: "Spear", value: "spear"},
            {title: "Great Axe", value: "great axe"},
            {title: "War Hammer", value: "war hammer"},
            {title: "Bow", value: "bow"},
            {title: "Musket", value: "musket"},
            {title: "Fire Staff", value: "fire staff"},
            {title: "Life Staff", value: "life staff"},
            {title: "Ice Gauntlet", value: "ice gauntlet"},
            {title: "Void Gauntlet", value: "void gauntlet"},
            {title: "divider"},
            {title: "Chest", value: "chest"},
            {title: "Helmet", value: "helmet"},
            {title: "Gloves", value: "gloves"},
            {title: "Pants", value: "pants"},
            {title: "Shoes", value: "shoes"},
            {title: "divider"},
            {title: "Round Shield", value: "round shield"},
            {title: "Kite Shield", value: "kite shield"},
            {title: "Tower Shield", value: "tower shield"},
            {title: "divider"},
            {title: "Ring", value: "ring"},
            {title: "Amulet", value: "amulet"},
            {title: "Earring", value: "earring"},
            {title: "divider"},
            {title: "Fishing Pole", value: "fishing pole"},
            {title: "Logging Axe", value: "logging axe"},
            {title: "Skinning Knife", value: "skinning knife"},
            {title: "Sickle", value: "sickle"},
            {title: "Pickaxe", value: "pickaxe"},
            {title: "divider"},
            {title: "Satchel", value: "satchel"},
        ]

        this.state = {
            selected: undefined,
            appBar_menu_anchorEl: undefined,
            appBar_menu_openState: false,
            appBar_menu_selected: undefined,
        }

        this.handle_appBar_menu_click = this.handle_appBar_menu_click.bind(this)
        this.handle_appBar_menu_close = this.handle_appBar_menu_close.bind(this)
    }

    handle_appBar_menu_click = e => {
        e.stopPropagation()
        this.setState({
            appBar_menu_anchorEl: e.currentTarget,
            appBar_menu_openState: true
        })
    }

    handle_appBar_menu_close = (e) => {
        e.stopPropagation()
        this.setState({
            selected: this.appBar_menu_items[e.target.value],
            appBar_menu_anchorEl: undefined,
            appBar_menu_openState: false
        })
    }

    render = () => <React.Fragment>

        <CssBaseline />

        <AppBar position='sticky'>

            <Toolbar>

                <IconButton
                    id = "appbar-menu-button"

                    size = "large"
                    edge = "start"
                    color = "inherit"
                    
                    sx = {{ mr: 1 }}

                    aria-label = "menu"

                    arial-controls = {this.state.appBar_menu_openState ? "select-item-menu" : undefined}
                    arial-haspopup = "true"
                    arial-expanded = {this.state.appBar_menu_openState ? "true" : undefined}

                    onClick = {this.handle_appBar_menu_click}
                >
                    <MenuIcon />
                </IconButton>

                <Menu
                    id = "select-item-menu"
                    anchorEl={this.state.appBar_menu_anchorEl}
                    open = {this.state.appBar_menu_openState}
                    onClose = {this.handle_appBar_menu_close}
                >

                    {this.appBar_menu_items.map((item, index) => 
                        item.title === "divider" ? 
                            <Divider key = {index}/>
                        :
                            <MenuItem 
                                onClick = {this.handle_appBar_menu_close}
                                key = {index}
                                value = {index}
                            >
                                {item.title}
                            </MenuItem>
                    )}

                </Menu>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {this.state.selected ? this.state.selected.title : "<< select item"}
                </Typography>            

            </Toolbar>

        </AppBar>

        <Container
            sx = {{p: 1}}
        >

            <PerkInfo item = {this.state.selected ? this.state.selected.value : undefined}/>

        </Container>

    </React.Fragment>
 
}

export default App;
