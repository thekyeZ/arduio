var fs = require("fs");

module.exports.getall = function(req, res){
  var post = fs.readFileSync('../app/data/posts.json', 'utf-8');
  res.setHeader('Content-Type', 'application/json');
  res.send(post);
}

module.exports.save = function(req, res) {
  var post = req.body;
  fs.writeFileSync('data/testSave/' + id + '.json', JSON.stringify(post));
  res.send(post);
};

module.exports.generateData = function(req, res){

  setInterval(function(){
    
  } ,1000);


};
