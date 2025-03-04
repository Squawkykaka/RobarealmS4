ServerEvents.tags("item", (event) => {
    // Works with the "nuke list" file to remove all tags from items you want to remove
  
    // De-tags all items on the nuke list, this means it won't show up on recipe viewers such as EMI in the tag section, and also
    // stops recipes that use a nuked item's tag as an input from breaking when that item is removed from recipes
    event.removeAllTagsFrom(global.itemsToRemove);
    event.removeAllTagsFrom(["silentgear:diamond_shard", "create_crush_everything:diamond_shard", "renewable_stones:diamond_shard"])
  });

ServerEvents.recipes((event) => {
  // Works with the "nuke list" file to remove all related recipes to items you want to remove

  let itemsToRemove = [global.itemsToRemove];

  // Remove all recipes with an input of any item on the nuke list
  event.remove({
    input: itemsToRemove,
  });

  // Remove all recipes with an output of any item on the nuke list
  event.remove({
    output: itemsToRemove,
  });
});