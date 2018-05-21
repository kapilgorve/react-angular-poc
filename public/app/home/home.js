class Test extends window.React.Component {
  render() {
    return <h2> {this.props.test}</h2>;
  }
}

angular.module('starter').value('Test', Test);
