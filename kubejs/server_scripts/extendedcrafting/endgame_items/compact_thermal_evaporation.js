ServerEvents.recipes((event) => {
  //Compact Thermal Evaporation Plant
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBBBBAA',
        'AACCCCCAA',
        'AADEDEDAA',
        'AAEFEFEAA',
        'AAFDFDFAA',
        'AAEFEFEAA',
        'AADEDEDAA',
        'AACCCCCAA',
        'AAAAGAAAA',
      ],
      key: {
        A: {
          item: 'mekanism:thermal_evaporation_block',
        },
        B: {
          item: 'mekanism:thermal_evaporation_valve',
        },
        C: {
          item: 'voidminers_reforged:structure_panel',
        },
        D: {
          item: 'mekanism:alloy_reinforced',
        },
        E: {
          item: 'mekanism:alloy_atomic',
        },
        F: {
          item: 'evolvedmekanism:alloy_hypercharged',
        },
        G: {
          item: 'mekanism:thermal_evaporation_controller',
        },
      },
      result: {
        item: 'compactmekanismmachines:compact_thermal_evaporation',
      },
    })
    .id('compactmekanismmachines:compact_thermal_evaporation');
});
