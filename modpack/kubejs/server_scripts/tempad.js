/////////////////////////////////////////////////////////////////
///////////////////// GIVE TEMPAD ON JOIN //////////////////////
////////////////////////////////////////////////////////////////

PlayerEvents.loggedIn(event => {
  const player = event.player
  const data = player.persistentData
  const tempad = 'tempad:tempad'

  if (!data.getBoolean('received_tempad')) {
    player.give(tempad)
    data.putBoolean('received_tempad', true)
  }
})

/////////////////////////////////////////////////////////////////
///////////////////// KEEP ITEM ON DEATH ///////////////////////
////////////////////////////////////////////////////////////////

// Store if player had tempad BEFORE dying
EntityEvents.hurt(event => {
  const entity = event.entity
  if (!entity.isPlayer()) return

  // Only when damage would kill
  if (event.damage < entity.health) return

  const player = entity
  const data = player.persistentData

  let hasTempad = false

  player.inventory.allItems.forEach(stack => {
    if (stack.id == 'tempad:tempad') hasTempad = true
  })

  data.putBoolean('restore_tempad', hasTempad)
})

// Restore after respawn
PlayerEvents.respawned(event => {
  const player = event.player
  const data = player.persistentData

  if (data.getBoolean('restore_tempad')) {
    player.give('tempad:tempad')
    data.putBoolean('restore_tempad', false)
  }
})

////////////////////////////////////////////////////
/////////////// TEMPAD CHAT ///////////////////////
//////////////////////////////////////////////////

PlayerEvents.chat(event => {
  const player = event.player
  let hasTempad = false

  player.inventory.allItems.forEach(stack => {
    if (stack.id == 'tempad:tempad') {
      hasTempad = true
    }
  })

  if (hasTempad) return

  player.tell('§cYou need a Tempad to access chat.')
  event.cancel()
})
