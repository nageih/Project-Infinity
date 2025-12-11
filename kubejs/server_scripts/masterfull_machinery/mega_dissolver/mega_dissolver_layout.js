priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:mega_dissolver_structure')
    .controllerId('mm:mega_dissolver_controller')
    .name('Mega Dissolver')
    .layout((a) => {
      a.layer([
        '11111', 
        '11111', 
        '11111', 
        '11111', 
        '11111'
      ])
      .layer([
        '12221', 
        '2   2', 
        '2   2', 
        '2   2', 
        '12221'
      ])
      .layer([
        '12221', 
        '2   2', 
        '2   2', 
        '2   2', 
        '12C21'
      ])
      .layer([
        '12221', 
        '2   2', 
        '2   2', 
        '2   2', 
        '13451'
      ])
      .layer([
        '11111', 
        '11111', 
        '11111', 
        '11111', 
        '11111'
      ])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          block: 'alchemistry:reactor_glass',
        })
        .key('3', {
          portType: 'mm:item',
          input: true,
        })
        .key('4', {
          portType: 'mm:energy',
          input: true,
        })
        .key('5', {
          portType: 'mm:item',
          input: false,
        })
    });
});
