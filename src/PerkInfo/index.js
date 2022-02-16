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

/*
    <CardsBlock filter = "" title = "" perks = {perks} />
*/

const CardsBlock = props => {

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
                                    src = {process.env.PUBLIC_URL + "/" + perk.image}
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
                                {perk.description.map((description, index) => <Typography variant = "subtitle1" component = "div" color = "text.secondary" key = {index}>
                                    {description}
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

const Weapon = props => <Box sx = {{flexGrow: 1}}>
    <CardsBlock filter = {props.name + " attribute"} title = "Attribute" perks = {nw}/>
    <CardsBlock filter = {props.name + " socket"} title = "Slot" perks = {nw} />
    <CardsBlock 
        filter = {props.name + " exclusive"} 
        title = {(
            name => {
                let e = EXCLUSIVE_LIST.find(ex => ex.name === name)
                return e ? e.title : ""
            }
        )(`${props.name} exclusive`)}
        perks = {nw} 
    />
    <CardsBlock filter = {props.name} title = "Perks" perks = {nw} />
    <CardsBlock filter = {props.name + " race"} title = "Perks: race" perks = {nw} />
    <CardsBlock filter = {props.name + " elemental"} title = "Perks: elemental" perks = {nw} />
    <CardsBlock filter = {props.name + " chain"} title = "Perks: chain" perks = {nw} />
    <CardsBlock filter = {props.name + " crit"} title = "Perks: critical" perks = {nw} />
    <CardsBlock filter = {props.name + " light and heavy"} title = "Perks: light and heavy" perks = {nw} />
    <CardsBlock filter = {props.name + " mortal"} title = "Perks: mortal" perks = {nw} />
</Box>

const Shield = props => <Box sx = {{flexGrow: 1}}>
    <CardsBlock filter = {props.name + " attribute"} title = "Attribute" perks = {nw} />
    <CardsBlock filter = {props.name + " socket"} title = "Slot" perks = {nw} />
    <CardsBlock 
        filter = {props.name + " exclusive"} 
        title = {(
            name => {
                let e = EXCLUSIVE_LIST.find(ex => ex.name === name)
                return e ? e.title : ""
            }
        )(`${props.name} exclusive`)}
        perks = {nw} 
    />
    <CardsBlock filter = {props.name} title = "Perks" perks = {nw} />
    <CardsBlock filter = {props.name + " ward"} title = "Perks: shield ward" perks = {nw} />
    <CardsBlock filter = {props.name + " race"} title = "Perks: race" perks = {nw} />
    <CardsBlock filter = {props.name + " elemental"} title = "Perks: elemental" perks = {nw} />
    <CardsBlock filter = {props.name + " chain"} title = "Perks: chain" perks = {nw} />
    <CardsBlock filter = {props.name + " crit"} title = "Perks: critical" perks = {nw} />
    <CardsBlock filter = {props.name + " light and heavy"} title = "Perks: light and heavy" perks = {nw} />
    <CardsBlock filter = {props.name + " mortal"} title = "Perks: mortal" perks = {nw} />
    <CardsBlock filter = {props.name + " conditioning"} title = "Perks: conditioning" perks = {nw} />
</Box>

const Armor = props => <Box sx = {{flexGrow: 1}}>
    <CardsBlock filter = {props.name + " attribute"} title = "Attribute" perks = {nw} />
    <CardsBlock filter = {props.name + " socket"} title = "Slot" perks = {nw} />
    {EXCLUSIVE_LIST.map((item, index) => <CardsBlock filter = {item.name} title = {item.title} perks = {nw} key = {index} />)}
    {(() => {
        let data = nw.filter(perk => !perk.target.find(target => EXCLUSIVE_LIST.find(exclusive => exclusive.name === target)))
        return <CardsBlock filter = {props.name} title = "Perks" perks = {data} />
    })()}
    <CardsBlock filter = {props.name + " ward"} title = "Perks: ward" perks = {nw} />
    <CardsBlock filter = {props.name + " conditioning"} title = "Perks: conditioning" perks = {nw} />
    <CardsBlock filter = {props.name + " gathering"} title = "Perks: gathering" perks = {nw} />
    <CardsBlock filter = {props.name + " accumulation"} title = "Perks: accumulation" perks = {nw} />
    <CardsBlock filter = {props.name + " expertise"} title = "Perks: expertise" perks = {nw} />
</Box>

const Jewelry = props => <Box sx = {{flexGrow: 1}}>
    <CardsBlock filter = {props.name + " attribute"} title = "Attribute" perks = {nw} />
    <CardsBlock filter = {props.name + " socket"} title = "Slot" perks = {nw} />
    <CardsBlock filter = {props.name} title = "Perks" perks = {nw} />

    <CardsBlock filter = {props.name + " damage"} title = "Perks: damage" perks = {nw} />
    <CardsBlock filter = {props.name + " longer"} title = "Perks: longer" perks = {nw} />
    <CardsBlock filter = {props.name + " protection"} title = "Perks: protection" perks = {nw} />
    <CardsBlock filter = {props.name + " gathering"} title = "Perks: gathering" perks = {nw} />
</Box>

const Tool = props => <Box sx = {{flexGrow: 1}}>
    <CardsBlock filter = {props.name} title = "Perks" perks = {nw} />
</Box>

const Satchel = props => <Box sx = {{flexGrow: 1}}>
    <CardsBlock filter = {props.name} title = "Perks" perks = {nw} />
</Box>

class PerkInfo extends Component {

    constructor(props) {
        super(props)
    }

    render = () => {

        if (WEAPONS.includes(this.props.item)) {
            return <Weapon name = {this.props.item} />
        }

        if (SHIELDS.includes(this.props.item)) {
            return <Shield name = {this.props.item} />
        }

        if (ARMOR.includes(this.props.item)) {
            return <Armor name = {this.props.item} />
        }

        if (JEWELRY.includes(this.props.item)) {
            return <Jewelry name = {this.props.item} />
        }

        if (TOOLS.includes(this.props.item)) {
            return <Tool name = {this.props.item} />
        }

        if (SATCHEL.includes(this.props.item)) {
            return <Satchel name = {this.props.item} />
        }

        return <Box sx = {{flexGrow: 1}}>
            <Paper sx = {{p: 1}}>
                Select perk in main menu
            </Paper>
        </Box>

    }
    
}

export default PerkInfo