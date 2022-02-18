import {
    Typography
} from '@mui/material'

// Slash attacks: Angry Earth +20%, Ancient -15%<br />
// Trust attacks: Corrupted +20%, Beasts +20%, Angry Earth -15%, Lost -15%
// Strike attacks: Lost +10%, Ancient +20%, Corrupted -15% 

const perk_info = [
    {
        name: "sword",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Sword
            </Typography>
            <p>
                A pairing or melee focused weapons that, when combined, offer solid offensive and defensive capabilities. Utilizes a combination of arcing swing and lunges for the offensive melee attacks and a Shield to maximize defenses.
            </p>
            <ul>
                <li>Light Attack: Deals 100% Slash damage.</li>
                <li>Light Ender: Deals 105% Slash damage.</li>
                <li>Heavy Attack: Deals 120% Trust damage.</li>
                <li>Charged Heavy Attack: Deals 160% Trust damage.</li>
            </ul>
            <p>
                Slash attacks: Angry Earth +20%, Ancient -15%<br />
                Trust attacks: Corrupted +20%, Beasts +20%, Angry Earth -15%, Lost -15%
            </p>
        </div>
    },
]

const WeaponInfo = props => {
    let info = perk_info.find(element => element.name === props.name)
    return info ? info.body : ""
}

export default WeaponInfo