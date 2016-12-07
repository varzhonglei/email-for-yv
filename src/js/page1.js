import React from 'react';
import '../less/page1.less';

var Page1 = React.createClass({
    componentDidMount: function () {
        var domHeart = document.getElementById('openEmail');
        var changePage = this.props.changePage;
        domHeart.onclick = function () {
           changePage('page2');
        }  
    },
    render: function () {
        return (
            <div className="wrapper">
                <svg version="1.1" id="图层_1" x="0px" y="0px" width="600px" height="600px" viewBox="0 0 595.28 841.89" enableBackground="new 0 0 595.28 841.89">
                    <path className="p1-needMoveF" fill="#FFFFFF" stroke="#000000" strokeMiterlimit="10" d="M539.143,451.571c0,6.627-5.373,12-12,12h-426 c-6.627,0-12-5.373-12-12V167c0-6.627,5.373-12,12-12h426c6.627,0,12,5.373,12,12V451.571z"/>
                    <line className="p1-needMoveS" fill="none" stroke="#000000" strokeMiterlimit="10" x1="89.143" y1="167" x2="314.143" y2="309.285"/>
                    <line className="p1-needMoveS" fill="none" stroke="#000000" strokeMiterlimit="10" x1="539.143" y1="167" x2="314.143" y2="309.285"/>
                    <g id="收藏">
                        <g>
                            <path id="openEmail" fill="#FB95CE" d="M328.84,278.8c0.904,0,1.868,0.049,2.898,0.15c6.27,0.611,13.52,6.352,14.404,17.352v3.662 c-0.822,10.527-8.771,23.514-32,39.807c-23.229-16.293-31.177-29.279-31.999-39.807v-3.662c0.883-11,8.133-16.74,14.402-17.352 c1.03-0.102,1.994-0.15,2.898-0.15c7.244,0,10.72,3.131,14.698,7.873C318.121,281.931,321.595,278.8,328.84,278.8"/>
                        </g>
                    </g>
                </svg>
            </div>
        )
    }
})

export default Page1;
