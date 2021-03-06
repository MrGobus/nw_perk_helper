import {
    Typography
} from '@mui/material'

const SlashDamageInfo = props => <inline>Slash attacks: Angry Earth +20%, Ancient -15%</inline>
const ThrustDamageInfo = props => <inline>Thrust attacks: Corrupted +20%, Beasts +20%, Angry Earth -15%, Lost -15%</inline>
const StrikeDamageInfo = props => <inline>Strike attacks: Lost +10%, Ancient +20%, Corrupted -15% </inline>
const FireDamageInfo = props => <inline>Fire attacks: Angry Earth +30%, Ancient -40%</inline>
const NatureDamageInfo = props => <inline>Nature attacks: Corrupted +15%, Lost +30%</inline>
const IceDamageInfo = props => <inline>Ice attacks: Lost +15%, Corrupted -40%</inline>
const VoidDamageInfo = props => <inline>Void attacks: Ancient +15%, Corrupted -40%, Lost -40%</inline>
const ArcaneDamageInfo = props => <inline>Arcane attacks:  </inline>
const LightningDamageInfo = props => <inline>Lightning attacks:  </inline>

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
    {
        name: "spear",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Spear
            </Typography>
            <p>
                A melee weapon that utilizes its long reach for aggressive thrusting attacks. Perfect for keeping targets at a distance, strategic positioning and apply persistent pressure to targets.
            </p>
            <ul>
                <li>Light Attack: Deals 100% Thrust damage.</li>
                <li>Heavy Attack: Deals 130% Thrust damage.</li>
                <li>Charged Heavy Attack: Deals 165% Thrust damage.</li>
            </ul>
            <p>
                <ThrustDamageInfo />
            </p>
        </div>
    },
    {
        name: "great axe",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Great Axe
            </Typography>
            <p>
                A large melee weapon with wide arcing swings and powerful chopping attacks. Ideal for engaging multiply enemies with AoE damage or dialing extreme to single target.
            </p>
            <ul>
                <li>Light Attack: Deals 100% Slash damage.</li>
                <li>Heavy Attack: Deals 120% Slash damage.</li>
                <li>Charged Heavy Attack: Deals 160% Slash damage.</li>
            </ul>
            <p>
                <SlashDamageInfo />
            </p>
        </div>
    },
    {
        name: "war hammer",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                War Hammer
            </Typography>
            <p>
                A mighty combat hammer that can cause the earth to quake with its crushing strikes. Ideal for impeding enemies with ground tremors or dealing crippling blows directly to a target.    
            </p>
            <ul>
                <li>Light Attack: Deals 100% Strike damage.</li>
                <li>Heavy Attack: Deals 130% Strike damage.</li>
                <li>Charged Heavy Attack: Deals 170% Strike damage.</li>
            </ul>
            <p>
                <StrikeDamageInfo />
            </p>
        </div>
    },
    {
        name: "bow",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Bow
            </Typography>
            <p>
                A versatile ranged weapon than can rapidly fire arrows of be fully to achieve maximum damage. Great for maintaining distance while utilizing a variety of attacks to hinder and damage enemies.
            </p>
            <ul>
                <li>Shot Draw: Deals 100% Thrust damage.</li>
                <li>Long Draw: Deals 170% Thrust damage.</li>
            </ul>
            <p>
                <ThrustDamageInfo />
            </p>
        </div>
    },
    {
        name: "musket",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Musket
            </Typography>
            <p>
                A ranged weapon that fires high-damage cartridges. Ideal for keeping targets at a distance and long-ranged combat with a high payoff for precise aim.
            </p>
            <ul>
                <li>Standard Attack: Deals 100% Thrust damage.</li>
            </ul>
            <p>
                <ThrustDamageInfo />
            </p>
        </div>
    },
    {
        name: "fire staff",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Fire Staff
            </Typography>
            <p>
                The magical staff that consumes Mana to ignite the blazing power of Fire spells. Excels at area denial, dealing fire damage over large swaths, and burning targets.
            </p>
            <ul>
                <li>Light Attacks: Deals 100% Fire damage.</li>
                <li>Heavy Attacks: Deals 140% Fire damage.</li>
            </ul>
            <p>
                <FireDamageInfo />
            </p>
        </div>
    },
    {
        name: "life staff",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Life Staff
            </Typography>
            <p>
                A magical staff that consumes Mana to apply the restorative power of Nature spells. Ideal for supporting allies in combat with powerful healing and buffing abilities.
            </p>
            <ul>
                <li>Light Attacks: Deals 107% Nature damage.</li>
                <li>Heavy Attacks: Deals 151% Nature damage.</li>
            </ul>
            <p>
                <NatureDamageInfo />
            </p>
        </div>
    },
    {
        name: "ice gauntlet",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Ice Gauntlet
            </Typography>
            <p>
                Gauntlet that consumes Mana to summon the freezing powers of Ice spells. Great for dealing persistent damage by calling upon elemental storms, summoning ice, and utilizing freezing attacks that hinder and damage enemies.
            </p>
            <ul>
                <li>Light Attacks: Deals 100% Ice damage.</li>
                <li>Heavy Attacks: Deals 140% Ice damage.</li>
            </ul>
            <p>
                <IceDamageInfo />
            </p>
        </div>
    },
    {
        name: "void gauntlet",
        body: <div>
            <Typography variant="h3"component="div" sx = {{ mb: 2, mt: 2}}>
                Void Gauntlet
            </Typography>
            <p>
                Gauntlet that consumes Mana to debilitate foes and strengthen allies. Specializing in close-range buffs and dealing damage-over-time or mid-range buffs and healing, the Void Gauntlet is particularly dangerous when used in a group.
            </p>
            <ul>
                <li>Light Attacks: Deals 100% Void damage.</li>
                <li>Heavy Attacks: Deals 125% Void damage and heals self for 20% of the damage done.</li>
                <li>Harvest Essence (Hold "Block"): Converts your health into mana over time. Rate scales with weapon damage.</li>
            </ul>
            <p>
                <VoidDamageInfo />
            </p>
        </div>
    }    
]

const WeaponInfo = props => {
    let info = perk_info.find(element => element.name === props.name)
    return info ? info.body : ""
}

export default WeaponInfo