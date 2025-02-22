ServerEvents.tags('item', event => {
    let chippedItems = [];

    event.tags.forEach((location, tag) => {
        if (location.namespace === 'chipped') {
            chippedItems.push(`${location.namespace}:${location.path}`);
        }
    });

    JsonIO.write('kubejs/client_scripts/chipped_items.json', {
        items: chippedItems
    });
});