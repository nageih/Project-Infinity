StartupEvents.registry('item', (e) => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  e.create('zahraanite');

  e.create('ultimate_gem')
    .tag('balm:gems')
    .tag('forge:gems')
    .displayName('§dUltimate Gem')
    .maxStackSize(64)
    .texture('kubejs:item/components/ultimate_gem')
    .glow(true);

  e.create('ultimate_prediction')
    .tag('kubejs:ultimate_prediction')
    .displayName('§dUltimate Prediction')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_prediction');

  e.create('ultimate_chemlib_ingot')
    .tag('kubejs:ultimate_chemlib_ingot')
    .displayName('§dUltimate Chemlib Ingot')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_chemlib_ingot');

  e.create('allthemodium_mesh')
    .tag('exdeorum:sieve_meshes')
    .displayName('§6Allthemodium Mesh')
    .maxStackSize(64)
    .texture('kubejs:item/allthemodium_mesh')
    .glow(true);

  e.create('vibranium_mesh')
    .tag('exdeorum:sieve_meshes')
    .displayName('§aVibranium Mesh')
    .maxStackSize(64)
    .texture('kubejs:item/vibranium_mesh')
    .glow(true);

  e.create('left_dragon_heart')
    .tag('kubejs:left_dragon_heart')
    .tag('kubejs:dragon_heart')
    .displayName('§aLeft Dragon Heart')
    .maxStackSize(64)
    .texture('kubejs:item/left_dragon_heart')
    .glow(true);

  e.create('right_dragon_heart')
    .tag('kubejs:right_dragon_heart')
    .tag('kubejs:dragon_heart')
    .displayName('§aRight Dragon Heart')
    .maxStackSize(64)
    .texture('kubejs:item/right_dragon_heart')
    .glow(true);

  e.create('ultimate_heart')
    .tag('kubejs:ultimate_heart')
    .displayName('§dUltimate Heart')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_heart');

  e.create('wither_heart')
    .tag('kubejs:wither_heart')
    .displayName('§7Wither Heart')
    .maxStackSize(64)
    .texture('kubejs:item/wither_heart');

  e.create('warden_heart')
    .tag('kubejs:warden_heart')
    .displayName('§1Warden Heart')
    .maxStackSize(64)
    .texture('kubejs:item/warden_heart');

  e.create('creeper_heart')
    .tag('kubejs:creeper_heart')
    .displayName('§2Creeper Heart')
    .maxStackSize(64)
    .texture('kubejs:item/creeper_heart');

  e.create('blaze_heart')
    .tag('kubejs:blaze_heart')
    .displayName('§6Blaze Heart')
    .maxStackSize(64)
    .texture('kubejs:item/blaze_heart');

  //infinity 1-12 items
  e.create('infinity_1')
    .tag('forge:ingots/infinity_1')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1');
  e.create('infinity_1_333333')
    .displayName('Infinity 1.333333')
    .tag('forge:ingots/infinity_1_333333')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1_333333');
  e.create('infinity_1_666666')
    .displayName('Infinity 1.666666')
    .tag('forge:ingots/infinity_1_666666')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1_666666');
  e.create('infinity_1_999999')
    .displayName('Infinity 1.999999')
    .tag('forge:ingots/infinity_1_999999')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1_999999');
  e.create('infinity_2')
    .tag('forge:ingots/infinity_2')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_2');
  e.create('infinity_3')
    .tag('forge:ingots/infinity_3')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_3');
  e.create('infinity_4')
    .tag('forge:ingots/infinity_4')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_4');
  e.create('infinity_5')
    .tag('forge:ingots/infinity_5')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_5');
  e.create('infinity_6')
    .tag('forge:ingots/infinity_6')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_6');
  e.create('infinity_7')
    .tag('forge:ingots/infinity_7')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_7');
  e.create('infinity_8')
    .tag('forge:ingots/infinity_8')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_8');
  e.create('infinity_9')
    .tag('forge:ingots/infinity_9')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_9');
  e.create('infinity_10')
    .tag('forge:ingots/infinity_10')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_10');
  e.create('infinity_11')
    .tag('forge:ingots/infinity_11')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_11');
  e.create('infinity_12')
    .tag('forge:ingots/infinity_12')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_12');

  //silent items
  function createingot (e, input) {
    e.create(input)
      .tag('forge:ingots/' + input)
      .tag('ae2:metal_ingots')
      .tag('forge:ingots')
      .tag('balm:ingots')
      .texture('kubejs:item/silent/' + input);
  }

  createingot(e, 'arcmetal_ingot');
  createingot(e, 'azure_electrum_ingot');
  createingot(e, 'azure_silver_ingot');
  createingot(e, 'blaze_gold_ingot');
  createingot(e, 'bunny_steel_ingot');
  createingot(e, 'crimson_iron_ingot');
  createingot(e, 'crimson_steel_ingot');
  createingot(e, 'crystalline_alloy');
  createingot(e, 'midnight_iron_ingot');
  createingot(e, 'plasteel_ingot');
  createingot(e, 'solarmetal_ingot');
  createingot(e, 'tyrian_steel_ingot');
  createingot(e, 'voidmetal_ingot');
  createingot(e, 'sculk_alloy_ingot');

  function createdust (e, input) {
    e.create(input)
      .tag('forge:dusts/' + input)
      .tag('forge:dusts')
      .tag('c:dusts')
      .texture('kubejs:item/silent/' + input);
  }

  createdust(e, 'azure_electrum_dust');
  createdust(e, 'azure_silver_dust');
  createdust(e, 'blaze_gold_dust');
  createdust(e, 'crimson_iron_dust');
  createdust(e, 'crimson_steel_dust');
  createdust(e, 'starmetal_dust');
  createdust(e, 'tyrian_steel_dust');

  function createraw (e, input) {
    e.create(input)
      .tag('c:raw_materials/' + input)
      .tag('forge:raw_materials/' + input)
      .tag('forge:raw_materials')
      .texture('kubejs:item/silent/' + input);
  }

  createraw(e, 'raw_arcmetal');
  createraw(e, 'raw_plasteel');
  createraw(e, 'raw_solarmetal');
  createraw(e, 'raw_voidmetal');

  //starmetal ingot
  e.create('starmetal_ingot')
    .tag('forge:ingots/starmetal_ingot')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots');

  //coins
  e.create('apotheotic_coin').tag('minecraft:beacon_payment_items');
  e.create('infused_coin').tag('minecraft:beacon_payment_items');
  e.create('ascended_coin').tag('minecraft:beacon_payment_items');

  e.create('azure_silver_ore_chunk').tag('exdeorum:ore_chunks');

  //tier 1-6 crafting seeds
  e.create('tier1_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier1_crafting_seed')
    .displayName('§aTier 1 Crafting Seed');
  e.create('tier2_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier2_crafting_seed')
    .displayName('§2Tier 2 Crafting Seed');
  e.create('tier3_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier3_crafting_seed')
    .displayName('§6Tier 3 Crafting Seed');
  e.create('tier4_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier4_crafting_seed')
    .displayName('§9Tier 4 Crafting Seed');
  e.create('tier5_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier5_crafting_seed')
    .displayName('§4Tier 5 Crafting Seed');
  e.create('tier6_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier6_crafting_seed')
    .displayName('§5Tier 6 Crafting Seed');

  //tier 1-6 super essence and ultimate essence
  e.create('tier1_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier1_super_essence')
    .displayName('§aTier 1 Super Essence');
  e.create('tier2_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier2_super_essence')
    .displayName('§2Tier 2 Super Essence');
  e.create('tier3_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier3_super_essence')
    .displayName('§6Tier 3 Super Essence');
  e.create('tier4_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier4_super_essence')
    .displayName('§9Tier 4 Super Essence');
  e.create('tier5_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier5_super_essence')
    .displayName('§4Tier 5 Super Essence');
  e.create('tier6_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier6_super_essence')
    .displayName('§5Tier 6 Super Essence');
  e.create('infinity_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/infinity_essence')
    .displayName('§dInfinity Essence');

  //Chaotic Essence
  e.create('chaotic_essence')
    .maxStackSize(64)
    .displayName('§5Chaotic Essence')
    .texture('kubejs:item/chaotic_essence')
    .glow(true)
    .tag('kubejs:chaotic_essence');

  //Chaotic Essence
  e.create('chaos_guardian_prediction')
    .maxStackSize(64)
    .displayName('§5Chaos Guardian Prediction')
    .texture('kubejs:item/chaos_guardian_prediction')
    .glow(true)
    .tag('kubejs:chaos_guardian_prediction');

  //Industrial Foregoing Addons
  function createAddon (e, input) {
    e.create(input)
      .texture('kubejs:item/industrial_forgegoing/' + input)
      .tag('industrialforegoing:addon')
      .displayName(
        input
          .replace(/_/g, ' ')
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          ) + ' Dummy Item'
      );
  }
  createAddon(e, 'efficiency_addon_1');
  createAddon(e, 'efficiency_addon_2');
  createAddon(e, 'efficiency_addon_3');
  createAddon(e, 'efficiency_addon_4');
  createAddon(e, 'efficiency_addon_5');
  createAddon(e, 'processing_addon_1');
  createAddon(e, 'processing_addon_2');
  createAddon(e, 'processing_addon_3');
  createAddon(e, 'processing_addon_4');
  createAddon(e, 'processing_addon_5');
  createAddon(e, 'speed_addon_1');
  createAddon(e, 'speed_addon_2');
  createAddon(e, 'speed_addon_3');
  createAddon(e, 'speed_addon_4');
  createAddon(e, 'speed_addon_5');
});

