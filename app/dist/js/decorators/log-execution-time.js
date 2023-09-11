export function logExecutionTime(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = 1;
            let unit = "milisegundos";
            if (inSeconds) {
                divider = 1000;
                unit = "segundos";
            }
            const t1 = performance.now();
            const retorno = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divider} ${unit}`);
            return retorno;
        };
        return descriptor;
    };
}
