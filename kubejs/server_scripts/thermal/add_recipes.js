ServerEvents.recipes((event) => {
  event.recipes.thermal
    .crucible(Fluid.of('kubejs:molten_basalz', 1000), 'thermal:basalz_rod')
    .id('thermal:rod_to_molten_basalz');
  event.recipes.thermal
    .crucible(Fluid.of('kubejs:molten_blizz', 1000), 'thermal:blizz_rod')
    .id('thermal:rod_to_molten_blizz');
  event.recipes.thermal
    .crucible(Fluid.of('kubejs:molten_blitz', 1000), 'thermal:blitz_rod')
    .id('thermal:rod_to_molten_blitz');
  event.recipes.thermal
    .crucible(
      Fluid.of('mob_grinding_utils:fluid_xp', 50),
      'actuallyadditions:solidified_experience'
    )
    .id('thermal:solidified_experience_to_xp');

  event.recipes.thermal
    .press('kubejs:infinity_5', '9x kubejs:infinity_4')
    .id('kubejs:infinity_5_2');

  event.recipes.thermal.pulverizer(
    'kubejs:azure_electrum_dust',
    'kubejs:azure_electrum_ingot'
  );
  event.recipes.thermal.pulverizer(
    'kubejs:blaze_gold_dust',
    'kubejs:blaze_gold_ingot'
  );
  event.recipes.thermal.pulverizer(
    'kubejs:azure_silver_dust',
    'kubejs:azure_silver_ingot'
  );

  event.recipes.thermal
    .bottler('kubejs:infinity_2', [
      Fluid.of('kubejs:molten_basalz', 500),
      '3x kubejs:infinity_1',
    ])
    .energy(10000);
  event.recipes.thermal
    .bottler('kubejs:infinity_3', [
      Fluid.of('kubejs:molten_blizz', 500),
      '3x kubejs:infinity_2',
    ])
    .energy(10000);
  event.recipes.thermal
    .bottler('kubejs:infinity_4', [
      Fluid.of('kubejs:molten_blitz', 500),
      '3x kubejs:infinity_3',
    ])
    .energy(10000);

  const ingots = [
    'common_ore_library:cobalt_ingot',
    'common_ore_library:iridium_ingot',
    'common_ore_library:platinum_ingot',
    'common_ore_library:tungsten_ingot',
    'common_ore_library:zinc_ingot',
    'common_ore_library:brass_ingot',
    'common_ore_library:manyullyn_ingot',
  ];

  const plates = [
    'common_ore_library:cobalt_plate',
    'common_ore_library:iridium_plate',
    'common_ore_library:platinum_plate',
    'common_ore_library:tungsten_plate',
    'common_ore_library:zinc_plate',
    'common_ore_library:brass_plate',
    'common_ore_library:manyullyn_plate',
  ];

  event.recipes.thermal.press(
    'common_ore_library:aluminum_plate',
    'common_ore_library:aluminum_ingot'
  );

  for (let i = 0; i < ingots.length; i++) {
    event.recipes.thermal.press(plates[i], ingots[i]);
  }
});