StartupEvents.registry('block', (event) => {
  event
    .create('compressed_block_of_gunpowder')
    .displayName('Compressed Block of Gunpowder')
    .soundType('gravel')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/compressed_block_of_gunpowder');

  event
    .create('infinity_9_block')
    .displayName('Infinity 9 Block')
    .soundType('metal')
    .hardness(1.2)
    .resistance(2.0)
    .textureAll('kubejs:block/silent/infinity_9_block');

  event
    .create('infinity_8_block')
    .displayName('Infinity 8 Block')
    .soundType('metal')
    .hardness(1.2)
    .resistance(2.0)
    .textureAll('kubejs:block/silent/infinity_8_block');

  event
    .create('compressed_slate')
    .displayName('Compressed Slate')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/compressed_slate');

  event
    .create('double_compressed_slate')
    .displayName('Double Compressed Slate')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/double_compressed_slate');

  event
    .create('double_compressed_iron_block')
    .displayName('Double Compressed Iron Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/double_compressed_iron_block');

  event
    .create('radiance_alloy_block')
    .displayName('Radiance Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/radiance_alloy_block');

  event
    .create('thermonuclear_alloy_block')
    .displayName('Thermonuclear Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/thermonuclear_alloy_block');

  event
    .create('shining_alloy_block')
    .displayName('Shining Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/shining_alloy_block');

  event
    .create('spectrum_alloy_block')
    .displayName('Spectrum Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/spectrum_alloy_block');

  event
    .create('triple_compressed_iron_block')
    .displayName('Triple Compressed Iron Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/triple_compressed_iron_block');

  event
    .create('pink_slime_block')
    .displayName('Pink Slime Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/pink_slime_block');

  event
    .create('compressed_glass')
    .displayName('Compressed Glass')
    .soundType('glass')
    .glassSoundType()
    .hardness(0.5)
    .resistance(0.7)
    .defaultCutout()
    .textureAll('kubejs:block/silent/compressed_glass');

  event
    .create('chaotic_essence_block')
    .displayName('§5Chaotic Essence Block')
    .soundType('metal')
    .hardness(1.5)
    .resistance(3.0)
    .textureAll('kubejs:block/silent/chaotic_essence_block')
    .tag('kubejs:chaotic_essence_block');

  event
    .create('starmetal_block')
    .displayName('§1Starmetal Block')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.5)
    .textureAll('kubejs:block/silent/starmetal_block')
    .tag('kubejs:starmetal_block');

  event
    .create('empowered_super_block')
    .displayName('§dEmpowered Super Block')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.5)
    .textureAll('kubejs:block/silent/empowered_super_block')
    .tag('kubejs:empowered_super_block');
  event
    .create('auto_mechanical_sieve')
    .displayName('Auto Mechanical Sieve')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.5)
    .textureAll('kubejs:block/silent/auto_mechanical_sieve')
    .tag('kubejs:auto_mechanical_sieve');
});

