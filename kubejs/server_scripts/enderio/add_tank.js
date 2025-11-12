ServerEvents.recipes((event) => {
  // Solidified Experience -> XP Juice
  event.custom({
    type: 'enderio:tank',
    fluid: {
      amount: 50,
      fluid: 'enderio:xp_juice',
    },
    input: {
      item: 'actuallyadditions:solidified_experience',
    },
    is_emptying: true,
    output: {
      item: 'minecraft:glass_bottle',
    },
  });
});
