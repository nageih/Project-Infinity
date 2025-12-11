priority: 1;
MMEvents.createProcesses((event) => {
  function addDissolverRecipe (id, data) {
    function parseInput (input) {
      if (input.startsWith('#')) {
        return {
          type: 'mm:item',
          tag: input.substring(1),
          count: 1,
        };
      } else {
        return {
          type: 'mm:item',
          item: input,
          count: 1,
        };
      }
    }

    const recipe = event
      .create(`mm:${id}_recipe`)
      .structureId('mm:mega_dissolver_structure')
      .ticks(4);

    recipe.input({
      type: 'mm:input/consume',
      ingredient: parseInput(data.input),
    });

    recipe.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 5000,
      },
    });

    for (const out of data.outputs) {
      recipe.output({
        type: 'mm:output/simple',
        chance: out.chance ?? 1,
        ingredient: {
          type: 'mm:item',
          item: out.item,
          count: out.count ?? 1,
        },
      });
    }
  }

  const recipes = [
    //------------------ Recipe Definitions -----------------//
    // End Stone
    {
      id: 'end_stone',
      input: '#chipped:end_stone',
      outputs: [
        { item: 'chemlib:silicon_dioxide', count: 1, chance: 0.7003 },
        { item: 'chemlib:mercury', count: 1, chance: 0.1401 },
        { item: 'chemlib:lithium', count: 1, chance: 0.1401 },
        { item: 'chemlib:neodymium', count: 1, chance: 0.014 },
        { item: 'chemlib:thorium', count: 1, chance: 0.0056 },
      ],
    },
    // Music Discs
    {
      id: 'discs',
      input: '#minecraft:music_discs',
      outputs: [
        { item: 'chemlib:polyvinyl_chloride', count: 64 },
        { item: 'chemlib:lead', count: 16 },
        { item: 'chemlib:cadmium', count: 16 },
      ],
    },
    // Fire Coral Fan
    {
      id: 'fire_coral_fan',
      input: 'minecraft:fire_coral_fan',
      outputs: [
        { item: 'chemlib:calcium_carbonate', count: 4 },
        { item: 'chemlib:cobalt_nitrate', count: 2 },
      ],
    },
    // Granite
    {
      id: 'granite',
      input: '#chipped:granite',
      outputs: [
        { item: 'chemlib:silicon_dioxide', count: 1, chance: 0.4348 },
        { item: 'chemlib:aluminum', count: 1, chance: 0.2174 },
        { item: 'chemlib:iron', count: 1, chance: 0.087 },
        { item: 'chemlib:potassium_oxide', count: 1, chance: 0.087 },
        { item: 'chemlib:radium', count: 1, chance: 0.0652 },
        { item: 'chemlib:manganese', count: 1, chance: 0.0652 },
        { item: 'chemlib:technetium', count: 1, chance: 0.0435 },
      ],
    },
    //Ghast Tear
    {
      id: 'ghast_tear',
      input: 'minecraft:ghast_tear',
      outputs: [{ item: 'chemlib:polonium', count: 16 }],
    },
    //Shulker Shell
    {
      id: 'shulker_shell',
      input: 'minecraft:shulker_shell',
      outputs: [
        { item: 'chemlib:lutetium', count: 8 },
        { item: 'chemlib:calcium_carbonate', count: 8 },
      ],
    },
    //Soul Sand
    {
      id: 'soul_sand',
      input: '#chipped:soul_sand',
      outputs: [
        { item: 'chemlib:silicon_dioxide', count: 4 },
        { item: 'chemlib:thulium', count: 1 },
      ],
    },
    //Ender Pearl
    {
      id: 'ender_pearl',
      input: 'minecraft:ender_pearl',
      outputs: [
        { item: 'chemlib:silicon', count: 16 },
        { item: 'chemlib:neodymium', count: 16 },
        { item: 'chemlib:mercury', count: 16 },
      ],
    },
    //Phantom Membrane
    {
      id: 'phantom_membrane',
      input: 'minecraft:phantom_membrane',
      outputs: [{ item: 'chemlib:cerium', count: 8 }],
    },
    //Quartz
    {
      id: 'quartz',
      input: 'minecraft:quartz',
      outputs: [
        { item: 'chemlib:silicon_dioxide', count: 32 },
        { item: 'chemlib:barium', count: 16 },
      ],
    },
    //Diorite
    {
      id: 'diorite',
      input: '#chipped:diorite',
      outputs: [
        { item: 'chemlib:silicon_dioxide', count: 1, chance: 0.3509 },
        { item: 'chemlib:aluminum_oxide', count: 1, chance: 0.1404 },
        { item: 'chemlib:potassium_chloride', count: 1, chance: 0.1404 },
        { item: 'chemlib:tin', count: 1, chance: 0.1053 },
        { item: 'chemlib:iron', count: 1, chance: 0.0702 },
        { item: 'chemlib:osmium', count: 1, chance: 0.0702 },
        { item: 'chemlib:manganese', count: 1, chance: 0.0702 },
        { item: 'chemlib:indium', count: 1, chance: 0.0526 },
      ],
    },
    //Signalum Ingot
    {
      id: 'signalum_ingot',
      input: '#forge:ingots/signalum',
      outputs: [
        { item: 'chemlib:copper', count: 16, chance: 0.6 },
        { item: 'chemlib:silver', count: 16, chance: 0.2 },
        { item: 'chemlib:strontium_carbonate', count: 16, chance: 0.1 },
        { item: 'chemlib:iron_oxide', count: 16, chance: 0.1 },
      ],
    },
    //Stone
    {
      id: 'stone',
      input: '#forge:stone',
      outputs: [
        { item: 'minecraft:air', count: 2, chance: 0.6431 },
        { item: 'chemlib:silicon_dioxide', count: 2, chance: 0.1608 },
        { item: 'chemlib:iron', count: 2, chance: 0.0643 },
        { item: 'chemlib:aluminum', count: 2, chance: 0.0322 },
        { item: 'chemlib:gold', count: 2, chance: 0.0225 },
        { item: 'chemlib:zirconium', count: 2, chance: 0.0193 },
        { item: 'chemlib:tungsten', count: 2, chance: 0.0161 },
        { item: 'chemlib:gallium', count: 2, chance: 0.0161 },
        { item: 'chemlib:nickel', count: 2, chance: 0.0161 },
        { item: 'chemlib:dysprosium', count: 2, chance: 0.0096 },
      ],
    },
    //Purple Dye
    {
      id: 'purple_dye',
      input: '#forge:dyes/purple',
      outputs: [{ item: 'chemlib:potassium_permanganate', count: 4 }],
    },
    //Deepslate
    {
      id: 'deepslate',
      input: '#apotheosis:deepslate',
      outputs: [
        { item: 'minecraft:air', count: 2, chance: 0.5263 },
        { item: 'chemlib:silicon_dioxide', count: 2, chance: 0.2632 },
        { item: 'chemlib:iron', count: 2, chance: 0.0526 },
        { item: 'chemlib:osmium', count: 2, chance: 0.0263 },
        { item: 'chemlib:gold', count: 2, chance: 0.0263 },
        { item: 'chemlib:aluminum', count: 2, chance: 0.0263 },
        { item: 'chemlib:silver', count: 2, chance: 0.0263 },
        { item: 'chemlib:europium', count: 2, chance: 0.0132 },
        { item: 'chemlib:terbium', count: 2, chance: 0.0132 },
        { item: 'chemlib:scandium', count: 2, chance: 0.0132 },
        { item: 'chemlib:yttrium', count: 2, chance: 0.0132 },
      ],
    },
    //Potato
    {
      id: 'potato',
      input: 'minecraft:potato',
      outputs: [
        { item: 'chemlib:potassium', count: 5, chance: 0.7143 },
        { item: 'chemlib:starch', count: 1, chance: 0.2857 },
      ],
    },
    //Emerald
    {
      id: 'emerald',
      input: 'minecraft:emerald',
      outputs: [
        { item: 'chemlib:chromium', count: 8 },
        { item: 'chemlib:beryllium', count: 8 },
        { item: 'chemlib:vanadium', count: 4 },
      ],
    },
    //Light Gray Dye
    {
      id: 'light_gray_dye',
      input: 'minecraft:light_gray_dye',
      outputs: [{ item: 'chemlib:magnesium_sulfate', count: 4 }],
    },
    //Lapis Lazuli Block
    {
      id: 'lapis_lazuli_block',
      input: '#forge:storage_blocks/lapis',
      outputs: [
        { item: 'chemlib:sodium', count: 54 },
        { item: 'chemlib:mullite', count: 27 },
        { item: 'chemlib:calcium_sulfide', count: 18 },
        { item: 'chemlib:silicon', count: 27 },
      ],
    },
    //Dark Prismarine
    {
      id: 'dark_prismarine',
      input: '#chipped:dark_prismarine',
      outputs: [
        { item: 'chemlib:niobium', count: 24 },
        { item: 'chemlib:selenium', count: 8 },
        { item: 'chemlib:titanium_oxide', count: 4 },
        { item: 'chemlib:beryl', count: 32 },
      ],
    },

    //------------------ Recipe Definitions End -----------------//
  ];

  recipes.forEach((r) => addDissolverRecipe(r.id, r));
});
