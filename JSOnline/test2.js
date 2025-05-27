function debounce(fn, t) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), t);
    };
}

// Example Usage:
function logMessage(message) {
    console.log(message);
}

const debouncedLog = debounce(logMessage, 100);
debouncedLog("First call"); 
setTimeout(() => debouncedLog("Second call"), 50); 
setTimeout(() => debouncedLog("Third Call"), 100); 



