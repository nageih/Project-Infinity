ServerEvents.recipes((event) => {
  //Expattern Provider Infinity Cell Water
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEBF',
        'BGHIHGB',
        'JHKLMHJ',
        'NOLPLQR',
        'JHSLTHJ',
        'BGHUHGB',
        'VBEWCBX',
      ],
      key: {
        A: {
          item: 'nuclearcraft:dense_water_collector',
        },
        B: {
          item: 'botanicalextramachinery:malachite_ingot_block',
        },
        C: {
          item: 'kubejs:empowered_super_block',
        },
        D: {
          item: 'thermal:device_water_gen',
        },
        E: {
          item: 'mysticalagradditions:creative_essence',
        },
        F: {
          item: 'nuclearcraft:pump',
        },
        G: {
          item: 'mysticalagriculture:water_essence',
        },
        H: {
          item: 'kubejs:infinity_1',
        },
        I: {
          item: 'minecraft:water_bucket',
        },
        J: {
          item: 'mysticalagriculture:water_agglomeratio',
        },
        K: {
          item: 'mysticalagriculture:supremium_watering_can',
        },
        L: {
          item: 'botanicalextramachinery:malachite_spark',
        },
        M: {
          item: 'mysticalagriculture:imperium_watering_can',
        },
        N: {
          item: 'rftoolsutility:waterbreathing_module',
        },
        O: {
          item: 'cyclic:charm_water',
        },
        P: {
          item: 'botanicalextramachinery:catalyst_water_infinity',
        },
        Q: {
          item: 'botania:rune_water',
        },
        R: {
          item: 'mysticalagriculture:water_breathing_augment',
        },
        S: {
          item: 'mysticalagriculture:awakened_supremium_watering_can',
        },
        T: {
          item: 'mysticaladaptations:insanium_watering_can',
        },
        U: {
          item: 'mysticalagriculture:water_seeds',
        },
        V: {
          item: 'mm:water_condenser_controller',
        },
        W: {
          item: 'botania:water_ring',
        },
        X: {
          item: 'industrialforegoing:water_condensator',
        },
      },
      result: {
        type: 'forge:nbt',
        item: 'expatternprovider:infinity_cell',
        count: 1,
        nbt: '{record:{"#c":"ae2:f",id:"minecraft:water"}}',
      },
    })
    .id('expatternprovider:infinity_cell_water');
});
