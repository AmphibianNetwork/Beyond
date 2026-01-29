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

// Remove tempad before corpse is created
EntityEvents.death(event => {
  const player = event.entity
  if (!player.isPlayer()) return

  const data = player.persistentData
  let hadTempad = false

  player.inventory.allItems.forEach(stack => {
    if (stack.id == 'tempad:tempad') {
      hadTempad = true
      stack.setCount(0) // delete from inventory so corpse never gets it
    }
  })

  data.putBoolean('restore_tempad', hadTempad)
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