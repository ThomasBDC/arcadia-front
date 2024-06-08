import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/Home.html"),
    new Route("/Service.html", "Service", "/Pages/Service.html"),
   ];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ZOO Arcadia";