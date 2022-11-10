var electricity = require('../models/electricity');
// List of all electricity
exports.electricity_list = async function(req, res) {
    try{ 
        electricity = await electricity.find(); 
        res.send(electricity); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
};
// for a specific electricity.
exports.electricity_detail = function(req, res) {
res.send('NOT IMPLEMENTED: electricity detail: ' + req.params.id);
};
// Handle electricity create on POST.
exports.electricity_create_post = async function(req, res) {
    console.log(req.body) 
    let document = new electricity(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    
    document.Edistributor_Name = req.body.Edistributor_Name; 
    document.electricity_gen = req.body.electricity_gen; 
    document.elctricity_type = req.body.elctricity_type; 
    
    try{ 
        let results = await document.save(); 
        res.send(results); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
};
// Handle electricity delete form on DELETE.
exports.electricity_delete = function(req, res) {
res.send('NOT IMPLEMENTED: electricity delete DELETE ' + req.params.id);
};
// Handle electricity update form on PUT.
exports.electricity_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: electricity update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.electricity_view_all_Page = async function(req, res) {
    try{
    theelectricity = await electricity.find();
    res.render('electricity', { title: 'Electricity Search Results', results: theelectricity });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};