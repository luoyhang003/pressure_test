exports.hi = (index, str) => {
    var players = db.players(action.account, action.account);
    var pkey = players.get_primary_key();
    console.log("idx: ",index, " pk: ", pkey);
    players.emplace(action.account, {id:pkey, idx:index, content: str, content1: str, content2: str, content3: str, content4: str, content5: str});
}