import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { UncontrolledAlert } from 'reactstrap';

class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
            <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                I am an alert and I can be dismissed!
            </Alert>
            <UncontrolledAlert color="info">
                I am an alert and I can be dismissed!
            </UncontrolledAlert>
            </div>  
        );
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isCollapsed: true
    //     }
    //     console.log('Contructor');
    //     this.onClickAccordion = this.onClickAccordion.bind(this);
    // }

    // onClickAccordion() {
    //     this.setState({
    //         isCollapsed: !this.state.isCollapsed
    //     })
    // }

    // render() {
    //     console.log('Accordion render');
    //     const { children, heading } = this.props;
    //     const { isCollapsed } = this.state;
    //     return (
    //         <div>
    //             <div onClick={this.onClickAccordion} className={heading}>{heading}</div>
    //             {!isCollapsed && <div className="Accordion">{children}</div>}
    //         </div>
    //     )
    // }

    // componentDidMount() {
    //     console.log('Did Mount');
    // }

    // componentDidUpdate() {
    //     console.log('Did Update');
    // }

    // componentWillUnmount() {
    //     console.log('Will Unmount');
    // }
}

export default Accordion;