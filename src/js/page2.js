import React from 'react';
import '../less/page2.less';

var Page2 = React.createClass({
    componentDidMount: function () {
        var pathList = document.getElementsByTagName('path');
        var l = pathList.length;
        var delay = 1500;
        for(var i = 0; i < l; i++) {
            pathList[i].style.stroke = "#000000";
            pathList[i].style.strokeWidth = "3px";
            pathList[i].style.strokeLinecap = "round";
            var curLen = Math.round(pathList[i].getTotalLength());
            pathList[i].style.strokeDasharray = curLen + " " + (curLen + 20);
            //上面设置了strokeWidth较宽，所以两头会预留一些像素
            pathList[i].style.strokeDashoffset = curLen + 10;
            pathList[i].style.transition = 'show ' + curLen + 'ms linear ' + delay + 'ms forwards';
            pathList[i].style.webkitAnimation = 'show ' + curLen + 'ms linear ' + delay + 'ms forwards';
            delay += curLen;
        }
    },
    render: function () {
        return (
            <div className="wrapper2">
                <div className="bgi-rose">
                    <div className="autograph">
                        <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						 width="600px" height="340.16px" viewBox="0 0 680.31 340.16" enableBackground="new 0 0 680.31 340.16">
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M126.764,77.376c0.857,10.282-22.011,16.853-29.497,20.144"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M100.146,111.909c4.415-3.775,21.159-5.532,28.923-7.192
                                c3.665-0.783,8.983-1.163,12.804-0.722"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M112.376,96.082c-0.571,15.407,2.962,32.392-2.267,46.431
                                c-1.527-1.889-3.054-4.124-4.208-6.144"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M101.584,132.053c1.417-5.992,14.889-3.864,18.705-10.072"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M127.484,96.801c4.262,4.026,2.615,15.178,2.877,20.915
                                c0.369,8.077,2.171,10.309,5.755,17.215"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M137.556,121.261c0.345-0.567,0.188-2.29,0.699-0.833
                                c-4.434,4.247-8.997,8.43-13.649,12.343"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M135.397,92.484c1.987-0.117,3.876,0.121,5.755,0.719"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M170.649,90.326c0.74-2.074,21.172-0.719,25.899-0.719"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M170.649,99.678c10.072,0,20.144,0,30.216,0"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M184.318,80.254c-1.401,4.015,1.283,14.267,2.158,19.424"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M171.369,111.189c0.618,0.625,1.098,1.344,1.439,2.158"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M174.966,111.189c6.005-1.669,12.272-2.361,18.596-2.05
                                c0.118,1.63,0.526,4.024,0.109,5.646"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M173.527,119.103c5.276,0,10.551,0,15.827,0"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M174.966,124.858c1.99,0.396,5.825,0.945,7.914,2.877"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M192.951,125.578c-1.439,0-2.877,0-4.316,0"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M163.455,134.93c10.722,0,21.901,0.52,32.374-1.439"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M171.369,141.405c1.988,1.075,3.481,2.853,4.316,5.036"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M176.404,142.844c4.421-1.717,22.361-4.441,17.986,4.317"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M174.246,147.88c3.682,1.777,11.1,0.719,15.828,0.719"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M219.57,108.312c6.586-0.575,13.041-8.875,18.394-12.172
                                c-0.675,4.16-4.338,14.287-6.881,18.799c-2.877,5.105-5.07,4.586-10.793,7.042"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M223.887,112.628c4.639-2.685,14.403,5.913,18.705,8.633"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M258.419,127.017c7.977-7.044,10.898-13.153,15.084-23.38
                                c-10.455,0.38-20.538,3.001-28.034,10.431"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M255.541,116.945c3.739,2.453-15.232,21.791-22.302,20.144"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M253.383,132.053c5.392-0.231,16.061,6.512,21.583,8.633"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M255.541,96.801c0.637-0.108,1.267-0.072,1.887,0.109
                                c2.659,7.88-7.663,18.037-14.117,20.754"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M314.534,88.887c1.008,8.515-9.528,19.229-15.828,24.46"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M307.34,107.592c5.333,2.977,2.158,28.331,2.158,35.251"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M336.836,116.225c1.408-4.342,2.859-9.145,2.01-13.779
                                c-6.042,2.941-12.036,5.646-17.837,8.744"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M329.642,114.786c2.26,6.15,1.245,16.726,0.484,23.503
                                c-2.326,0.23-4.86-0.506-6.959-1.92"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M321.728,129.175c-1.682,1.907-4.604,3.385-6.475,5.036"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M335.397,128.456c2.616-1.154,5.389-0.862,7.913,0.719"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M323.167,99.678c-0.318,5.826-3.915,11.063-6.475,15.828"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M359.139,132.772c1.094,2.444,1.866,6.897-1.439,7.914"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M395.829,91.765c5.803,9.383-6.28,27.541-15.108,32.374"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M395.829,111.189c4.417-0.947,10.088-0.402,13.669-2.878"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M395.829,124.139c4.12-0.542,7.516-3.103,11.511-3.597"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M385.038,134.93c9.172,0,18.336,0.397,27.338-1.439"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M400.146,124.858c2.276,5.603,0.565,15.693,0.794,22.282
                                c2.3-0.506,4.563-1.506,6.4-2.857"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M422.447,109.031c5.729-2.794,15.17,0.92,21.583-1.438"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M421.729,120.542c5.472,1.412,13.239,1.483,18.705,0"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M415.973,138.527c7.85,0.971,17.002,1.745,24.461-0.719"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M431.081,113.348c1.517,6.503,2.908,15.317,0,21.583"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M435.397,128.456c0.72,0,1.438,0,2.158,0"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M395.109,164.427c3.55,6.51-10.736,22.846-15.107,28.058"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M389.354,183.852c2.301-3.444,9.485-1.665,13.669-2.878"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M389.354,197.521c4.505-2.239,10.962-2.929,15.827-4.317"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M387.196,205.434c6.026-0.006,11.829-0.823,17.266-2.158"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M396.549,198.959c2.917,4.758,1.113,11.299,0.76,16.436
                                c3.716,0.35,7.346,0.416,10.751-1.327"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M413.814,188.887c-1.315,2.771-0.72,7.853-0.72,11.511"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M414.534,191.765c8.024-0.899,15.33-1.99,22.95-3.542
                                c0.165,3.151-0.43,6.149-0.648,9.298"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M418.131,202.556c5.519-0.041,10.438-0.064,15.827-1.438"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M423.167,167.304c-0.278,10.44,2.351,20.496,2.878,30.738
                                c0.366,7.104-0.913,14.004-0.72,21.061"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M460.577,170.182c0.646-2.619,25.112-6.938,30.173-5.21
                                c-15.613,3.708-28.956,17.626-45.28,21.038"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M465.613,180.974c-2.686,1.915-0.523,9.104,1.438,12.229"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M466.333,180.974c10.327-2.598,8.202,0.815,10.071,10.071"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M464.174,193.923c3.707-0.284,7.236-1.501,10.792-2.158"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M450.505,201.117c5.227-2.854,10.72-4.059,16.633-3.507
                                c0.045,7.302-18.478,9.661-23.107,14.298"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M453.383,211.189c0,2.398,0,4.796,0,7.194"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M453.383,209.75c2.437-2.162,7.587-3.534,11.416-3.521
                                c1.67,2.991,1.902,6.636,1.534,9.997"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M453.383,219.822c3.228-0.926,8.863-2.872,12.95-2.158"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M475.686,200.397c5.283-1.888,13.297-1.798,19.034-2.729
                                c-6.742,2.275-14.128,6.075-19.754,9.923"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M493.671,216.944c0.854-3.69,0.909-7.72,0.451-11.402
                                c-10.614-0.431-10.276,1.434-12.682,10.684"/>
                            <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M480.721,218.384c2.55-1.339,9.355-1.627,12.95-1.439"/>
                        </svg>
                    </div>
                    <div className="content">
                       主人换掉了那些情话。哈哈哈哈哈。。。。我是文字我是文字。主人换掉了那些情话。哈哈哈哈哈。。。。我是文字我是文字
                       主人换掉了那些情话。哈哈哈哈哈。。。。我是文字我是文字主人换掉了那些情话。哈哈哈哈哈。。。。我是文字我是文字
                       主人换掉了那些情话。哈哈哈哈哈。。。。我是文字我是文字主人换掉了那些情话。哈哈哈哈哈。。。
                    </div>
                </div>
            </div>
        )
    }
})

export default Page2;