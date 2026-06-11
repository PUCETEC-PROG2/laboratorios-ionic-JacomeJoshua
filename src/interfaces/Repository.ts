
export interface Repository {
    name: string;
    avatarurl: string;
    description: string;
    language: string;
}
// Creación del arreglo con 5 instancias 
 export const repositoryList: Repository[] = [ 
 { 
 name: "react-dashboard", 
 avatarurl: "https://avatars.githubusercontent.com/u/1024", 
 description: "Un panel de control de administración moderno construido con React y Tailwind.", 
 language: "TypeScript" 
 }, 
 { 
 name: "fastapi-backend", 
 avatarurl: "https://avatars.githubusercontent.com/u/2048", 
 description: "API REST de alto rendimiento para el manejo de usuarios y autenticación.", 
 language: "Python" 
 }, 
 { 
 name: "awesome-utils", 
 avatarurl: "https://avatars.githubusercontent.com/u/4096", 
 description: "Colección de funciones utilitarias para el día a día en JavaScript vanilla.", 
 language: "JavaScript" 
 }, 
 { 
 name: "flutter-ecommerce", 
 avatarurl: "https://avatars.githubusercontent.com/u/8192", 
 description: "Aplicación móvil de comercio electrónico con soporte para iOS y Android.", 
 language: "Dart" 
 }, 
 { 
 name: "rust-game-engine", 
 avatarurl: "https://avatars.githubusercontent.com/u/16384", 
 description: "Un motor de videojuegos 2D enfocado en el rendimiento y la seguridad de memoria.", 
 language: "Rust" 
 } 
];