ServerEvents.recipes((event) => {
  function crush(event, input, output_count, output) {
    const ingredient = input.startsWith('#')
      ? { tag: input.substring(1) }
      : { item: input };

    event
      .custom({
        type: 'mekanism:crushing',
        input: {
          ingredient: ingredient,
        },
        output: {
          count: output_count,
          item: output,
        },
      })
      .id('mek_' + output.replace(/[:]/g, '_').toLowerCase());
  }

  crush(
    event,
    'allthemodium:unobtainium_vibranium_alloy_ingot',
    1,
    'allthemodium:unobtainium_vibranium_alloy_dust'
  );
  crush(event, 'kubejs:blaze_gold_ingot', 1, 'kubejs:blaze_gold_dust');
  crush(event, 'kubejs:azure_silver_ingot', 1, 'kubejs:azure_silver_dust');
  crush(event, 'kubejs:azure_electrum_ingot', 1, 'kubejs:azure_electrum_dust');
  crush(event, 'kubejs:crimson_iron_ingot', 1, 'kubejs:crimson_iron_dust');
  crush(event, 'minecraft:sand', 2, 'exdeorum:dust');
  crush(event, 'kubejs:arcmetal_ore', 2, 'kubejs:raw_arcmetal');
  crush(event, 'kubejs:solarmetal_ore', 2, 'kubejs:raw_solarmetal');
  crush(event, 'kubejs:plasteel_ore', 2, 'kubejs:raw_plasteel');
  crush(event, 'kubejs:voidmetal_ore', 2, 'kubejs:raw_voidmetal');
  crush(event, '#forge:ingots/graphite', 1, 'bigreactors:graphite_dust');

  function alloying(
    event,
    input_amount1,
    input_item1,
    input_amount2,
    input_item2,
    mainAmount,
    mainInput,
    output,
    output_count
  ) {
    event
      .custom({
        type: 'evolvedmekanism:alloying',
        extraInput: {
          amount: input_amount1,
          ingredient: {
            item: input_item1,
          },
        },
        secondExtraInput: {
          amount: input_amount2,
          ingredient: {
            item: input_item2,
          },
        },
        mainInput: {
          amount: mainAmount,
          ingredient: {
            item: mainInput,
          },
        },
        output: {
          item: output,
          count: output_count,
        },
      })
      .id('alloying_' + output);
  }

  function combining(
    event,
    input_amount1,
    input_item1,
    mainAmount,
    mainInput,
    output,
    output_count
  ) {
    event
      .custom({
        type: 'mekanism:combining',
        extraInput: {
          amount: input_amount1,
          ingredient: {
            item: input_item1,
          },
        },
        mainInput: {
          amount: mainAmount,
          ingredient: {
            item: mainInput,
          },
        },
        output: {
          item: output,
          count: output_count,
        },
      })
      .id('combining' + output);
  }

  alloying(
    event,
    4,
    'evolvedmekanism:alloy_exoversal',
    4,
    'voidminers_reforged:rosarium',
    1,
    'kubejs:infinity_10',
    'evolvedmekanism:alloy_creative',
    1
  );
  alloying(
    event,
    1,
    'enderio:pulsating_powder',
    1,
    'actuallyadditions:diamatine_crystal_shard',
    1,
    'minecraft:gold_ingot',
    'kubejs:crystalline_alloy',
    1
  );
  alloying(
    event,
    2,
    'thermal_extra:soul_sand_dust',
    1,
    'minecraft:iron_ingot',
    1,
    'minecraft:copper_ingot',
    'thermal_extra:soul_infused_ingot',
    1
  );
  alloying(
    event,
    2,
    'thermal:diamond_dust',
    1,
    'minecraft:netherite_scrap',
    1,
    'minecraft:echo_shard',
    'thermal_extra:abyssal_ingot',
    1
  );
  alloying(
    event,
    1,
    'thermal:nickel_ingot',
    1,
    'minecraft:shulker_shell',
    1,
    'thermal:lead_ingot',
    'thermal_extra:shellite_ingot',
    1
  );
  alloying(
    event,
    2,
    'thermal:tin_ingot',
    1,
    'minecraft:blaze_rod',
    1,
    'minecraft:obsidian',
    'thermal_extra:twinite_ingot',
    1
  );
  alloying(
    event,
    1,
    'thermal:nickel_ingot',
    1,
    'thermal_extra:ancient_dust',
    1,
    'minecraft:netherite_scrap',
    'thermal_extra:dragonsteel_ingot',
    1
  );
  combining(
    event,
    1,
    'minecraft:ender_pearl',
    1,
    'enderio:energetic_alloy_ingot',
    'enderio:vibrant_alloy_ingot',
    1
  );
  combining(
    event,
    1,
    'minecraft:ender_pearl',
    1,
    'minecraft:iron_ingot',
    'enderio:pulsating_alloy_ingot',
    1
  );
  combining(
    event,
    1,
    'thermal:silver_ingot',
    1,
    'minecraft:gold_ingot',
    'thermal:electrum_ingot',
    1
  );
});
