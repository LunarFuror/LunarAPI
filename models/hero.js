/**
 * Created by grayson on 9/12/17.
 */
var db = require('../dbconnection'); //reference of dbconnection.js

var Heroes = {

    getAllHeroes: function () {
        console.log('Get All');
        return db.func('sp_get_all_heroes');
    },
    
    getHeroById: function (id) {
        console.log('Get by Id');
        return db.any("sp_get_hero_by_id", [id]);
    },
    
    addHero: function (Heroes) {
        console.log(Heroes);
        console.log('Insert');
        return db.func("sp_insert_hero", [Heroes.name, Heroes.description, Heroes.job]);
    },
   
    updateHero: function (id, Heroes) {
        console.log('Update');
        return db.func("sp_update_hero", [id, Heroes.name, Heroes.description, Heroes.job]);
    },
   
    deleteHero: function (id) {
        console.log('Delete');
        return db.func("sp_delete_hero", [id]);
    }

};
module.exports = Heroes;