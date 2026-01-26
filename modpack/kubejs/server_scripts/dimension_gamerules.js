// =======================
// CONFIG
// =======================

const LOCKED_DIMENSIONS = [
  "minecraft:the_end",
  "compactmachines:compact_world",
  "cyberspace:cyberspace",
  "crc:the_future",
  "ad_astra:venus",
  "ad_astra:venus_orbit",
  "ad_astra:mars",
  "ad_astra:mars_orbit",
  "ad_astra:mercury",
  "ad_astra:mercury_orbit",
  "ad_astra:glacio",
  "ad_astra:glacio_orbit",
  "sgjourney:athos",
  "sgjourney:chulak",
  "sgjourney:lantea",
  "sgjourney:rima",
  "sgjourney:unitas"
]

const LOCKED_GAMERULES = {
  doMobSpawning: false,
  doTraderSpawning: false,
  doPatrolSpawning: false,
  mobGriefing: false,
  doFireTick: false,
  doWeatherCycle: false,
  doDaylightCycle: false,
  randomTickSpeed: 0
}

// =======================
// APPLY ON LEVEL LOAD
// =======================

LevelEvents.loaded(event => {
  const level = event.level
  if (!level || level.isClientSide()) return

  const dimId = String(level.dimension)
  if (!LOCKED_DIMENSIONS.includes(dimId)) return

  Object.entries(LOCKED_GAMERULES).forEach(([rule, value]) => {
    level.gameRules.get(rule).set(value, level.getServer())
  })

  console.log(`[BeyondMod] Locked gamerules applied to ${dimId}`)
})

// =======================
// SAFETY NET: PLAYER LOGIN
// =======================

PlayerEvents.loggedIn(event => {
  const level = event.player.level()
  if (!level || level.isClientSide()) return

  const dimId = String(level.dimension)
  if (!LOCKED_DIMENSIONS.includes(dimId)) return

  Object.entries(LOCKED_GAMERULES).forEach(([rule, value]) => {
    level.gameRules.get(rule).set(value, level.getServer())
  })

  event.player.tell("⚠ This planet is currently dormant.")
})
