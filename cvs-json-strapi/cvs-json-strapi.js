'use strict';

const { default: createStrapi } = require('strapi');

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = () => {

    const csvFilePath='data/Brickset-Sets.csv'
    const csv=require('csvtojson')
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
    const data = jsonObj
    data.forEach(entry => {
        strapi.services.legosets.create({
            number: entry.Number,
            theme: entry.Theme,
            year: entry.Year,
            minifigs: entry.Minifigs,
            pieces: entry.Pieces
        })
    })
    })



};