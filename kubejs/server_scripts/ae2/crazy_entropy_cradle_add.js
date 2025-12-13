ServerEvents.recipes((event) => {
  //Infinity 9 Block
  event
    .custom({
      type: 'crazyae2addons:cradle',
      result_block: 'kubejs:infinity_9_block',
      preview_nbt: 'kubejs:infinity_9_structure.nbt',
      pattern: {
        symbols: {
          A: ['minecraft:crying_obsidian'],
          B: ['kubejs:empowered_super_block'],
          C: ['advancednetherite:netherite_diamond_block'],
          D: ['ae2omnicells:ender_ingot_block'],
          E: ['botanicalextramachinery:saffron_dragonstone_block'],
          F: ['advanced_ae:quantum_alloy_block'],
          G: ['ae2omnicells:singularity_block'],
        },
        layers: [
          ['A A A A A', 'A B B B A', 'A B B B A', 'A B B B A', 'A A A A A'],
          ['E E F E E', 'E E D E E', 'F D G D F', 'E E D E E', 'E E F E E'],
          ['C C F C C', 'C C D C C', 'F D F D F', 'C C D C C', 'C C F C C'],
          ['E E F E E', 'E E D E E', 'F D G D F', 'E E D E E', 'E E F E E'],
          ['A A A A A', 'A B B B A', 'A B B B A', 'A B B B A', 'A A A A A'],
        ],
      },
    })
    .id('kubejs:ae2/crazy_entropy_cradle/infinity_9_block');
});

ServerEvents.recipes((event) => {
  //Infinity 9 Block --> Ingot
  event
    .custom({
      type: 'crazyae2addons:fabrication',
      input: { item: 'kubejs:infinity_9_block' },
      input_count: 1,
      output: { item: 'kubejs:infinity_9', count: 1 },
      required_key: 'kubejs:infinity_9_block_research',
    })
    .id('kubejs:ae2/crazy_entropy_cradle/infinity_9_block_to_ingot');
});

ServerEvents.recipes((event) => {
  //Infinity 9 Block Research Data Drive
  event
    .custom({
      type: 'crazyae2addons:research',
      duration: 3600,
      energy_per_tick: 50,
      fluid: 'crazyae2addons:researchfluid',
      fluid_per_tick: 50,
      requires_stabilizer: true,
      gadget: true,
      consumables: [{ item: 'kubejs:infinity_9_block', count: 1 }],
      drive: true,
      structure: {
        mode: 'pattern',
        size: [5, 5, 5],

        symbols: {
          A: ['evolvedmekanism:block_better_gold'],
          B: ['evolvedmekanism:block_plaslitherite'],
          C: ['botania:terrasteel_block'],
          D: ['allthemodium:unobtainium_vibranium_alloy_block'],
        },
        layers: [
          ['A A A A A', 'A B B B A', 'A B B B A', 'A B B B A', 'A A A A A'],
          ['A D D D A', 'D B B B D', 'D B C B D', 'D B B B D', 'A D D D A'],
          ['A D D D A', 'D B B B D', 'D B C B D', 'D B B B D', 'A D D D A'],
          ['A D D D A', 'D B B B D', 'D B C B D', 'D B B B D', 'A D D D A'],
          ['A A A A A', 'A B B B A', 'A B B B A', 'A B B B A', 'A A A A A'],
        ],
      },
      unlock: {
        key: 'kubejs:infinity_9_block_research',
        label: 'Infinity 9',
      },
    })
    .id('kubejs:ae2/crazy_entropy_cradle/infinity_9_block_drive');
});
