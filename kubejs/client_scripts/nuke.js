ItemEvents.tooltip((event) => {
    // Works with the "nuke list" file to add a tooltip to items you want to remove, displaying that it's been disabled.
  
    event.add([global.itemsToRemove], Text.red("This item has been disabled"));
    // Change the text to whatever you want!
    // You can change the colour too!
  });

  JEIEvents.hide((event) => {
    // Works with the "nuke list" file to remove all items you want to remove from being visible in JEI (also works with EMI, if JEI is installed as well)
  

    event.hide([global.itemsToRemove]);
    event.hide(["silentgear:diamond_shard", "create_crush_everything:diamond_shard", "renewable_stones:diamond_shard"])
  });