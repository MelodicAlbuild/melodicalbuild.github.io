# Circuit Seasons System

## Concept

Erova's five main zones (Circuits 1-5) exist on a **rotating season schedule**. At any point in the game, the five zones are distributed across three season states:

- **2 zones in Circuit Season** — gyms open, main story active, Nexus ramping up
- **2 zones in Offseason** — explorable, side content, Nexus planting seeds
- **1 zone in Festival Season** — just completed, celebration, legendary encounter

The player **chooses** which Circuit Season zone to tackle. When they complete one, the rotation advances: a new zone enters Circuit Season, the completed zone enters Festival, and eventually an old Festival zone settles into permanent post-Festival state.

**Circuit 6 (The Spire)** is separate — it's the linear story climax that unlocks only after all 5 zones reach Festival.

---

## The Three Seasons

### Offseason
- The zone is peaceful. People go about daily life.
- Gyms are **closed** — leaders are training, doing community work, or traveling.
- Explore freely: catch Pokemon, find items, meet NPCs, discover lore.
- The Nexus subsidiary operates quietly — small signs of activity (trucks, workers, NPC complaints).
- Side content available: quests, hidden areas, optional dungeons.
- Rival may appear for a casual battle.
- **You can visit and prepare, but you can't progress the Circuit here yet.**

### Circuit Season
- The Circuit is officially open. Banners go up, crowds arrive, energy buzzes.
- All 4 gyms **open simultaneously** — challenge in any order.
- Gym leaders scale based on **total badges across all circuits**, plus a within-circuit offset based on local badges (0-3).
- More trainers on routes (Circuit challengers from across Erova).
- Nexus subsidiary **ramps up** — grunts on routes, admins in restricted areas, environmental damage escalates.
- Key story beats: Nexus confrontations, rival battles, research note discoveries.

### Festival Season
- Zone celebrates the Circuit's end. Decorations, special vendors, unique battles.
- **Festival-exclusive content:** rare item shops, mini-games, cosmetic rewards.
- Nexus plot reaches its **climax** — operation exposed, subsidiary boss fight.
- **Legendary dungeon opens** (environmental damage disturbs the sleeping legendary).
- Special/rare Pokemon encounters drawn by the festival energy.
- After resolving the legendary, the zone enters **permanent post-Festival state**.

---

## The Rotation

### Initial State (Game Start)

After receiving your starter from Prof. Coral:

| Zone | Starting Season | Why |
|------|----------------|-----|
| Verdant Coast | **Circuit** | Home zone — the Circuit opens as you begin your journey |
| Emerald Wilds | **Circuit** | Neighboring zone — also in season, giving you a choice |
| Scorched Expanse | Offseason | Distant — reachable but not active yet |
| Frozen Reaches | Offseason | Distant — reachable but not active yet |
| Twilight Marshes | Offseason | Distant — reachable but not active yet |
| The Spire | **Locked** | Opens after all 5 zones complete |

The player can travel to any zone from early on (via routes, boats, etc.), but can only challenge gyms in Circuit Season zones. Offseason zones are still worth visiting for exploration, catches, and side quests.

### Rotation Rules

When the player completes a zone (4 badges + Mini League → Festival):

1. **Completed zone → Festival Season**
2. **One Offseason zone → Circuit Season** (the next in the rotation queue)
3. Distribution re-balances toward the 2/2/1 target

The rotation queue determines which Offseason zone activates next. The queue order can be:
- **Story-driven:** NPCs mention "I heard the Scorched Expanse Circuit is opening soon!" giving narrative justification
- **Proximity-based:** Zones geographically closer to completed zones activate first
- **Player-influenced:** The player can talk to a Circuit Board NPC to see which zones are opening next

### Full Progression Example

```
START:    [Circuit] [Circuit] [Off]     [Off]     [Off]     [Locked]
           Coast     Wilds    Expanse   Reaches   Marshes   Spire

Player completes Coast:
          [FESTIVAL] [Circuit] [Circuit] [Off]     [Off]     [Locked]
           Coast      Wilds    Expanse   Reaches   Marshes   Spire

Player completes Wilds:
          [Festival] [FESTIVAL] [Circuit] [Circuit] [Off]     [Locked]
           Coast      Wilds     Expanse   Reaches   Marshes   Spire

Player completes Expanse:
          [Festival] [Festival] [FESTIVAL] [Circuit] [Circuit] [Locked]
           Coast      Wilds     Expanse    Reaches   Marshes   Spire

Player completes Reaches:
          [Festival] [Festival] [Festival] [FESTIVAL] [Circuit] [Locked]
           Coast      Wilds     Expanse    Reaches    Marshes   Spire

Player completes Marshes:
          [Festival] [Festival] [Festival] [Festival] [FESTIVAL] [UNLOCKED]
           Coast      Wilds     Expanse    Reaches    Marshes    Spire
```

**But the player could do them in ANY order!** Coast first, then Marshes, then Expanse — whatever they want from the available Circuit Season zones.

### The Choice Moment

At most points in the game, the player has **2 Circuit Season zones** to choose from. This is the key decision:

- Do I tackle the desert or the tundra next?
- My team is heavy on Water types — the Frozen Reaches would be easier, but the Scorched Expanse has Pokemon I want to catch...
- My friend went Marshes → Coast → Wilds. I'm going to do the opposite and compare notes.

This choice is meaningful because:
- Each zone has different wild Pokemon to catch
- Different Nexus subsidiary stories unfold
- Different gym types test different team compositions
- Festival rewards vary by zone

---

## Dynamic Level Scaling

Since zones aren't in a fixed order, levels scale to **total badges earned across all circuits**.

### Tier System

