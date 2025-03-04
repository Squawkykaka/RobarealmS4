ServerEvents.recipes(event => {
    event.remove({ id: 'create:crushing/scrap_cobblestone_small' })
    event.remove({ id: 'silentgear:diamond_from_shards'})

    event.replaceOutput({}, "create_crush_everything:diamond_shard", "create_dd:diamond_shard")
    event.replaceOutput({}, "renewable_stones:diamond_shard", "create_dd:diamond_shard")

})

