import {Component, Fragment} from 'react'
import nw from './nw.json'

import {
    Box,
    Paper,
    Card,
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    Grid,
    Divider,
} from '@mui/material'

const EXCLUSIVE_LIST = [
    {name: "sword exclusive", title: "Exclusive: Sword"},
    {name: "rapier exclusive", title: "Exclusive: Rapier"},
    {name: "hatchet exclusive", title: "Exclusive: Hatchet"},
    {name: "spear exclusive", title: "Exclusive: Spear"},
    {name: "great axe exclusive", title: "Exclusive: Great Axe"},
    {name: "war hammer exclusive", title: "Exclusive: War Hammer"},
    {name: "bow exclusive", title: "Exclusive: Bow"},
    {name: "musket exclusive", title: "Exclusive: Musket"},
    {name: "fire staff exclusive", title: "Exclusive: Fire Staff"},
    {name: "life staff exclusive", title: "Exclusive: Life Staff"},
    {name: "ice gauntlet exclusive", title: "Exclusive: Ice Gauntlet"},
    {name: "void gauntlet exclusive", title: "Exclusive: Void Gauntlet"},

    {name: "kite shield exclusive", title: "Exclusive: Kite Shield"},
    {name: "tower shield exclusive", title: "Exclusive: Tower Shield"},
    {name: "round shield exclusive", title: "Exclusive: Round Shield"},
]

const WEAPONS = [
    "sword",
    "rapier",
    "hatchet",
    "spear",
    "great axe",
    "war hammer",
    "bow",
    "musket",
    "fire staff",
    "life staff",
    "ice gauntlet",
    "void gauntlet",
]

const ARMOR = [
    "chest",
    "helmet",
    "gloves",
    "pants",
    "shoes",
]

const SHIELDS = [
    "kite shield",
    "tower shield",
    "round shield",
]

const JEWELRY = [
    "ring",
    "amulet",
    "earring",
]

const TOOLS = [
    "fishing pole",
    "logging axe",
    "skinning knife",
    "sickle",
    "pickaxe",
]

const SATCHEL = [
    "satchel"
]

class PerkInfo extends Component {

    constructor(props) {
        super(props)
    }

    /*
        <this.CardsBlock filter = "" title = "" perks = {perks} />
    */

    CardsBlock = props => {

        let perks = props.perks.filter(perk => perk.target.includes(props.filter))

        return perks.length ? 
            <Fragment>

                <Typography variant="h3" component="div" sx = {{ mb: 2, mt: 2}}>
                    {props.title}
                </Typography>

                <Grid container spacing={2}>

                    {perks.map((perk, index) => 
                        <Grid item xs = {12} sm = {6} md = {4} key = {index}>
                            <Card> 
                                <CardHeader 
                                    avatar = {<Avatar 
                                        src = {perk.image}
                                        sx = {{ 
                                            bgcolor: "#333", 
                                            p: 1,
                                            width: 50,
                                            height: 50,
                                        }}
                                        variant = "square"
                                    >
                                    </Avatar>}
                                    title = {
                                        <Typography variant = "h5" component = "div">
                                            {perk.name}
                                        </Typography>
                                    }
                                />
                                <CardContent>
                                    {perk.description.map((element, index) => <Typography variant = "subtitle1" component = "div" color = "text.secondary" key = {index}>
                                        {element}
                                    </Typography>)}
                                    <Divider sx = {{mt: 1, mb: 1}} />
                                    <Typography 
                                        variant = "subtitle2" 
                                        component = "div" 
                                        color = "text.secondary"
                                    >
                                        Resource: {perk.resource}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}

                </Grid>

            </Fragment> 
        : 
            ""
    }

    Weapon = props => <Box sx = {{flexGrow: 1}}>
        <this.CardsBlock filter = {props.name + " attribute"} title = "Attribute" perks = {nw}/>
        <this.CardsBlock filter = {props.name + " socket"} title = "Slot" perks = {nw} />
        <this.CardsBlock filter = {props.name + " exclusive"} title = "Exclusive" perks = {nw} />
        <this.CardsBlock filter = {props.name} title = "Perk" perks = {nw} />
    </Box>

    Shield = props => <Box sx = {{flexGrow: 1}}>
        <this.CardsBlock filter = {props.name + " attribute"} title = "Attribute" perks = {nw} />
        <this.CardsBlock filter = {props.name + " socket"} title = "Slot" perks = {nw} />
        <this.CardsBlock filter = {props.name + " exclusive"} title = "Exclusive" perks = {nw} />
        <this.CardsBlock filter = {props.name} title = "Perk" perks = {nw} />
    </Box>

    Armor = props => <Box sx = {{flexGrow: 1}}>
        <this.CardsBlock filter = {props.name + " attribute"} title = "Attribute" perks = {nw} />
        <this.CardsBlock filter = {props.name + " socket"} title = "Slot" perks = {nw} />
        {EXCLUSIVE_LIST.map((item, index) => <this.CardsBlock filter = {item.name} title = {item.title} perks = {nw} key = {index} />)}
        {(() => {
            let data = nw.filter(perk => !perk.target.find(target => EXCLUSIVE_LIST.find(exclusive => exclusive.name === target)))
            return <this.CardsBlock filter = {props.name} title = "Perk" perks = {data} />
        })()}
    </Box>

    Jewelry = props => <Box sx = {{flexGrow: 1}}>
        <this.CardsBlock filter = {props.name + " attribute"} title = "Attribute" perks = {nw} />
        <this.CardsBlock filter = {props.name + " socket"} title = "Slot" perks = {nw} />
        <this.CardsBlock filter = {props.name} title = "Perk" perks = {nw} />
    </Box>

    Tool = props => <Box sx = {{flexGrow: 1}}>
        <this.CardsBlock filter = {props.name} title = "Perk" perks = {nw} />
    </Box>

    Satchel = props => <Box sx = {{flexGrow: 1}}>
        <this.CardsBlock filter = {props.name} title = "Perk" perks = {nw} />
    </Box>

    render = () => {

        if (WEAPONS.includes(this.props.item)) {
            return <this.Weapon name = {this.props.item} />
        }

        if (SHIELDS.includes(this.props.item)) {
            return <this.Shield name = {this.props.item} />
        }

        if (ARMOR.includes(this.props.item)) {
            return <this.Armor name = {this.props.item} />
        }

        if (JEWELRY.includes(this.props.item)) {
            return <this.Jewelry name = {this.props.item} />
        }

        if (TOOLS.includes(this.props.item)) {
            return <this.Tool name = {this.props.item} />
        }

        if (SATCHEL.includes(this.props.item)) {
            return <this.Satchel name = {this.props.item} />
        }

        return <Box sx = {{flexGrow: 1}}>
            <Paper sx = {{p: 1}}>
                Select perk in main menu
            </Paper>
        </Box>

    }
    
}

export default PerkInfo