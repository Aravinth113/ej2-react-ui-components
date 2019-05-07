import * as React from 'react';
import { ComboBox, ComboBoxModel } from '@syncfusion/ej2-dropdowns';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface ComboBoxTypecast {
    footerTemplate?: string | Function | any;
    headerTemplate?: string | Function | any;
    groupTemplate?: string | Function | any;
    itemTemplate?: string | Function | any;
}
/**
 *The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
 * ```
 * <ComboBoxComponent dataSource={data}/>
 * ```
 */
export class ComboBoxComponent extends ComboBox {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ComboBoxModel & DefaultHtmlAttributes| ComboBoxTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    private checkTemplate: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ComboBoxModel & DefaultHtmlAttributes| ComboBoxTypecast>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('input', this.getDefaultAttributes());
        }

    }
}

applyMixins(ComboBoxComponent, [ComponentBase, React.PureComponent]);
