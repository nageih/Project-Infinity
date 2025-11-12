ItemEvents.tooltip((event) => {
  event.add(
    'occultism:spirit_attuned_gem',
    'If you want to automate it, build the Fire Attuned Multiblock'
  );
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

  event.add(
    'enderio:conductive_conduit',
    'Energy Transfer Value: 2,024 RF/t'
  );
  event.add(
    'enderio:energetic_conduit',
    'Energy Transfer Value: 8,192 RF/t'
  );
  event.add(
    'enderio:vibrant_conduit',
    'Energy Transfer Value: 32,768 RF/t'
  );
  event.add(
    'enderio:endsteel_conduit',
    'Energy Transfer Value: 131,072 RF/t'
  );
  event.add(
    'enderio:lumium_conduit',
    'Energy Transfer Value: 524,288 RF/t'
  );
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
      (text.add(
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
        ));
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

    event.addAdvanced(['ae2omnicells:multidimensional_expansion_processor'], (item, advanced, text) => {
    text.add(1, Text.red('Recipe added by Anti.'));
  });
});
