ServerEvents.tick(event => {
  event.server.players.forEach(player => {

    // === SETTINGS ===
    const TARGET_DIM = "deeperdarker:otherside";
    const Y_LIMIT = 128; 
    const RADIATION = "alexscaves:irradiated";

    // Anti-radiation suit pieces
    const SUIT = [
      "alexscaves:hazmat_mask",
      "alexscaves:hazmat_chestplate",
      "alexscaves:hazmat_leggings",
      "alexscaves:hazmat_boots"
    ];

    // =================

    if (player.level.dimension != TARGET_DIM) return;

    if (player.y >= Y_LIMIT) {
      player.removeEffect(RADIATION);
      return;
    }

    let armor = player.getArmorSlots();
    let armorIds = armor.map(a => a.id);

    // ---- OLD SCHOOL CHECK ----
    let hasFullSuit = true;

    for (let i = 0; i < SUIT.length; i++) {
      let found = false;

      for (let j = 0; j < armorIds.length; j++) {
        if (armorIds[j] == SUIT[i]) {
          found = true;
          break;
        }
      }

      if (!found) {
        hasFullSuit = false;
        break;
      }
    }
    // --------------------------

    if (!hasFullSuit) {
      if (!player.hasEffect(RADIATION)) {
        player.potionEffects.add(RADIATION, 220, 4, true, false);
      }
    } else {
      player.removeEffect(RADIATION);
    }

  });
});
