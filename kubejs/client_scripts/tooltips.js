ItemEvents.tooltip((event) => {
  event.add(
    ['avaritia:infinity_pickaxe', 'avaritia:infinity_shovel'],
    'You can right click me.'
  );

  event.add(
    'nuclearcraft:water_collector',
    '200 mB every 2 sec. Put this item inside the Pump(Nuclearcraft). You can Upgrade the speed and energy.'
  );
  event.add(
    'nuclearcraft:compact_water_collector',
    '2000 mB every 2 sec. Put this item inside the Pump(Nuclearcraft). You can Upgrade the speed and energy.'
  );
  event.add(
    'nuclearcraft:dense_water_collector',
    '10000 mB every 2 sec. Put this item inside the Pump(Nuclearcraft). You can Upgrade the speed and energy.'
  );

  event.add(
    'allthemodium:allthemodium_upgrade_smithing_template',
    'Find me inside ancient city chests. 2.5% Chance'
  );

  event.add('enderio:conductive_conduit', 'Energy Transfer Value: 2,024 RF/t');
  event.add('enderio:energetic_conduit', 'Energy Transfer Value: 8,192 RF/t');
  event.add('enderio:vibrant_conduit', 'Energy Transfer Value: 32,768 RF/t');
  event.add('enderio:endsteel_conduit', 'Energy Transfer Value: 131,072 RF/t');
  event.add('enderio:lumium_conduit', 'Energy Transfer Value: 524,288 RF/t');
  event.add(
    'enderio:signalum_conduit',
    'Energy Transfer Value: 2,097,152 RF/t'
  );
  event.add(
    'enderio:enderium_conduit',
    'Energy Transfer Value: 4,194,304 RF/t'
  );
  event.add(
    'enderio:sculk_superconductor_conduit',
    'Energy Transfer Value: 134,217,728 RF/t'
  );
  event.add(
    'enderio:energy_conduit',
    'Energy Transfer Value: 2,147,483,647 RF/t'
  );

    event.add(
    ['kubejs:infinity_7', 'kubejs:infinity_8'],
    'Texture is from Astrageldon. Thank you a lot!'
  );
    event.add(
    'kubejs:infinity_9',
    'Texture is from Elpximso. Thank you a lot!'
  );
  //Master Machinery Ports Tooltips
  //Item Ports
  event.add(
    ['mm:tiny_item_port_input', 'mm:tiny_item_port_output'],
    'Inventory Size: 1x1 = 1 Slot'
  );
  event.add(
    ['mm:small_item_port_input', 'mm:small_item_port_output'],
    'Inventory Size: 2x2 = 4 Slots'
  );
  event.add(
    ['mm:normal_item_port_input', 'mm:normal_item_port_output'],
    'Inventory Size: 3x3 = 9 Slots'
  );
  event.add(
    ['mm:big_item_port_input', 'mm:big_item_port_output'],
    'Inventory Size: 4x4 = 16 Slots'
  );
  event.add(
    ['mm:enormous_item_port_input', 'mm:enormous_item_port_output'],
    'Inventory Size: 5x5 = 25 Slots'
  );
  event.add(
    ['mm:gigantic_item_port_input', 'mm:gigantic_item_port_output'],
    'Inventory Size: 6x6 = 36 Slots'
  );
  event.add(
    ['mm:colossal_item_port_input', 'mm:colossal_item_port_output'],
    'Inventory Size: 6x8 = 48 Slots'
  );
  event.add(
    ['mm:titanic_item_port_input', 'mm:titanic_item_port_output'],
    'Inventory Size: 8x12 = 96 Slots'
  );
  //Fluid Ports
  event.add(
    ['mm:small_fluid_port_input', 'mm:small_fluid_port_output'],
    'Tank Capacity: 640,000 mB'
  );
  event.add(
    ['mm:normal_fluid_port_input', 'mm:normal_fluid_port_output'],
    'Tank Capacity: 2,560,000 mB'
  );
  event.add(
    ['mm:big_fluid_port_input', 'mm:big_fluid_port_output'],
    'Tank Capacity: 10,240,000 mB'
  );
  event.add(
    ['mm:enormous_fluid_port_input', 'mm:enormous_fluid_port_output'],
    'Tank Capacity: 163,840,000 mB'
  );
  event.add(
    ['mm:gigantic_fluid_port_input', 'mm:gigantic_fluid_port_output'],
    'Tank Capacity: 2,147,483,647 mB'
  );
  //Energy Ports
  event.add(
    ['mm:tiny_energy_port_input', 'mm:tiny_energy_port_output'],
    'Energy Capacity: 25,000 FE, Max Input: 5,000 FE/t, Max Output: 2,500 FE/t'
  );
    event.add(
    ['mm:small_energy_port_input', 'mm:small_energy_port_output'],
    'Energy Capacity: 100,000 FE, Max Input: 20,000 FE/t, Max Output: 10,000 FE/t'
  );
    event.add(
    ['mm:normal_energy_port_input', 'mm:normal_energy_port_output'],
    'Energy Capacity: 1,000,000 FE, Max Input: 200,000 FE/t, Max Output: 100,000 FE/t'
  );
    event.add(
    ['mm:big_energy_port_input', 'mm:big_energy_port_output'],
    'Energy Capacity: 10,000,000 FE, Max Input: 2,000,000 FE/t, Max Output: 1,000,000 FE/t'
  );
    event.add(
    ['mm:enormous_energy_port_input', 'mm:enormous_energy_port_output'],
    'Energy Capacity: 25,000,000 FE, Max Input: 5,000,000 FE/t, Max Output: 2,500,000 FE/t'
  );
    event.add(
    ['mm:gigantic_energy_port_input', 'mm:gigantic_energy_port_output'],
    'Energy Capacity/ Max In- and Output: 2,147,483,647 FE'
  );
  //Mekanism Gas Ports
  event.add(
    ['mm:colossal_gas_port_input', 'mm:colossal_gas_port_output'],
    'Gas Capacity: 2,147,483,647 mB'
  );

  event.addAdvanced(
    ['mm:multi_compactor_controller'],
    (item, advanced, text) => {
      text.add(1, Text.white('You will get the Philosopher Stone and'));
      text.add(2, Text.white('the Master Infusion Crystal back.'));
      text.add(3, Text.white('They dont get consumed.'));
    }
  );

  event.addAdvanced(
    [
      'avaritia:neutron_pile',
      'avaritia:neutron_nugget',
      'avaritia:neutron_ingot',
    ],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gold(),
          Text.of('Shift ').yellow(),
          Text.of('to see more info.').gold(),
        ]);
      } else {
        text.add(
          1,
          Text.green('Build a Neutron Collector. Good Luck!').bold(true)
        );
      }
    }
  );

  event.addAdvanced(['armorplus:lava_crystal'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of('to see more info.').gold(),
      ]);
    } else {
      text.add(1, Text.green('Trow me in Lava to get Infused Lava Crystal'));
    }
    text.remove(2);
  });

  event.addAdvanced(['armorplus:frost_crystal'], (item, advanced, text) => {
    if (!event.shift) {
      text.remove(1);
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of('to see more info.').gold(),
      ]);
    } else {
      text.add(
        1,
        Text.green(
          'Trow me on the ground and use "Engraved Thunder" or "Lightning Knife" (1 time use) to get Infused Frost Crystal'
        )
      ),
        text.add(
          2,
          Text.white(
            'Or trow a Trident at a mob with channeling while a thunderstorm is occurring. Or use the Mechanical Empowerer'
          )
        );
      text.remove(3);
    }
  });

  event.addAdvanced(
    [
      'kubejs:arcmetal_ore',
      'kubejs:solarmetal_ore',
      'kubejs:plasteel_ore',
      'kubejs:voidmetal_ore',
    ],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gold(),
          Text.of('Shift ').yellow(),
          Text.of('to see more info.').gold(),
        ]);
      } else {
        text.add(1, Text.green('Find me inside the Mining Dimension'));
      }
    }
  );

  event.addAdvanced(
    ['born_in_chaos_v1:chaos_component'],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gold(),
          Text.of('Shift ').yellow(),
          Text.of('to see more info.').gold(),
        ]);
      } else {
        text.add(
          1,
          Text.green(
            'Brewing/ Potion Station --> 1 Seed of Chaos and 3 Water Bottle + a blaze powder'
          )
        );
      }
    }
  );

  event.addAdvanced(['occultism:iesnium_ore'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of('to see more info.').gold(),
      ]);
    } else {
      text.add(
        1,
        Text.green('Find me inside the Nether Mining Dimension. Y-Level 0-50')
      );
    }
  });

  event.addAdvanced(
    [
      'integrateddynamics:energy_battery_creative',
      'evolvedmekanism:creative_personal_barrel',
      'evolvedmekanism:creative_personal_chest',
      'mekanism:creative_energy_cube',
      'mekanism:creative_chemical_tank',
      'mm:advanced_awakening_altar_controller',
      'botanicalextramachinery:catalyst_mana_infinity',
      'botanicalmachinery:mana_battery_creative',
    ],
    (item, advanced, text) => {
      text.add(1, Text.red('Recipe added by Kem5540. Thanks a lot!'));
    }
  );

  event.addAdvanced(
    ['pneumaticcraft:creative_compressor'],
    (item, advanced, text) => {
      text.add(1, Text.red('Recipe added by Itz_izumito. Thanks a lot!'));
    }
  );

  event.addAdvanced(
    [
      'born_in_chaos_v1:lord_pumpkinheads_hat_helmet',
      'born_in_chaos_v1:transmuting_elixir',
    ],
    (item, advanced, text) => {
      text.add(
        1,
        Text.green(
          'Search a Infernal Evil Pumpkin and right click it with a Transmutaion Elixir to spawn Lord Pumkinhead'
        )
      );
    }
  );

  event.addAdvanced(['kubejs:ultimate_prediction'], (item, advanced, text) => {
    text.add(1, Text.red('Recipe and Item added by realspinelle.'));
    text.add(2, Text.red('Thanks a lot! Dont hate me, hate him :)'));
  });

  event.addAdvanced(['mekanism:creative_bin'], (item, advanced, text) => {
    text.add(1, Text.red('Recipe added by RxDnz.'));
    text.add(2, Text.red('Thanks a lot! Dont hate me, hate him :)'));
  });

  event.addAdvanced(
    ['ae2omnicells:multidimensional_expansion_processor'],
    (item, advanced, text) => {
      text.add(1, Text.red('Recipe added by Anti.'));
    }
  );
});
