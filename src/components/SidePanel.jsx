var React = require('react');

var SidePanel = React.createClass({
    render: function() {

        var panelStyle = {};
        var panelBodyStyle = { background: 'white' };

        if (this.props.panelColor) {
            panelStyle.background = this.props.panelColor;
            panelStyle.color = 'white';
        }

        return(
            <div className="col-sm-offset-2 panel panel-info">
                <div style={panelStyle} className="panel-heading">
                    <h5>{this.props.label}</h5>
                    <h3>{this.props.value}</h3>
                </div>
                <div style={panelBodyStyle} className="panel-body">
                    <h3> </h3>
                </div>
            </div>
        );
    }
});

module.exports = SidePanel;
