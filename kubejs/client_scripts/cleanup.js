/** @type {{ items: Special.ItemTag[]}} */
const chippedTags = JsonIO.read('kubejs/client_scripts/chipped_items.json');

REIEvents.groupEntries(event => {
    chippedTags.forEach(tag => {
        event.groupItemsByTag(`kubejs:rei_groups/chipped/${tag.split(":")[1]}`, tag.charAt(0).toUpperCase() + tag.slice(1), tag)
    });
})