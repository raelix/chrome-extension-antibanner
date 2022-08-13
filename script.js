
if (Window.prototype.alreadyFixed === undefined) {

    // create a backup of the default function
    // Window.prototype.addEventListenerProtected = Window.prototype.addEventListener;

    // // replace the default function with a custom one
    // Window.prototype.addEventListener = (event, f) => {
    //     switch (event) {

    //         // we don't want mousedown to be executed
    //         case "mousedown":
    //             console.log('That banner wanted to be registered but I don\'t... :D')
    //             break;

    //         // other listeners work
    //         default:
    //             window.addEventListenerProtected(event, f);
    //     }
    // };

    // // do not allow any mutation to the object
    // Object.freeze(Window.prototype);

    var functionToReplace;
    if (window.EventTarget && EventTarget.prototype.addEventListener) {
        functionToReplace = EventTarget;
    } else {
        functionToReplace = Element;
    }

    functionToReplace.prototype.oldaddEventListener = functionToReplace.prototype.addEventListener;

    functionToReplace.prototype.addEventListener = function (event, handler, placeholder) {

        if (event === "mousedown") {
            console.log('That banner wanted to be registered but I don\'t... :D')
            console.log(handler)
            return;
        }

        if (arguments.length < 3) {
            this.oldaddEventListener(event, handler, false);
        } else {
            this.oldaddEventListener(event, handler, placeholder);
        }
    }
    
    Window.prototype.alreadyFixed = true
}
