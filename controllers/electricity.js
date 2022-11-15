var electricity = require('../models/electricity');
// List of all electricity
exports.electricity_list = async function(req, res) {
    try{ 
        results = await electricity.find(); 
        res.send(results); 
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

// for a specific Costume.
exports.electricity_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    results = await electricity.findById( req.params.id)
    res.send(results)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   // Handle electricity update form on PUT.
exports.electricity_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await electricity.findById( req.params.id)
    // Do updates of properties
    if(req.body.Edistributor_Name)
    toUpdate.Edistributor_Name = req.body.Edistributor_Name;
    if(req.body.electricity_gen) toUpdate.electricity_gen = req.body.electricity_gen;
    if(req.body.elctricity_type) toUpdate.elctricity_type = req.body.elctricity_type;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
};

// Handle electricity delete on DELETE.
exports.electricity_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    results = await electricity.findByIdAndDelete( req.params.id)
    console.log("Removed " + results)
    res.send(results)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   }