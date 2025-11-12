ServerEvents.recipes((event) => {
  //Compact Fission Reactor
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAAAA',
        'BCBDBEBFB',
        'CBDBEBFBG',
        'HIJKLMNOP',
        'IHQRQRQPO',
        'HINSLTJOP',
        'UVWVWVWVU',
        'VWVWVWVWV',
        'XXXXXXXXX',
      ],
      key: {
        A: {
          item: 'mekanismgenerators:reactor_glass',
        },
        B: {
          item: 'mekanism:alloy_atomic',
        },
        C: {
          item: 'evolvedmekanism:alloy_singular',
        },
        D: {
          item: 'mekanism_extras:alloy_thermonuclear',
        },
        E: {
          item: 'mekanism_extras:alloy_shining',
        },
        F: {
          item: 'evolvedmekanism:alloy_subatomic',
        },
        G: {
          item: 'mekanism:pellet_antimatter',
        },
        H: {
          item: 'mekanism:alloy_infused',
        },
        I: {
          item: 'mekanism:alloy_reinforced',
        },
        J: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        K: {
          type: 'forge:partial_nbt',
          item: 'mekanism:basic_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[],InfusionTanks:[{Tank:0b,stored:{amount:64000L,infuseTypeName:"evolvedmekanism:plaslitherite"}}],Items:[],PigmentTanks:[],SlurryTanks:[],componentConfig:{config2:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config3:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config4:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config5:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config6:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},eject2:1b,eject3:1b,eject4:1b,eject5:1b,eject6:0b},componentEjector:{color0:-1,color1:-1,color2:-1,color3:-1,color4:-1,color5:-1,strictInput:0b},controlType:0,dumping:0,owner:[I;820734262,-2046999151,-1231858418,1239542476],securityMode:0}}',
        },
        L: {
          item: 'emextras:cosmic_dense_control_circuit',
        },
        M: {
          type: 'forge:partial_nbt',
          item: 'mekanism:basic_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:64000L,gasName:"mekanism_extras:molten_thermonuclear"}}],InfusionTanks:[],Items:[],PigmentTanks:[],SlurryTanks:[],componentConfig:{config2:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config3:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config4:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config5:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config6:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},eject2:1b,eject3:1b,eject4:1b,eject5:1b,eject6:0b},componentEjector:{color0:-1,color1:-1,color2:-1,color3:-1,color4:-1,color5:-1,strictInput:0b},controlType:0,dumping:0,owner:[I;820734262,-2046999151,-1231858418,1239542476],securityMode:0}}',
        },
        N: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        O: {
          item: 'mekanism_extras:alloy_radiance',
        },
        P: {
          item: 'evolvedmekanism:alloy_hypercharged',
        },
        Q: {
          item: 'emextras:infinite_multiversal_control_circuit',
        },
        R: {
          item: 'evolvedmekanism:multiversal_control_circuit',
        },
        S: {
          type: 'forge:partial_nbt',
          item: 'mekanism:basic_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:64000L,gasName:"mekanism_extras:naquadah_hexafluoride"}}],InfusionTanks:[],Items:[],PigmentTanks:[],SlurryTanks:[],componentConfig:{config2:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config3:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config4:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config5:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config6:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},eject2:1b,eject3:1b,eject4:1b,eject5:1b,eject6:0b},componentEjector:{color0:-1,color1:-1,color2:-1,color3:-1,color4:-1,color5:-1,strictInput:0b},controlType:0,dumping:0,owner:[I;820734262,-2046999151,-1231858418,1239542476],securityMode:0}}',
        },
        T: {
          type: 'forge:partial_nbt',
          item: 'mekanism:basic_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[],InfusionTanks:[{Tank:0b,stored:{amount:64000L,infuseTypeName:"evolvedmekanism:better_gold"}}],Items:[],PigmentTanks:[],SlurryTanks:[],componentConfig:{config2:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config3:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config4:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config5:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},config6:{side0:4,side1:1,side2:1,side3:1,side4:1,side5:1},eject2:1b,eject3:1b,eject4:1b,eject5:1b,eject6:0b},componentEjector:{color0:-1,color1:-1,color2:-1,color3:-1,color4:-1,color5:-1,strictInput:0b},controlType:0,dumping:0,owner:[I;820734262,-2046999151,-1231858418,1239542476],securityMode:0}}',
        },
        U: {
          item: 'mekanismgenerators:control_rod_assembly',
        },
        V: {
          item: 'mekanism:pellet_polonium',
        },
        W: {
          item: 'mekanismgenerators:fission_fuel_assembly',
        },
        X: {
          item: 'mekanismgenerators:fission_reactor_casing',
        },
      },
      result: {
        item: 'compactmekanismmachines:compact_fission_reactor',
      },
    })
    .id('compactmekanismmachines:compact_fission_reactor');
});
