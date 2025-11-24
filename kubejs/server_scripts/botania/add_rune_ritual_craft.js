ServerEvents.recipes((event) => {
  // Rune Ritual Recipe for Solar Ultimate Panel
  event
    .custom({
      type: 'mythicbotany:rune_ritual',
      center: {
        item: 'voidminers_reforged:solar_rosarium_panel',
      },
      group: 'rune_rituals',
      inputs: [
        {
          item: 'botanicalextramachinery:crimson_ingot',
        },
        {
          item: 'botanicalextramachinery:shadow_ingot',
        },
        {
          item: 'botanicalextramachinery:saffron_ingot',
        },
        {
          item: 'mythicbotany:alfsteel_ingot',
        },
        {
          item: 'botania:gaia_ingot',
        },
      ],
      mana: 500000,
      outputs: [
        {
          item: 'voidminers_reforged:solar_ultimate_panel',
          count: 1,
        },
      ],
      runes: [
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:solar_ultimate_block',
          },
          x: 1,
          z: 1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:solar_ultimate_block',
          },
          x: -1,
          z: 1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:solar_ultimate_block',
          },
          x: -1,
          z: -1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:solar_ultimate_block',
          },
          x: 1,
          z: -1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_stellar_core',
          },
          x: 3,
          z: 0,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_stellar_core',
          },
          x: 0,
          z: 3,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_stellar_core',
          },
          x: -3,
          z: 0,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_stellar_core',
          },
          x: 0,
          z: -3,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:alfheim_rune',
          },
          x: 1,
          z: 4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:alfheim_rune',
          },
          x: -1,
          z: 4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:joetunheim_rune',
          },
          x: 1,
          z: -4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:joetunheim_rune',
          },
          x: -1,
          z: -4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:midgard_rune',
          },
          x: 4,
          z: 1,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:midgard_rune',
          },
          x: 4,
          z: -1,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:vanaheim_rune',
          },
          x: -4,
          z: 1,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:vanaheim_rune',
          },
          x: -4,
          z: -1,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 3,
          z: 2,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 3,
          z: 3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 2,
          z: 3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -3,
          z: 2,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -3,
          z: 3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -2,
          z: 3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 3,
          z: -2,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 3,
          z: -3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 2,
          z: -3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -3,
          z: -2,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -3,
          z: -3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -2,
          z: -3,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:nidavellir_rune',
          },
          x: 4,
          z: 4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:nidavellir_rune',
          },
          x: 5,
          z: 5,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:helheim_rune',
          },
          x: -4,
          z: 4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:helheim_rune',
          },
          x: -5,
          z: 5,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:muspelheim_rune',
          },
          x: -4,
          z: -4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:muspelheim_rune',
          },
          x: -5,
          z: -5,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:niflheim_rune',
          },
          x: 4,
          z: -4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:niflheim_rune',
          },
          x: 5,
          z: -5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: 5,
          z: 0,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: 5,
          z: 1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: 5,
          z: -1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: -5,
          z: 0,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: -5,
          z: 1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: -5,
          z: -1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: 0,
          z: 5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: 1,
          z: 5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: -1,
          z: 5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: 0,
          z: -5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: 1,
          z: -5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:glass_panel',
          },
          x: -1,
          z: -5,
        },
      ],
      ticks: 200,
    })
    .id('rune_ritual_voidminers_reforged_solar_ultimate_panel');

  // Rune Ritual Recipe for Solar Ultimate Panel
  event
    .custom({
      type: 'mythicbotany:rune_ritual',
      center: {
        item: 'voidminers_reforged:rosarium_miner',
      },
      group: 'rune_rituals',
      inputs: [
        {
          item: 'botanicalextramachinery:crimson_ingot',
        },
        {
          item: 'botanicalextramachinery:shadow_ingot',
        },
        {
          item: 'botanicalextramachinery:saffron_ingot',
        },
        {
          item: 'mythicbotany:alfsteel_ingot',
        },
        {
          item: 'botania:gaia_ingot',
        },
      ],
      mana: 500000,
      outputs: [
        {
          item: 'voidminers_reforged:ultimate_miner',
          count: 1,
        },
      ],
      runes: [
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_block',
          },
          x: 1,
          z: 1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_block',
          },
          x: -1,
          z: 1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_block',
          },
          x: -1,
          z: -1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_block',
          },
          x: 1,
          z: -1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_stellar_core',
          },
          x: 3,
          z: 0,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_stellar_core',
          },
          x: 0,
          z: 3,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_stellar_core',
          },
          x: -3,
          z: 0,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:ultimate_stellar_core',
          },
          x: 0,
          z: -3,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:alfheim_rune',
          },
          x: 1,
          z: 4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:alfheim_rune',
          },
          x: -1,
          z: 4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:joetunheim_rune',
          },
          x: 1,
          z: -4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:joetunheim_rune',
          },
          x: -1,
          z: -4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:midgard_rune',
          },
          x: 4,
          z: 1,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:midgard_rune',
          },
          x: 4,
          z: -1,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:vanaheim_rune',
          },
          x: -4,
          z: 1,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:vanaheim_rune',
          },
          x: -4,
          z: -1,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 3,
          z: 2,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 3,
          z: 3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 2,
          z: 3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -3,
          z: 2,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -3,
          z: 3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -2,
          z: 3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 3,
          z: -2,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 3,
          z: -3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: 2,
          z: -3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -3,
          z: -2,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -3,
          z: -3,
        },
        {
          consume: true,
          rune: {
            item: 'kubejs:infinity_6',
          },
          x: -2,
          z: -3,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:nidavellir_rune',
          },
          x: 4,
          z: 4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:nidavellir_rune',
          },
          x: 5,
          z: 5,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:helheim_rune',
          },
          x: -4,
          z: 4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:helheim_rune',
          },
          x: -5,
          z: 5,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:muspelheim_rune',
          },
          x: -4,
          z: -4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:muspelheim_rune',
          },
          x: -5,
          z: -5,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:niflheim_rune',
          },
          x: 4,
          z: -4,
        },
        {
          consume: false,
          rune: {
            item: 'mythicbotany:niflheim_rune',
          },
          x: 5,
          z: -5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: 5,
          z: 0,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: 5,
          z: 1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: 5,
          z: -1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: -5,
          z: 0,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: -5,
          z: 1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: -5,
          z: -1,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: 0,
          z: 5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: 1,
          z: 5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: -1,
          z: 5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: 0,
          z: -5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: 1,
          z: -5,
        },
        {
          consume: true,
          rune: {
            item: 'voidminers_reforged:frame_base',
          },
          x: -1,
          z: -5,
        },
      ],
      ticks: 200,
    })
    .id('rune_ritual_voidminers_reforged_ultimate_miner');
});
