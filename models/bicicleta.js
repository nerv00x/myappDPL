let bicicleta = function (id, color, modelo, ubicacion) {
     this.id = id;
     this.color = color;
     this.modelo = modelo;
     this.ubicacion = ubicacion;
}

bicicleta.allBicis = [];


bicicleta.add = function (bici) {
     this.allBicis.push(bici);
}

bicicleta.findById = function(id) {
     return this.allBicis.find(bici => bici.id === id);
 };

let a = new bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
bicicleta.add(a);
bicicleta.add(b);



module.exports = bicicleta;
