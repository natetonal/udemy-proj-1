var React = require('react');

var TempPanel = React.createClass({
    render: function() {

        var panelStyle = {
            color: 'white',
            textAlign: 'center'
        };

        if (this.props.panelColor) {
            panelStyle.background = this.props.panelColor;
        }

        return(
            <div style={panelStyle} className="panel panel-default">
                <div className="panel-body">
                    <h3>{this.props.value + '\u00B0'}</h3>
                    <h5>{this.props.label}</h5>
                </div>
            </div>
        );
    }
});

module.exports = TempPanel;
