import React from 'react';
import { AppContext } from './App';

class InnerComp extends React.Component {

    constructor(props) {
        super(props);
        this.data = {
            text: `In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development` };
    }

    render() {
        return <div>Inner Component</div>;
    }
}

export default (props) => {
    const { value, ref } = React.useContext(AppContext);
    return <div>
        <ul>
            <li>
                <div>
                    Value: {value}
                </div>
            </li>
            <li>
                <InnerComp ref={ref} />
            </li>
        </ul>
    </div>
};