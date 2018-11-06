

module.exports.showIndex = function (req, res) {
    res.render('index', { title: 'TrueTestat' });
};

module.exports.createNote = function (req, res) {
    // res.send("Create Note: Not implemented yet, sorry")
    res.render('layout', { title: 'TrueTestat', body: "index"})
}

module.exports.styleSwitch = function (req, res){
    res.send("Style Switch: Not implemented yet, sorry")
}

module.exports.sortFinishDate = function (req, res){
    res.send("Sort by Finish Date: Not implemented yet, sorry")
}

module.exports.sortCreateDate = function (req, res){
    res.send("Sort by Creation Date: Not implemented yet, sorry")
}

module.exports.sortImportance = function (req, res){
    res.send("Sort by Importance: Not implemented yet, sorry")
}

module.exports.hideFinished = function (req, res){
    res.send("hide Finished: Not implemented yet, sorry")
}