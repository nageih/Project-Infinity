ServerEvents.recipes((event) => {
  //Pipez Infinity Upgrade
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDCEA',
        'BAFFFAE',
        'GFAHAFG',
        'DFHIHFD',
        'GFAHAFG',
        'EAFFFAB',
        'AECDCBA',
      ],
      key: {
        A: {
          item: 'pipez:universal_pipe',
        },
        B: {
          item: 'cataclysm:abyssal_sacrifice',
        },
        C: {
          item: 'evolvedmekanism:multiversal_control_circuit',
        },
        D: {
          item: 'woot_revived:netherite_enchanted_plate',
        },
        E: {
          item: 'bloodmagic:hellforgedparts',
        },
        F: {
          item: 'pipez:ultimate_upgrade',
        },
        G: {
          item: 'mekanism_extras:infinite_control_circuit',
        },
        H: {
          item: 'emextras:infinite_multiversal_control_circuit',
        },
        I: {
          item: 'tconstruct:drowned_head',
        },
      },
      result: {
        item: 'pipez:infinity_upgrade',
      },
    })
    .id('pipez:infinity_upgrade');
});
