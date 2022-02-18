import {
    Typography
} from '@mui/material'


const perk_info = [
    {
        name: "sword",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Sword
            </Typography>
            <p>
                <b>Attack type:</b> SLASH<br />
                <b>Strong again:</b> <br />
                <b>Weak again:</b> <br />
            </p>
        </div>
    },
]

const WeaponInfo = props => {
    let info = perk_info.find(element => element.name === props.name)
    return info ? info.body : ""
}

export default WeaponInfo