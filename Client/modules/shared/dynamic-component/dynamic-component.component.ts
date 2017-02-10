/** 
 * Please see http://blog.rangle.io/dynamically-creating-components-with-angular-2/ for a basis on what this does
 *
 *  There are quite a few modifications on the loading of the componentData and component itself, but an
 * explanation on the rest of the rendering can be found above.
 */

import { Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';

import ComponentRegistry from './dynamic-component.registry';

let Registry = new ComponentRegistry();

@Component({
    selector: 'dynamic-component',
    entryComponents: Registry.getRegistryComponents(), // Reference to the components must be here in order to dynamically create them
    template: '<div #dynamicComponentContainer></div>',
})
export class DynamicComponent {
    currentComponent;

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    // component: Class for the component you want to create
    // inputs: An object with key/value pairs mapped to input name/input value
    @Input() set componentData(data: { component: any, inputs: any, componentName: string }) {

        // We can destroy the old component, if there is one
        this.destroyCurrent();

        if (!data || (!data.component && !data.componentName)) {
            return;
        }

        if (data.componentName) {
            const registeredComponent = Registry.getComponent(data.componentName);
            data.component = registeredComponent ? registeredComponent.component : null
        }

        if (data.component) {
            // Inputs need to be in the following format to be resolved properly
            let inputProviders = Object.keys(data.inputs).map((inputName) => { return { provide: inputName, useValue: data.inputs[inputName] }; });
            let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

            // create an injector out of the data we want to pass down and this components injector
            let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

            // create a factory out of the component we want to create
            let factory = this.resolver.resolveComponentFactory(data.component);

            // create the component using the factory and the injector
            let component = factory.create(injector);
            
            // insert the component into the dom container
            this.dynamicComponentContainer.insert(component.hostView);

            this.currentComponent = component;
        }
    }

    constructor(private resolver: ComponentFactoryResolver) {
        this.currentComponent = null;
    }

    private destroyCurrent() {
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
    }
}
