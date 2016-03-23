var React = require('react');

var MainPanel = React.createClass({

    render: function() {

        var footerStyle = {
                color: 'white',
                background: '#333',
                textAlign: 'center'
        },
            bodyStyle = {
                height: 300,
        },
            spacer = {
                height: 50
        };

        if(this.props.panelColor) {
            bodyStyle.background = this.props.panelColor;
        }

        // Ideally this info would be loaded in dynamically
        return(
            <div>
                <div style={bodyStyle} className="col-xs-12 col-sm-12">
                </div>
                <div style={footerStyle} className="col-xs-12 col-sm-4">
                    <h3>15080</h3>
                    <h4><small>Shot Views</small></h4>
                </div>
                <div style={footerStyle} className="col-xs-12 col-sm-4">
                    <h3>12000</h3>
                    <h4><small>Likes</small></h4>
                </div>
                <div style={footerStyle} className="col-xs-12 col-sm-4">
                    <h3>5100</h3>
                    <h4><small>Comments</small></h4>
                </div>
                <div style={spacer} className="col-xs-12 col-sm-12"></div>
            </div>
        );
    }
});

module.exports = MainPanel;
