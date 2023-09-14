const clog = (req, res, next) => {
    switch (req.method) {
        case 'GET':{
            console.info(`${req.method} request to ${req.path}`)
        }
            
            break;
    
        default:
            break;
    }
}

//Just holding onto this for now, no need to complete