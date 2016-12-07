import React from 'react';
import ReactDom from 'react-dom';
import Page1 from './page1.js';
import Page2 from './page2.js';

var EntryPage = React.createClass({
    getInitialState: function () {
		return {
            nowPage: 'page1'
        }
	},
    changePage: function (nowPage) {
        this.setState ({ nowPage: nowPage })
    },
    render: function () {
        var row = [];
        if( this.state.nowPage == 'page1'){
            row.push(<Page1 key={1} changePage={this.changePage}/>)
        }else if (this.state.nowPage == 'page2'){
            row.push(<Page2 key={2}/>)
        }
        return (
            <div className="page1">
                {row}
            </div>
        )
    }
})

ReactDom.render (
	<EntryPage/>,
	document.getElementById('root')
)
