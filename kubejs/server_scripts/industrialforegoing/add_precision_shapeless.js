ServerEvents.recipes((event) => {
  event.recipes.ifeu.precision_shapeless(
    'ifeu:creative_chance_addon',
    [
      'ifeu:sculk_gear',
      'ifeu:dragon_star_block',
      'minecraft:redstone_block',
      'ifeu:chance_addon_6',
      'ifeu:chance_addon_6',
      'ifeu:chance_addon_6',
      'ifeu:chance_addon_6',
      'ifeu:chance_addon_6',
      'ifeu:chance_addon_6',
    ],
    0.25
  ).id('kubejs:ifeu/creative_chance_addon');
});
