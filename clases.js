class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
   }
getFullname(nombre, apellido){
    console.log (`El usuario se llama ${nombre} ${apellido}`)
}
addMascotas(nuevaMascota) {
    this.mascotas.push(nuevaMascota)

}

countMascotas() {
    
    console.log('La cantidad de mascotas es ' + this.mascotas.length)

}

addlibros(nombre, autor) {
    this.libros.push({nombre, autor})

}
getBookName() {
  const nombreLibros = this.libros.map( (nombreLibros) => (` ${nombreLibros.nombre}`) ) 
    console.log(nombreLibros)
    
}
}

 


const Usuario1 = new Usuario ("Pablo", "Martinez", [{nombre: "Harry Potter", autor: "J. K Rowling"}], ['Zoquete', 'Federica'])
Usuario1.getFullname(Usuario1.nombre, Usuario1.apellido)
Usuario1.addMascotas('Pedro')
Usuario1.countMascotas()
Usuario1.addlibros('El poema del Mio Sid', "anonimo")
Usuario1.getBookName()
console.log(Usuario1)