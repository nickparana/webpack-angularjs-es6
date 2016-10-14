export default class HomeController {
  constructor(randomNames) {
    this.random=randomNames;
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }
    
  randomNames(){
      this.name=this.randomName.getName();      
  }
}

HomeController.$inject = ['randomNames'];