StartupEvents.registry('block', (e) => {
  function createblock (e, input1, input2) {
    e.create(input1)
      .displayName(input2)
      .tag('forge:storage_blocks/' + input1)
      .tag('forge:storage_blocks')
      .tag('c:storage_blocks')
      .tagBlock('mineable/pickaxe')
      .soundType('metal')
      .resistance(6)
      .hardness(5)
      .requiresTool(true)
      .textureAll('kubejs:block/silent/' + input1);
  }

  createblock(e, 'arcmetal_block', 'Arcmetal Block');
  createblock(e, 'azure_electrum_block', 'Azure Electrum Block');
  createblock(e, 'azure_silver_block', 'Azure Silver Block');
  createblock(e, 'blaze_gold_block', 'Blaze Gold Block');
  createblock(e, 'bunny_steel_block', 'Bunny Steel Block');
  createblock(e, 'midnight_iron_block', 'Midnight Iron Block');
  createblock(e, 'plasteel_block', 'Plasteel Block');
  createblock(e, 'sculk_alloy_block', 'Sculk Alloy Block');
  createblock(e, 'solarmetal_block', 'Solarmetal Block');
  createblock(e, 'voidmetal_block', 'Voidmetal Block');

  function createore (e, input1, input2) {
    e.create(input1)
      .displayName(input2)
      .tagBlock('mineable/pickaxe')
      .soundType('metal')
      .resistance(6)
      .hardness(5)
      .requiresTool(true)
      .textureAll('kubejs:block/silent/' + input1);
  }

  createore(e, 'arcmetal_ore', 'Arcmetal Ore');
  createore(e, 'azure_silver_ore', 'Azure Silver Ore');
  createore(e, 'plasteel_ore', 'Plasteel Ore');
  createore(e, 'solarmetal_ore', 'Solarmetal Ore');
  createore(e, 'voidmetal_ore', 'Voidmetal Ore');
});

