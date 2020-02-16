import React from 'react';
import * as ReactDOM from "react-dom";

export namespace ReactUtil {
    export const refresh = (component: React.Component): Promise<void> => {
        return new Promise(resolve => {
            component.setState({}, resolve)
        })
    }
    export const render = (element: JSX.Element, container: HTMLElement): Promise<void> => {
        return new Promise(resolve => {
            ReactDOM.render(element, container, resolve);
        })
    }
}
