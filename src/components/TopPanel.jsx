var React = require('react');

var TopPanel = React.createClass({
    render: function() {

        var panelStyle = { background: 'white' };

        if (this.props.panelColor) {
            panelStyle.background = this.props.panelColor;
            panelStyle.color = 'white';
            panelStyle.textAlign = 'center';
        }

        return(
            <div style={panelStyle} className="panel panel-default">
                <div className="panel-body">
                    <h3>{this.props.value}</h3>
                    <h5>{this.props.label}</h5>
                </div>
            </div>
        );
    }
});

module.exports = TopPanel;
