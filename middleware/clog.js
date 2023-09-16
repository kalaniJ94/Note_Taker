const clog = (req, res, next) => {
//     switch (req.method) {
//         case 'GET':{
//             console.info(`${req.method} request to ${req.path}`)
//         }
            
//             break;
    
//         default:
//             break;
//     }
// }
debug('use %o %s', path, fn.name || '<anonymous>')

    var layer = new Layer(path, {
      sensitive: this.caseSensitive,
      strict: false,
      end: false
    }, fn);

    layer.route = undefined;

    this.stack.push(layer);
  }

  return this;

//Just holding onto this for now, no need to complete