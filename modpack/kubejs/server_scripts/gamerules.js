// =======================
// CONFIG
// =======================

const GAMERULES = {
  commandBlockOutput: false,
  logAdminCommands: false,
  doPatrolSpawning: false,
  doInsomnia: false,
  mobGriefing: false,
  doFireTick: false,
  randomTickSpeed: 1
}

// =======================
// APPLY ON LEVEL LOAD
// =======================

LevelEvents.loaded(event => {
  const level = event.level
  if (!level || level.isClientSide()) return

  Object.entries(GAMERULES).forEach(([rule, value]) => {
    level.gameRules.get(rule).set(value, level.getServer())
  })

  const dimId = String(level.dimension)
  console.log(`[BeyondMod] Gamerules applied to ${dimId}`)
})
