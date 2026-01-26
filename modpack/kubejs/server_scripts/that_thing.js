EntityEvents.death(event => {
  const entity = event.entity
  if (!entity || !entity.isPlayer()) return
  if (entity.level.isClientSide()) return

  // 1 in 10 chance
  if (Math.floor(Math.random() * 10) !== 0) return

  const x = Math.floor(entity.x)
  const y = Math.floor(entity.y)
  const z = Math.floor(entity.z)

  // Plays sound to everyone nearby
  Utils.server.runCommandSilent(
    `playsound beyond:wilhelm player @a[x=${x},y=${y},z=${z},distance=..40] ~ ~ ~ 1 1`
  )
})
