const mongoose = require( "mongoose" );
const { extractObject } = require( "../utilities" );
const jwt = require( "jsonwebtoken" );
const bcrypt = require( "bcrypt" );
const { saveChangesToModel } = require( "../utilities/index" );

const User = mongoose.model( "User" );
const SECRET = "superSuperSecret";

exports.register = ( req, res ) => {
    let { user } = req;
    if ( user ) {
        return res.preconditionFailed( "existing_user" );
    }
    user = new User( req.body );
    user.setId();
    user.password = req.hash;
    saveChangesToModel( res, user );
};

exports.login = ( req, res ) => {
    const { token } = req;
    const { user }= req;
    return res.json( {
        success: true,
        token,
        user,
    } );
};

exports.edit = ( req, res ) => {
    const { user } = req;
    const { name, sex, age } = req.body;

    user.name = name;
    user.sex = sex;
    user.age = age;

    user.save( ( err, savedUser ) => {
        if ( err ) {
            return res.validationError( err );
        }
        return res.success( extractObject(
            savedUser,
            [ "id", "name", "age", "sex" ],
        ) );
    } );
};

exports.delete = ( req, res ) => {
    const { user } = req;

    user.remove( );
    res.success( );
};
