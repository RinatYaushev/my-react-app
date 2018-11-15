import React, { Component } from "react";

class Tab extends Component {
    handleActivity = (e) => {
        this.props.onClick(e, this.props.text)
    };

    render () {
        const { dataname, text, isActive } = this.props;

        return (
            <div dataname={dataname} onClick={this.handleActivity} className={isActive ? 'Tab open' : 'Tab'}>{text}</div>
        )
    }
}

const TabContent = ({ activeTab }) => {
    switch (activeTab) {
        case 1: return <div>{`This is content from tab #${activeTab}`}</div>;
        case 2: return <div>{`And here is something from tab ${activeTab}`}</div>;
        case 3: return <div>{`Finally tab ${activeTab} content arrived`}</div>;
        default: return <div>!</div>;
    }
};

export class Tabs extends Component {
    state = {
        activeTab: 1,
        isActive: 'Tab 1'
    };

    handleTab = (e, text) => {
        this.setState({
            activeTab: +e.target.getAttribute('dataname'),
            isActive: text
        })
    };
    render () {
        const { activeTab, isActive } = this.state;

        return (
            <div className='Tab-wrapper'>
                <div className='Tab-header'>
                    <Tab dataname={1} onClick={this.handleTab} text={'Tab 1'} isActive={isActive === 'Tab 1'} />
                    <Tab dataname={2} onClick={this.handleTab} text={'Tab 2'} isActive={isActive === 'Tab 2'} />
                    <Tab dataname={3} onClick={this.handleTab} text={'Tab 3'} isActive={isActive === 'Tab 3'} />
                </div>
                <div className='Tab-content'>
                    {<TabContent activeTab={activeTab} />}
                </div>
            </div>
        )
    }
}
