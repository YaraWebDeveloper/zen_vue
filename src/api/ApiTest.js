export default class ApiTest {
  testApi(id) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (id < 3) {
          resolve('id accepted');
        } else {
          reject('id rejected')
        }
      }, 2000);
    });
  }

  listEles() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        var arrayEles = [{
            id: 1,
            name: "this",
            done: false
          },
          {
            id: 2,
            name: "is",
            done: false

          },
          {
            id: 3,
            name: "a",
            done: false

          }, {
            id: 4,
            name: "list",
            done: false

          }
        ]
        resolve(arrayEles);
      }, 1000)
    });
  }
}
