import React from "react";
import {TabMenu} from "primereact/tabmenu";
import {Button} from "primereact/button";


export class BankMenu extends React.Component<any, any>{

    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return(
        <div>
            <div className="card">
                <TabMenu model={this.props.items} />
            </div>
        </div>
        );
    }
}
