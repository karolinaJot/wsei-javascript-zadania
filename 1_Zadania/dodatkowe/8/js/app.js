function Tree(type){
    this.type = type;
}

let tree1 = new Tree('sosna');
let tree2 = new Tree('buk');
let tree3 = new Tree('dąb');

Tree.prototype.bloom = function(){
    return console.log('I am blooming');
}

tree1.bloom();