| Total Badges | Tier | Gym Base Level | Wild Pokemon Range | Mini League |
|---|---|---|---|---|
| 0-3 | 1 | 12 | 5-18 | 26-30 |
| 4-7 | 2 | 30 | 25-38 | 44-48 |
| 8-11 | 3 | 48 | 43-56 | 62-66 |
| 12-15 | 4 | 65 | 60-73 | 79-83 |
| 16-19 | 5 | 82 | 77-90 | 96-100 |

### Within-Circuit Gym Scaling

On top of the tier base level, gyms scale by local badges:

| Zone Badges | Offset | Team Size | Held Items |
|---|---|---|---|
| 0 (1st gym) | +0 | 2-3 Pokemon | None |
| 1 (2nd gym) | +3 | 3 Pokemon | None |
| 2 (3rd gym) | +6 | 3-4 Pokemon | Some |
| 3 (4th gym) | +9 | 4 Pokemon | All |

**Example:** Player has 6 total badges (Tier 2, base 30), enters a new zone, challenges their 3rd gym there:
- Gym leader level: 30 + 6 = 36
- Team: 3-4 Pokemon, some with held items

### Circuit 6: The Spire (Fixed Scaling)

The Spire is always the finale. Fixed levels, no rotation:
- Gyms 21-24: Lv 97-115
- Mini League 6: Lv 115-118
- Full Circuit (Floating Islands): Lv 115-135

---

## How Seasons Affect the World

### Wild Encounters
| Season | Effect |
|--------|--------|
| Offseason | Base encounter tables. Calm, normal rates and levels. |
| Circuit Season | Higher-level Pokemon, some exclusive encounters, more diversity. |
| Festival Season | Rare/special Pokemon, festival-exclusive spawns, best catch rates. |
| Post-Festival | Scaled to player progress, rare spawns remain, rematch trainers. |

### NPC Behavior
| Season | Effect |
|--------|--------|
| Offseason | Casual dialogue. Gym leaders around town. Normal shop stock. |
| Circuit Season | Excited dialogue. Leaders in gyms. Extra route trainers. Battle item restocks. |
| Festival Season | Celebratory dialogue. Special vendors. Gift NPCs. Unique mini-games. |
| Post-Festival | Grateful dialogue. Festival shops remain. Gym leader rematches available. |

### Nexus Corporation Activity
| Season | Effect |
|--------|--------|
| Offseason | Subtle — NPC rumors, blocked paths, environmental clues. Scouts only. |
| Circuit Season | Active — Grunts on routes, Admins in bases, visible environmental damage. |
| Festival Season | Climax — Major base infiltration, subsidiary boss fight, legendary disturbed. |
| Post-Festival | Resolved — NPCs discuss aftermath, cleanup crews, environmental recovery hints. |

### Music
| Season | Theme |
|--------|-------|
| Offseason | Calm, ambient zone theme |
| Circuit Season | Upbeat, energetic variant |
| Festival Season | Festive, celebratory variant with unique instruments |
| Post-Festival | Peaceful reprise of zone theme (resolved, lighter) |

---

## Nexus Story Integration

The non-linear rotation changes how the Nexus story unfolds. Instead of a fixed narrative, the player assembles the picture **from whatever zones they visit**:

### Per-Zone Story (Independent)
Each zone has its own self-contained Nexus subsidiary arc:
- **Offseason:** Clues and environmental hints
- **Circuit Season:** Direct confrontations, data collection, NPC testimonies
- **Festival:** Subsidiary boss fight, dungeon, legendary encounter

### Global Story (Cumulative)
A global **Nexus Awareness** tracker accumulates as the player completes zones:

| Zones Completed | Nexus Awareness | What the Player Knows |
|---|---|---|
| 0 | Oblivious | Just starting out, no idea about Nexus |
| 1 | Suspicious | "That corporation was shady... but it's just one bad company, right?" |
| 2 | Connecting Dots | "Wait, both subsidiaries are connected? There's a pattern here." |
| 3 | Informed | Discovers Project Convergence. Knows Nexus Corp is behind everything. Meets Director Haze. |
| 4 | Urgent | Nexus has captured legendaries from resolved zones. Race to save the remaining ones. |
| 5 | All-In | All subsidiaries exposed. Full picture of the Convergence plan. Path to The Spire opens. |

**Key:** The *specific* revelations come from whichever zones the player does, but the *cumulative* awareness follows a fixed progression. Zone #3 (whichever it is) is always where you connect the dots. Zone #5 is always where the full picture emerges.

This means each playthrough tells the same overarching story but through a different sequence of discoveries.

### Rival Integration
Vesper follows a parallel but offset path:
- Vesper tends to be in the *other* Circuit Season zone from you
- You occasionally cross paths and battle
- Vesper reaches some Festivals before you, some after
- Vesper's dialogue references which zones they've completed (dynamic)

---

## Travel Between Zones

Players need to move freely between the 5 zones. Travel options:

| Method | Unlocked | Notes |
|--------|----------|-------|
| Walking/Routes | Always | Long, scenic, connects adjacent zones |
| Ferry | After 1st badge | Connects all coastal/river towns |
| Circuit Express (train) | After 4 badges | Fast travel between any zone hub |
| Fly | After HM/equivalent | Instant travel to visited cities |

Early game you'll naturally explore zones on foot. As you progress, fast travel opens up so managing multiple zones isn't tedious.

---

## Revisiting Zones

Zones in post-Festival state offer:
- Festival shops (unique items per zone, permanently available)
- Gym leader rematches at **full power** (Lv 80+ teams regardless of when you first beat them)
- Scaled wild encounters matching current progress
- Post-story side quests (unlocked after zone resolution)
- NPC dialogue referencing your accomplishments and overall progress
