var _z = console;
Object.defineProperty(window, 'console', {
    get: function(){
        if (_z._commandLineAPI) {
            throw new Error('console bloqueado');
        }
        return _z;
    },
    set: function(val) {
        _z = val;
    }
});