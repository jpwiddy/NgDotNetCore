import { Component } from '@angular/core';

// Components
import { OneComponent } from '../..//one/one.component';
import { TwoComponent } from '../../two/two.component';
import { ThreeComponent } from '../../three/three.component';

export default class DynamicComponentRegistry {
    // FIXME: Might wanna move this to an external file
    private registry: Object = {
        OneComponent: {
            name: 'OneComponent',
            title: 'Airplane',
            icon: 'fa fa-paper-plane',
            component: OneComponent,
            routeType: 'one'
        },
        TwoComponent: {
            name: 'TwoComponent',
            title: 'Ca$h',
            icon: 'fa fa-dollar',
            component: TwoComponent,
            routeType: 'two'
        },
        ThreeComponent: {
            name: 'ThreeComponent',
            title: 'Checklist',
            icon: 'fa fa-check-square',
            component: ThreeComponent,
            routeType: 'three'
        }
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
