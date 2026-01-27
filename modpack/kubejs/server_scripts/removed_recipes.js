////// REMOVING RECIPES /////////
//Crc
ServerEvents.recipes(event => {
    event.remove({ output: "crc:portal_opener" });
})

//Haven Animal Seeds
ServerEvents.recipes(event => {
    event.remove({ output: "havenanimalseeds:axolotl_seed" });
    event.remove({ output: "havenanimalseeds:bee_seed" });
    event.remove({ output: "havenanimalseeds:cow_seed" });
    event.remove({ output: "havenanimalseeds:villager_seed" });
    event.remove({ output: "havenanimalseeds:sniffer_seed" });
    event.remove({ output: "havenanimalseeds:glow_squid_seed" });
})

//Mekanism
ServerEvents.recipes(event => {
    event.remove({ output: "mekanism:atomic_disassembler" });
    event.remove({ output: "mekanism:meka_tool" });
    event.remove({ output: "mekanism:mekasuit_helmet" });
    event.remove({ output: "mekanism:mekasuit_chestplate" });
    event.remove({ output: "mekanism:mekasuit_leggings" });
    event.remove({ output: "mekanism:mekasuit_boots" });
})

//Swords
ServerEvents.recipes(event => {
    event.remove({ output: "minecraft:diamond_sword" });
    event.remove({ output: "minecraft:netherite_sword" });
    event.remove({ output: "netherdungeons:piglin_sword" });
    event.remove({ output: "netherdungeons:wither_skeleton_sword" });
    event.remove({ output: "ae2:certus_quartz_sword" });
    event.remove({ output: "ae2:fluix_sword" });
    event.remove({ output: "ae2:nether_quartz_sword" });
    event.remove({ output: "clanginghowl:advanced_chainsword" });
    event.remove({ output: "clanginghowl:extraterrestrial_sword" });
    event.remove({ output: "manors_bounty:headless_horsemans_cursed_sword" });
    event.remove({ output: "deeperdarker:resonarium_sword" });
    event.remove({ output: "deeperdarker:warden_sword" });
    event.remove({ output: "sgjourney:naquadah_sword" });
})

///////// HIDING ITEMS FROM RECIPE VIEWERS //////////
//Crc
ServerEvents.tags(`item`, event => {
    event.add( `c:hidden_from_recipe_viewers`, "crc:portal_opener" );
})

//Mekanism
ServerEvents.tags(`item`, event => {
    event.add( `c:hidden_from_recipe_viewers`, "mekanism:mekasuit_helmet" );
    event.add( `c:hidden_from_recipe_viewers`, "mekanism:mekasuit_chestplate" );
    event.add( `c:hidden_from_recipe_viewers`, "mekanism:mekasuit_leggings" );
    event.add( `c:hidden_from_recipe_viewers`, "mekanism:mekasuit_boots" );
    event.add( `c:hidden_from_recipe_viewers`, "mekanism:meka_tool" );
})

//Haven Animal Seeds
ServerEvents.tags(`item`, event => {
    event.add( `c:hidden_from_recipe_viewers`, "havenanimalseeds:axolotl_seed" );
    event.add( `c:hidden_from_recipe_viewers`, "havenanimalseeds:bee_seed" );
    event.add( `c:hidden_from_recipe_viewers`, "havenanimalseeds:cow_seed" );
    event.add( `c:hidden_from_recipe_viewers`, "havenanimalseeds:villager_seed" );
    event.add( `c:hidden_from_recipe_viewers`, "havenanimalseeds:sniffer_seed" );
    event.add( `c:hidden_from_recipe_viewers`, "havenanimalseeds:glow_squid_seed" );
})

//Swords
ServerEvents.tags(`item`, event => {
    event.add( `c:hidden_from_recipe_viewers`, "minecraft:diamond_sword" ); 
    event.add( `c:hidden_from_recipe_viewers`, "minecraft:netherite_sword" );
    event.add( `c:hidden_from_recipe_viewers`, "netherdungeons:piglin_sword" );
    event.add( `c:hidden_from_recipe_viewers`, "netherdungeons:wither_skeleton_sword" );
    event.add( `c:hidden_from_recipe_viewers`, "ae2:certus_quartz_sword" );
    event.add( `c:hidden_from_recipe_viewers`, "ae2:fluix_sword" );
    event.add( `c:hidden_from_recipe_viewers`, "ae2:nether_quartz_sword" );
    event.add( `c:hidden_from_recipe_viewers`, "clanginghowl:advanced_chainsword" );
    event.add( `c:hidden_from_recipe_viewers`, "clanginghowl:extraterrestrial_sword" );
    event.add( `c:hidden_from_recipe_viewers`, "manors_bounty:headless_horsemans_cursed_sword" );
    event.add( `c:hidden_from_recipe_viewers`, "deeperdarker:resonarium_sword" );
    event.add( `c:hidden_from_recipe_viewers`, "deeperdarker:warden_sword" );
    event.add( `c:hidden_from_recipe_viewers`, "sgjourney:naquadah_sword" );
})