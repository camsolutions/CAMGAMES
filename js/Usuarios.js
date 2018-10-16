//Datos Generales
var Nombre = "";
var Apellido = "";
var Biografía = "";
//Dirección
var Direccion1 = "";
var Direccion2 = "";
var Pais = "";
var Ciudad = "";
var Estado = "";
var CodigoP = "";
//Contacto y Redes
var Email = "";
var Redes = "";
var Links = "";



//Inicialización de la Base de Datos

 var config = {
    apiKey: "AIzaSyCWiXpt0W0hBZwa8K8WNvp5pzYyPdJpqkg",
    authDomain: "documentacion-f199d.firebaseapp.com",
    databaseURL: "https://documentacion-f199d.firebaseio.com",
    projectId: "documentacion-f199d",
    storageBucket: "documentacion-f199d.appspot.com",
    messagingSenderId: "615873173007"
  };
  firebase.initializeApp(config);

 //Registro a modificar
 var Entorno = ;
 var docRefS = db.collection("cities").doc("sf");

//Registro de Usuarios

		//Entrada de Datos A la Base de Datos
				function EntradaDatos() {

					//Validando existencia de los archivos


					docRef.get().then(function(doc) {

						    if (doc.exists) {
						        console.log("Datos registrados: ", doc.data());
						    } else {


						    	db.collection("Usuarios").add({
						
									Nombre: Nombre;
									Apellido: Apellido;
									Biografía: Biografía
									Direccion1: Direccion1;
									Direccion2: Direccion2;
									País: País;
									Ciudad:Ciudad;
									Estado:Estado;
									CodigoP:CodigoP;
									Email:Email;
									Redes:Redes;
									Links:Links;

									})

								.then(function(docRef){
									console.log("Datos ingresados a la base de datos con exito, la id suministrada es: ", docRef.id);
									})

								.catch(function(error){
									console.log("Disculpe pero hubo un error al ingresar los datos a la base de datos, respuesta del servidor: ",error);
								});

									}

							}).catch(function(error) {
				    		console.log("Error al intentar consultar el documento ingresado, respuesta del servidor : ", error);
						
				    });

				}

				//Subiendo archivos adjuntos

				function SubirA(argument) {
								

					// Create a root reference
						var storageRef = firebase.storage().ref();

						// Create a reference to 'mountains.jpg'
						var mountainsRef = storageRef.child('mountains.jpg');

						// Create a reference to 'images/mountains.jpg'
						var mountainImagesRef = storageRef.child('images/mountains.jpg');


					var file = ... // use the Blob or File API
					ref.put(file).then(function(snapshot) {
					  console.log('Los archivos adjuntos se han cargado con exito!');
					});
				}

//Consultas

		//Consultas del Cliente

				function ConsultasU(){

					docRefU.get().then(function(doc) {

					    if (doc.exists) {
					        console.log("Datos registrados: ", doc.data());
					    } else {
					        // doc.data() will be undefined in this case
					        console.log("El elemento ingresado no se encuentra en los registros");
					    }

					}).catch(function(error) {
					    console.log("Error en la consulta de los datos, respuesta del servidor: ", error);
					});


					}

		//Consultas automaticas del Sistema
				function ConsultasS(){

					docRefS.get().then(function(doc) {

					    if (doc.exists) {
					        console.log("Datos registrados: ", doc.data());
					    } else {
					        // doc.data() will be undefined in this case
					        console.log("El elemento ingresado no se encuentra en los registros");
					    }

					}).catch(function(error) {
					    console.log("Error en la consulta de los datos, respuesta del servidor: ", error);
					});


				}
					


//Funciones sobre Redes sociales

	//Seguimiento

		function siguiendo(){

			var siguiendo;

			ConsultasU();

			db.collection("Usuarios").doc("Publicaciones").where("Publicacion" = Like).set({
				Like:id;	
			})
			.then(function() {
			    console.log("El like Publicacion se a agregado con exito");
			})
			.catch(function(error) {
			    console.error("Error al agregar like, respuesta del servidor: ", error);
			});



		}

	//Me gusta o Likes

		function Like(){
			var Like;
			var id;

			ConsultaU();

			db.collection("Usuarios").doc("Publicaciones").where("Publicacion" = Like).set({
				Like:id;	
			})
			.then(function() {
			    console.log("El like Publicacion se a agregado con exito");
			})
			.catch(function(error) {
			    console.error("Error al agregar like, respuesta del servidor: ", error);
			});
			db.collection("Usuarios").doc(id).where("Like" = Like).set({
				Like:id;	
			})
			.then(function() {
			    console.log("El like Usuario se a agregado con exito");
			})
			.catch(function(error) {
			    console.error("Error al agregar like, respuesta del servidor: ", error);
			});



		}

//Publicaciones

		function AgregarP() {

			docRef.get().then(function(doc) {

				    if (doc.exists) {
				        console.log("Datos registrados: ", doc.data());
				    } else {


				    	db.collection("Publicaciones").add({
				
							Like:"";

							})

						.then(function(docRef){
							console.log("Datos ingresados a la base de datos con exito, la id suministrada es: ", docRef.id);
							})

						.catch(function(error){
							console.log("Disculpe pero hubo un error al ingresar los datos a la base de datos, respuesta del servidor: ",error);
						});

							}

					}).catch(function(error) {
		    		console.log("Error al intentar consultar el documento ingresado, respuesta del servidor : ", error);
				
		    });
			
		}

		function Publicar() {
		

		}

		function EliminiarP() {
		
			var id;

			ConsultasU();

			db.collection("Publicaciones").doc(id).delete().then(function() {
			    console.log("La Publicacion se ha eliminado con exito");
			}).catch(function(error) {
			    console.error("Error al eliminar publicación, respuesta del servidor: ", error);
			});
	

		}

//Mensajeria de texto
function chat(){

	

}

