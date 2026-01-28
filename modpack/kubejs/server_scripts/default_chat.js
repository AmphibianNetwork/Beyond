PlayerEvents.loggedIn(event => {
  const player = event.player

  player.sendSystemMessage(
    Text.gold("Default chat mode is Global. Do /chat local to switch.")
  )
})
