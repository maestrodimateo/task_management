import { db } from "../config/init";

exports.handler = function(event, context, callback) {
    
    db.collection('notebooks').add({
        "label":"taches du jour",
        "deadline":"20/11/2020",
    })

    callback(null, {
        statusCode:200,
        body: "informations enregistrées"
    });
}