var React = require('react');
var ReactDOM = require('react-dom');
var MainPanel = require('./components/MainPanel.jsx');
var TopPanel = require('./components/TopPanel.jsx');
var TempPanel = require('./components/TempPanel.jsx');
var SidePanel = require('./components/SidePanel.jsx');

ReactDOM.render(<MainPanel panelColor="#0c94d5" />, document.getElementById('mainpanel1'));
ReactDOM.render(<MainPanel panelColor="#ca5bb3" />, document.getElementById('mainpanel2'));

ReactDOM.render(<TopPanel value="20" label="New followers added this month" />, document.getElementById('toppanel1'));
ReactDOM.render(<TopPanel value="$ 1250" label="Average Monthly Income" />, document.getElementById('toppanel2'));
ReactDOM.render(<TopPanel value="$ 13865" label="Yearly Income Goal" />, document.getElementById('toppanel3'));

ReactDOM.render(<TempPanel value="18" label="Paris" panelColor="#fd8d00" />, document.getElementById('sidepanel1'));
ReactDOM.render(<SidePanel value="1.5k" label="New Visitors" />, document.getElementById('sidepanel2'));
ReactDOM.render(<SidePanel value="50%" label="Bounce Rate" panelColor="#b089db" />, document.getElementById('sidepanel3'));
ReactDOM.render(<SidePanel value="28%" label="Searches" panelColor="#fc4e16" />, document.getElementById('sidepanel4'));
ReactDOM.render(<SidePanel value="140.5 kb" label="Traffic" panelColor="#6ac240" />, document.getElementById('sidepanel5'));
