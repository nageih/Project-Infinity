ServerEvents.recipes((event) => {
  //Wireless Transeiver
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAA',
        'ABBBBBA',
        'ABCDEBA',
        'AFGHIFA',
        'ABEJCBA',
        'ABBBBBA',
        'AAAAAAA',
      ],
      key: {
        A: {
          item: 'ae2:quantum_ring',
        },
        B: {
          item: 'ae2:quantum_link',
        },
        C: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        D: {
          item: 'ae2omnicells:spent_nuclear_waste_singularity',
        },
        E: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        F: {
          item: 'botanicalextramachinery:crimson_dragonstone',
        },
        G: {
          item: 'ae2:quantum_entangled_singularity',
        },
        H: {
          item: 'crazyae2addons:super_singularity',
        },
        I: {
          item: 'extendedae_plus:oblivion_singularity',
        },
        J: {
          item: 'ae2omnicells:singularity_block',
        },
      },
      result: {
        item: 'extendedae_plus:wireless_transceiver',
      },
    })
    .id('extendedae_plus:wireless_transceiver');
});
