var validiatePassword = function(password, userinput, successfunc, failfunc, errorfunc) {
    if (password === userinput) {
        successfunc();
        var success = true;
    } else if (password !== userinput) {
        failfunc();
        var success = false;
    } else {
        errorfunc();
        var success = false;
    }
    return success;
}

var validiateUsername = function(username, userinput, successfunc, failfunc, errorfunc) {
    if (username === userinput) {
        successfunc();
        var success = true;
    } else if (username !== userinput) {
        failfunc();
        var success = false;
    } else {
        errorfunc();
        var success = false;
    }
    return success;
}

var credentials = {
    validiatePassword: validiatePassword,
    validiateUsername: validiateUsername
}

module.exports = credentials;