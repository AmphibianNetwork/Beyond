PlayerEvents.loggedIn(event => {
  const player = event.player

  // Run your mod's command automatically
  player.runCommandSilent("chat global")

  player.sendSystemMessage(
    Text.gold("Default chat mode is Global. Do /chat local to switch.")
  )
})
