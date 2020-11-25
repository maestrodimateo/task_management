import { db } from "../config/init";

exports.handler = function (event, context, callback) {

    db.collection('notebooks').add({
        label: "taches du jour",
        deadline: "20/11/2020",
    }).then(console.log)
    .catch(console.error)

    callback(null, {
        statusCode: 200,
        body: "body"
    });
}