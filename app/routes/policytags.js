import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let url = "http://35a1a922.ngrok.io/api/policy_tags/";

    return new Ember.RSVP.Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState == this.DONE) {
          if (this.status == 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: ' + url + 'failed with status: [' + this.status + ']'));
          }
        }
      }
    });
  }
});
