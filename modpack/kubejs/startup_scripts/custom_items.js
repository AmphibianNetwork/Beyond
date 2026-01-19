StartupEvents.registry('item', e => {
  e.create('fun_fruit')
  .displayName('Fun Fruit')
  .tooltip('A very not suspicious fruit!')
  .food(food => {
      food
        .hunger(4)
        .saturation(1) 
        .alwaysEdible()
  })
})