ItemEvents.modification((event) => {
  event.modify('rftoolsbase:infused_diamond', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('dimensionalpocketsii:dimensional_ingot_enhanced', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('silentgems:soul_gem', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('cataclysm:void_core', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('minecraft:ender_pearl', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('exdeorum:sculk_core', (item) => {
    item.maxStackSize = 64;
  });
  event.modify(
    [
      'extrahnn:upgrade_speed',
      'extrahnn:upgrade_module_stack',
      'extrahnn:upgrade_data_kill',
    ],
    (item) => {
      item.maxStackSize = 1;
    }
  );
});

///////everything under this text is deactivated and will be implemented

StartupEvents.registry('item', (e) => {
  //microverse rockets
  e.create('microminer_t1')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t1')
    .glow(true);
  e.create('microminer_t2')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t2')
    .glow(true);
  e.create('microminer_t3')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t3')
    .glow(true);
  e.create('microminer_t4')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t4')
    .glow(true);
  e.create('microminer_t4_mobkiller')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t4half')
    .glow(true);
  e.create('microminer_t5')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t5')
    .glow(true);
  e.create('microminer_t6')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t6')
    .glow(true);
  e.create('microminer_t7')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t7')
    .glow(true);
  e.create('microminer_t8')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t8')
    .glow(true);
  e.create('microminer_t8_mobdestroyer')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t8half')
    .glow(true);
  e.create('microminer_t9')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t9')
    .glow(true);
  e.create('microminer_t10')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t10')
    .glow(true);
  e.create('microminer_t11')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t11_base')
    .glow(true);
  e.create('microminer_t12')
    .maxStackSize(64)
    .texture('kubejs:item/microverse/microminer_t12')
    .glow(true);
});

StartupEvents.registry('item', (e) => {
  // Microminer Components
  e.create('components/basic_mining_laser').displayName('§eBasic Mining Laser');
  e.create('components/reinforced_mining_laser').displayName(
    '§bReinforced Mining Laser'
  );
  e.create('components/supercharged_laser_array').displayName(
    '§eSupercharged Laser Array'
  );
  e.create('components/basic_micro_miner_guidance_system').displayName(
    '§eBasic Micro Miner Guidance System'
  );
  e.create('components/advanced_micro_miner_guidance_system').displayName(
    '§eAdvanced Micro Miner Guidance System'
  );
  e.create('components/gem_sensor').displayName('Gemstone Sensor');
  e.create('components/warp_engine').displayName('§dWarp Engine');
  e.create('components/universal_navigator').displayName(
    '§dUniversal Navigator'
  );
  e.create('components/extradimensional_navigator')
    .displayName('§dExtradimensional Navigator')
    .texture('kubejs:item/microverse_components/eternium_heavy_plating');
  e.create('universe_resistant_neutronium_heavy_plating')
    .displayName('§dUniverse Resistant Neutronium Heavy Plating')
    .texture('kubejs:item/microverse_components/neutronium_heavy_plating');
  e.create('elementally_infused_matrix_heavy_plating')
    .displayName('§dElementally Infused Matrix Heavy Plating')
    .texture('kubejs:item/microverse_components/matrix_heavy_plating');
  e.create('dimensionally_stabilized_infinity_heavy_plating')
    .displayName('§dDimensionally Stabilized Infinity Heavy Plating')
    .texture('kubejs:item/microverse_components/infinity_heavy_plating');
  e.create('causality_lead_heavy_plating')
    .displayName('§1Lead Heavy Plating')
    .texture('kubejs:item/microverse_components/lead_heavy_plating');
  e.create('components/quantum_flux').displayName('§dQuantum Flux');

  //Data
  e.create('components/impossible_realm_data').displayName(
    '§bImpossible Realm Data'
  );
  e.create('components/dragon_lair_data').displayName('§dDragon Lair Data');
  e.create('components/wither_realm_data').displayName('§dWither Realm Data');
  e.create('components/deep_dark_data').displayName('§dDeep Dark Data');
  e.create('components/lair_of_the_warden_data').displayName(
    '§dLair Of The Warden Data'
  );
  e.create('components/stellar_creation_data').displayName(
    '§bStellar Creation Data'
  );
  e.create('components/universe_creation_data').displayName(
    '§dUniverse Creation Data'
  );
  e.create('components/shattered_star_data').displayName(
    '§dShattered Star Data'
  );
  e.create('components/shattered_universe_data').displayName(
    '§dShattered Universe Data'
  );
  e.create('components/corrupted_universe_data').displayName(
    '§dCorrupted Universe Data'
  );

  // End Game Data
  e.create('creative_tank_data')
    .displayName('Creative Quantum Tank Data')
    .texture('kubejs:item/components/creative_tank_data');
  e.create('creative_storage_data')
    .displayName('Creative Storage Data')
    .texture('kubejs:item/components/creative_storage_data');
  e.create('creative_computation_data')
    .displayName('Creative Computation Data')
    .texture('kubejs:item/components/creative_computation_data');
  e.create('creative_energy_data')
    .displayName('Creative Energy Data')
    .texture('kubejs:item/components/creative_energy_data');
});

StartupEvents.registry('block', (e) => {
  e.create('warp_core')
    .displayName('Warp Core')
    .soundType('metal')
    .resistance(6)
    .hardness(5)
    .tagBlock('mineable/pickaxe')
    .requiresTool(true)
    .textureAll('kubejs:block/controller_core/warp_core');

  e.create('warp_controller')
    .displayName('Warp Controller')
    .soundType('metal')
    .resistance(6)
    .hardness(5)
    .tagBlock('mineable/pickaxe')
    .requiresTool(true)
    .textureAll('kubejs:block/controller_core/warp_controller');

  e.create('universal_warp_core')
    .displayName('Universal Warp Core')
    .soundType('metal')
    .resistance(6)
    .hardness(5)
    .tagBlock('mineable/pickaxe')
    .requiresTool(true)
    .textureAll('kubejs:block/controller_core/universal_warp_core');

  e.create('universal_warp_controller')
    .displayName('Universal Warp Controller')
    .soundType('metal')
    .resistance(6)
    .hardness(5)
    .tagBlock('mineable/pickaxe')
    .requiresTool(true)
    .textureAll('kubejs:block/controller_core/universal_warp_controller');
});
