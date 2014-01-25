(function() {

window.ElemConsole = function(elem) {
    this.$elem = $(elem);
};

ElemConsole.prototype.message = function() {
    var text = Array.prototype.join.call(arguments, ' ');
    return $('<div>').text(text);
};

ElemConsole.prototype.log = function() {
    $messageElem = this.message.apply(this, arguments);
    $messageElem.addClass('cm-log');
    this.$elem.append($messageElem);
};

ElemConsole.prototype.warn = function() {
    $messageElem = this.message.apply(this, arguments);
    $messageElem.prepend('Warning: ').addClass('cm-warning');
    this.$elem.append($messageElem);
};

ElemConsole.prototype.error = function() {
    $messageElem = this.message.apply(this, arguments);
    $messageElem.addClass('cm-error');
    this.$elem.append($messageElem);
};

ElemConsole.prototype.reset = function() {
    this.$elem.empty();
};

window.mergeDefaults = function(defaults, config, override) {
    if (!config) return defaults;
    for (key in defaults) {
        if (defaults.hasOwnProperty(key)) {
            if (typeof config[key] === "undefined" || override) {
                config[key] = defaults[key];
            }
        }
    }
    return config;
}

window.setupCM = function(config, cmOptions) {
    var defaults = {
        "code": "pre code",
        "unwrap": true,
    };
    config = config || {};
    mergeDefaults(defaults, config);

    var cmDefaults = {
        "mode": "javascript",
        "lineWrapping": true,
        "lineNumbers": true,
        "matchBrackets": true,
        "tabSize": 4,
        "indentUnit": 4,
        "indentWithTabs": true,
    }
    cmOptions = cmOptions || {}
    mergeDefaults(cmDefaults, cmOptions);
    // Get code blocks, and unwrap if requested.
    var $code = $(config.code)
    if (config.unwrap) $code = $code.unwrap();
    
    // To each code block:
    $code.each(function() {
        var $this = $(this);
        // Insert CM by replacing the original block.
        var cmReplaceFn = function(cmElem) {
            $this.replaceWith(cmElem);
        };
        // Set CM value to element value
        cmOptions.value = $this.text();
        // Initialize CM
        var cm = new CodeMirror(cmReplaceFn, cmOptions);
        $(cm.getWrapperElement()).addClass(cmOptions.mode);
    });
}

window.makeRunnable = function(config) {
    var defaults = {
        "editors": ".CodeMirror",
        "buttonHTML": "<button>Run</button>",
        "buttonClass": "run-button",
        "consoleHTML": "<div />",
        "consoleClass": "run-console",
    }
    config = mergeDefaults(defaults, config);

    var $editors = $(config.editors);
    $editors.each(function() {
        var cm = this.CodeMirror;
        var runCM = function() {
            var code = cm.getValue();
            $runConsole.hide();
            elemConsole.reset();
            runSandboxed(code, elemConsole);
            $runConsole.slideDown();
        }
        var $runButton = $(config.buttonHTML)
            .addClass(config.buttonClass)
            .click(runCM)
            .insertAfter(this);
        var $runConsole = $(config.consoleHTML)
            .addClass(config.consoleClass)
            .insertAfter($runButton);
        var elemConsole = new ElemConsole($runConsole);


    });
}


window.makeRunnableWithTests = function(config) {
    var defaults = {
        "editors": ".CodeMirror",
        "runButtonHTML": "<button>Run</button>",
        "testButtonHTML": "<button>Test</button>",
        "submitButtonHTML": "<button>Submit</button>",
        "buttonClass": "run-button",
        "consoleHTML": "<div />",
        "consoleClass": "run-console",
    }
    config = mergeDefaults(defaults, config);

    var $editors = $(config.editors);
    $editors.each(function(index) {
        var lab = index;
        var cm = this.CodeMirror;
        var testCode = $(this).parent().next().text();
        var runCM = function(withTests) {
            var code = cm.getValue();
            if (withTests) code += testCode;
            console.log(code);
            $runConsole.hide();
            elemConsole.reset();
            runSandboxed(code, elemConsole);
            $runConsole.slideDown();
        }
        var submitCode = function() {
            var code = cm.getValue();
            var authors = null;
            if (!authors) {
                alert("No usernames given, cancelling submission.");
                return;
            }
            var labId = "01-" + index;
            $.ajax("http://warm-fjord-5872.herokuapp.com/labs", {"jsonpCallback": "submitResult", "dataType": "jsonp", "data": {"authors": authors, "code": code, "lab": lab}})
        }
        var $runButton = $(config.runButtonHTML)
            .addClass(config.buttonClass)
            .click(function() { runCM(false) })
            .insertAfter(this);
        var $testButton = $(config.testButtonHTML)
            .addClass(config.buttonClass)
            .click(function() { runCM(true) })
            .insertAfter($runButton);
        var $submitButton = $(config.submitButtonHTML)
            .addClass(config.buttonClass)
            .click(submitCode)
            .insertAfter($testButton);
        var $runConsole = $(config.consoleHTML)
            .addClass(config.consoleClass)
            .insertAfter($submitButton);
        var elemConsole = new ElemConsole($runConsole);
    });
}


var submitResult = function(success) {
    if (success) {
        alert("Awesome, we got your code.");
    } else {
        alert("Sorry, something bad happened. Please email the course staff.");
    }
    
}

// Run code in the sandbox.
window.runSandboxed = function(code, console) {
    // If console is unset, use the default console.
    if (typeof console === "undefined") {
        console = window.console;
    }
    // Overwrite toString behavior
    Object.prototype.toString = function() {
        return JSON.stringify(this);
    }
    // Clear previous console output.
    console.reset();
    // Run code and catch errors if any occur.
    try {
        eval(code);
    } catch (e) {
        if (e instanceof Error){
            console.error(e);
        }
    }
}

})();