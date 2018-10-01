var React = require("react");

class Popular extends React.Component {
  render() {
    var languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
    return (
      <div>
        <ul className="languages">
          {languages.map(function(lang) {
            return <li key={lang}>{lang}</li>;
          })}
        </ul>
      </div>
    ); // Return
  }
}

module.exports = Popular;