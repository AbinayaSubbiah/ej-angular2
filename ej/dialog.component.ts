import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeOpen', 'ajaxError', 'ajaxSuccess', 'beforeClose', 'close',
    'contentLoad', 'create', 'destroy', 'drag', 'dragStart',
    'dragStop', 'open', 'resize', 'resizeStart', 'resizeStop',
    'expand', 'collapse', 'actionButtonClick'
    ];
let ComplexProperties = ['ajaxSettings'];
let Inputs = Utils.AngularizeInputs(['actionButtons', 'ajaxSettings', 'allowDraggable', 'allowKeyboardNavigation', 'animation',
    'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass',
    'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize',
    'enableRTL', 'faviconCSS', 'height', 'htmlAttributes', 'isResponsive',
    'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth',
    'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target',
    'title', 'tooltip', 'width', 'zIndex', 'showFooter',
    'footerTemplateId', 'ajaxSettings.async', 'ajaxSettings.cache', 'ajaxSettings.contentType', 'ajaxSettings.data',
    'ajaxSettings.dataType', 'ajaxSettings.type'], []);
export let DialogComponent = CreateComponent('Dialog', {
    selector: 'ej-dialog',
    inputs: Inputs,
    outputs: Outputs,
    template: '<ng-content></ng-content>',
    queries: {
    }
}, {
        tags: [],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_DIALOG_COMPONENTS: Type<any>[] = [DialogComponent  ];
