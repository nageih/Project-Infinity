ServerEvents.recipes((event) => {
  //Infinity Ingot_5
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          count: 3,
          item: 'kubejs:infinity_4',
        },
      ],
      pressure: 4.0,
      results: [
        {
          item: 'kubejs:infinity_5',
        },
      ],
    })
    .id('kubejs:infinity_5_1');

  //Infinity Ingot_5
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          count: 15,
          item: 'kubejs:infinity_4',
        },
      ],
      pressure: 4.0,
      results: [
        {
          item: 'kubejs:infinity_5',
          count: 5,
        },
      ],
    })
    .id('kubejs:infinity_5_7');

  //Infinity Ingot_5
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          count: 30,
          item: 'kubejs:infinity_4',
        },
      ],
      pressure: 4.0,
      results: [
        {
          item: 'kubejs:infinity_5',
          count: 10,
        },
      ],
    })
    .id('kubejs:infinity_5_3');

  //Infinity Ingot_5
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          count: 45,
          item: 'kubejs:infinity_4',
        },
      ],
      pressure: 4.0,
      results: [
        {
          item: 'kubejs:infinity_5',
          count: 15,
        },
      ],
    })
    .id('kubejs:infinity_5_4');

  //Infinity Ingot_5
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          count: 60,
          item: 'kubejs:infinity_4',
        },
      ],
      pressure: 4.0,
      results: [
        {
          item: 'kubejs:infinity_5',
          count: 20,
        },
      ],
    })
    .id('kubejs:infinity_5_5');

  //Infinity Ingot_5
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          count: 64,
          item: 'kubejs:infinity_4',
        },
                {
          type: 'pneumaticcraft:stacked_item',
          count: 64,
          item: 'kubejs:infinity_4',
        }
      ],
      pressure: 4.0,
      results: [
        {
          item: 'kubejs:infinity_5',
          count: 45,
        },
      ],
    })
    .id('kubejs:infinity_5_6');

  //double_compressed_iron_block
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          count: 1,
          item: 'compressium:iron_1',
        },
      ],
      pressure: 4.0,
      results: [
        {
          item: 'kubejs:double_compressed_iron_block',
          count: 1,
        },
      ],
    })
    .id('kubejs:double_compressed_iron_block_pc');

  //triple_compressed_iron_block
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          count: 1,
          item: 'compressium:iron_2',
        },
      ],
      pressure: 4.0,
      results: [
        {
          item: 'kubejs:triple_compressed_iron_block',
          count: 1,
        },
      ],
    })
    .id('kubejs:triple_compressed_iron_block_pc');
});
