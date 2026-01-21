EntityEvents.spawned(event => {
  const e = event.entity
  if (!e || e.level.isClientSide()) return
  if (!e.isMonster()) return

  const nearby = e.level.getEntities(
    e,
    e.boundingBox.inflate(24),
    ent => ent.isMonster()
  )

  if (nearby.size() > 8) {
    e.discard()
  }
})
//limits how many mobs can spawn near each other