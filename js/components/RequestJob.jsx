var React = require('react');

var AddJob = React.createClass({

  render: function() {
    return (
      <div className="request-job">
        <iframe id="typeform"
                width="100%" height="100%" 
                src="https://seekpanda.typeform.com/to/TDfp5Y"/>
      </div>
    );
  }

});

module.exports = AddJob;