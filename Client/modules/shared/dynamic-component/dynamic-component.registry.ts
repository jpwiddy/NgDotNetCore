import { Component } from '@angular/core';

// Components

export default class DynamicComponentRegistry {
    private registry: Object = {
    }

    constructor() { }

    // Helper method to convert `snake-case` to `SnakeCase`;
    // - used if we match selector to component
    //   name (as a fallback for dynamic choosing of comp.)
    private snakeToPascal(snakeCaseString: string): string {
        const find = /^([A-z])|((\-)\w)/g;
        const convert = function (matches) {
            if (matches.length > 1) {
                return matches[1].toUpperCase();
            }

            return matches[0].toUpperCase();
        };

        return snakeCaseString.replace(
            find,
            convert
        );
    }

    getRegistry(): any {
        return this.registry;
    }

    getRegistryComponents(): any {
        let registryArray = [];
        for (let key in this.registry) {
            registryArray.push(this.registry[key].component);
        }

        return registryArray;
    }

    // TODO: Test
    getByRouteType(routeType: string): any {
        for (let key in this.registry) {
            let componentObj = this.registry[key];
            if (componentObj.routeType === routeType) {
                return componentObj;
            }
        }

        return null;
    }

    getComponent(componentName: string): any {
        return this.registry[componentName] || null;
    }
}
