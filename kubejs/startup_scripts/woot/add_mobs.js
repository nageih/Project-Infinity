WootStartupEvents.registerFactoryMob('twilightforest:yeti', (event) => {
  event.factoryMobPatcher().tier('tier_3').patch();
});



WootStartupEvents.registerFactoryMob("allthemodium:piglich", event => {
  const blacklist = [
    "allthemodium:allthemodium_sword",
    "allthemodium:allthemodium_pickaxe",
    "allthemodium:allthemodium_axe",
    "allthemodium:allthemodium_shovel",
    "allthemodium:allthemodium_hoe",
    "allthemodium:allthemodium_helmet",
    "allthemodium:allthemodium_chestplate",
    "allthemodium:allthemodium_leggings",
    "allthemodium:allthemodium_boots",
    "allthemodium:allthemodium_carrot",
    "allthemodium:allthemodium_apple"
  ];

  event.registerDropsModifier(properties => {
    let itemDrops = Array.from(properties.getItemDrops());

    let filtered = itemDrops.filter(drop => {
      return !blacklist.includes(drop.item.id);
    });

    properties.setItemDrops(filtered);
  });
});