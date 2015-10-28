import './chucknorris.sass!';
import htmlTemplate from './chuckNorrisView.html!text'

class Ctrl {
  constructor($http) {
    this.$http = $http;
    this.kickit();
  }

  kickit() {
    this.$http.get('http://api.icndb.com/jokes/random')
      .then(response => this.joke = response.data.value.joke);
  }
}
Ctrl.$inject = ['$http'];

class ChuckNorrisDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.template = htmlTemplate;
    this.controller = Ctrl;
    this.controllerAs = 'viewModel';
  }
}

class ChuckNorris {
  static id() {
    return 'chuckNorris';
  }

  static factory() {
    return new ChuckNorrisDirective();
  }
}
ChuckNorris.factory.$inject = ['$http'];

export {
  ChuckNorris
};
