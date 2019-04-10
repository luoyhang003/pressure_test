exports.hi = (index, str) => {
    var players = db.players(action.account, action.account);
    var pkey = players.get_primary_key();
    var it = players.find(index);
    console.log('it: ', it.data);
    console.log("idx: ",index, " pk: ", pkey);
    players.emplace(action.account, {id:pkey, idx:index, content: str, content1: str, content2: str, content3: str, content4: str, content5: str, content6: str, content7: str, content8: str, content9: str});
}