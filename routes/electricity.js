var express = require('express');
var router = express.Router();

class electricity {
constructor(Edistributor_Name, electricity_gen, elctricity_type){
  this.Edistributor_Name=Edistributor_Name;
  this.electricity_gen=electricity_gen;
  this.elctricity_type=elctricity_type;
}
}
/* GET home page. */
router.get('/', function(req, res, next) {
  let N1=new electricity('NPDCL',1000,'Wind energy');
  let S2=new electricity('South',2000,'Solar');
  let E1=new electricity('East',3000,'Nuclear');

  res.render('electricity', { title: 'Search Results electricity',electricity : [N1,S2,E1] });
});

module.exports = router;
