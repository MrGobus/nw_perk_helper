import {
    Typography
} from '@mui/material'

const SlashDamageInfo = props => <inline>Slash attacks: Angry Earth +20%, Ancient -15%</inline>
const ThrustDamageInfo = props => <inline>Thrust attacks: Corrupted +20%, Beasts +20%, Angry Earth -15%, Lost -15%</inline>
const StrikeDamageInfo = props => <inline>Strike attacks: Lost +10%, Ancient +20%, Corrupted -15% </inline>

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
                <SlashDamageInfo /><br />
                <ThrustDamageInfo />
            </p>
        </div>
    },
    {
        name: "rapier",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Rapier
            </Typography>
            <p>
                A speed oriented melee weapon with a very quick attacks. Excels at precise timing and outmaneuvering opponents while applying bleeds that gradually drain the target's health.
            </p>
            <ul>
                <li>Light Attack: Deals 100% Thrust damage.</li>
                <li>Light Middle Swipes: Deals 66% Thrust damage.</li>
                <li>Heavy Attack: Deals 133% Thrust damage.</li>
            </ul>
            <p>
                <ThrustDamageInfo />
            </p>
        </div>
    },
    {
        name: "hatchet",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Hatchet
            </Typography>
            <p>
                A diverse weapon that allows for ranged throwing attacks or rapid close quarters attacks, ideal for aggressive, fully committed, close quartes melee or tactical medium range combat.
            </p>
            <ul>
                <li>Light Attack: Deals 100% Slash damage.</li>
                <li>Light Ender: Deals 105% Slash damage.</li>
                <li>Heavy Attack: Deals 120% Slash damage.</li>
                <li>Charged Heavy Attack: Deals 160% Slash damage.</li>
            </ul>
            <p>
                <SlashDamageInfo />
            </p>
        </div>
    },
]

const WeaponInfo = props => {
    let info = perk_info.find(element => element.name === props.name)
    return info ? info.body : ""
}

export default WeaponInfo