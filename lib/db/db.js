`use strict`;

/**
 * @author - Antz															*
 * @description - This file will connect to mongodb and return an instance of my database.		*
 * @module Library															*
 * */
 
const mongoose = require('mongoose');

let CONN_DISCONNECTED = 0,
    CONN_DISCONNECTING = 3,
    CONN_CONNECTED = 1;

const MONGOHQ_URI = 'mongodb://studentdb:123456789@ds163053.mlab.com:63053/studentmicroprocessor';


let openConnection = (callback) => {

    //this condition is to check for connection
    if (mongoose.connection === undefined ||
                    mongoose.connection.readyState === CONN_DISCONNECTED ||
                    mongoose.connection.readyState === CONN_DISCONNECTING) {
        
        mongoose.connection.on('connected', () => {

            console.log(' Boooooooom !!! Db connected'); //this should be printed on your terminal if you have a successfull connection to your database
            
            if (callback) {
                callback(true);
            }
        });

        mongoose.connection.on('error', (e) => {
            console.log('Db connection error'); //this should be printed on your terminal if you have an error connection to your database
            if (callback) {
                callback(e);
            }else {
                console.log(e);
            }
        });
        
        mongoose.connect(MONGOHQ_URI);
    }else {
        if (callback) {
            callback(true);
        }
    }    
};

let closeConnection = () => {
    if (mongoose.connection && mongoose.connection.readyState === CONN_CONNECTED) {
        mongoose.disconnect();
        
        mongoose.connection.removeAllListeners('connected');
        
        mongoose.connection.removeAllListeners('error');
    }
};

/**
 * core database class exposing Mongoose object after making connection
 * @class Db
 * */
let Db = (callback) => {
    this.close = ()  => {
        closeConnection();
    };
    
    this.open = (callback) => {
        openConnection(callback);
        return mongoose;
    };
    
    //Let mongoose open and close the connection as we like.
    mongoose.open  = (callback) => {
        openConnection(callback);
        return mongoose;
    };
    
    mongoose.close = () => {
      closeConnection();  
    };
    
    openConnection(callback);
    
    return mongoose;
}

module.exports = Db;
