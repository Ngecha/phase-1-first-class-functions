function receivesAFunction(callback){
    console.log(callback);
    callback();
} 

function callback(){
    console.log('I love coding.')
}

receivesAFunction(callback);

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('I love coding');
    }
}