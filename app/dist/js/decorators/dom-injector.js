export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`buscando o elemento do DOM com o ${selector} para injetar em ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
