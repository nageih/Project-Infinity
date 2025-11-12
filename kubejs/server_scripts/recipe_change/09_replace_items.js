//replace items
ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: 'extrahnn:upgrade_module_stack' },
    'minecraft:comparator',
    'kubejs:infinity_12'
  );
  event.replaceInput(
    { input: 'bigreactors:yellorium_ingot' },
    'bigreactors:yellorium_ingot',
    'mekanism:ingot_uranium'
  );
  event.replaceInput(
    { output: 'botania:spark', input: 'minecraft:gold_nugget' },
    'minecraft:gold_nugget',
    'minecraft:iron_nugget'
  );
  event.replaceInput(
    { input: 'avaritia:eternal_singularity' },
    'avaritia:eternal_singularity',
    'extendedcrafting:ultimate_singularity'
  );
  event.replaceInput(
    { input: 'avaritia:singularity' },
    'avaritia:singularity',
    'extendedcrafting:ultimate_singularity'
  );
  event.replaceInput(
    { output: 'cyclic:soulstone' },
    'thermal:netherite_nugget',
    'botanicalextramachinery:shadow_dragonstone'
  );
  event.replaceInput(
    { output: 'projecte:repair_talisman' },
    '#bookshelf:strings',
    'botanicalextramachinery:shadow_dragonstone'
  );
  event.replaceInput(
    { output: 'voidminers:ultimate_frame' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:ultimate_energy_modifier' },
    'minecraft:redstone',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:ultimate_speed_modifier' },
    'minecraft:sugar',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:ultimate_item_modifier' },
    'minecraft:diamond',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_frame' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_efficiency_modifier' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_weather_modifier' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_frame' },
    'minecraft:gold_ingot',
    'voidminers:solar_ultimate_block'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_efficiency_modifier' },
    'minecraft:redstone_block',
    'voidminers:solar_ultimate_block'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_weather_modifier' },
    'minecraft:phantom_membrane',
    'voidminers:solar_ultimate_block'
  );
  event.replaceInput(
    { output: 'voidminers:ultimate_block' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_block' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'advanced_ae:hp_buffer_card' },
    'ae2:portable_item_cell_64k',
    'ae2omnicells:quantum_omni_cell_component_16m'
  );
  event.replaceInput(
    { output: 'advanced_ae:evasion_card' },
    'ae2:speed_card',
    'ae2omnicells:quantum_omni_cell_component_16m'
  );
  event.replaceInput(
    { output: 'industrialforegoing:enchantment_applicator' },
    'thermal:gold_gear',
    'allthemodium:unobtainium_gear'
  );
});
