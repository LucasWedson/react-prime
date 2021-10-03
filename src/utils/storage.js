import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar os filmes salvos

export async function getMoviesSave(key){
    const myMovies = await AsyncStorage.getItem(key)

    let movieSave = JSON.parse(myMovies) || [];

    return movieSave;

}

//Salvar um novo filmes

export async function saveMovie(key, newMovie){
    let moviesStored = await getMoviesSave(key);

    //Se tiver algum filme salvo com esse mesmo ID / ou duplicado precisamos ignorar.
    const hasMovie = moviesStored.some( item => item.id === newMovie.id)

    if(hasMovie){

        console.log("ESSE FILME JÁ EXISTE NA SUA LISTA");
        return;
    }
    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("Filme Salvo com Sucesso!");
}

// Deletar um filme especifico
export async function deleteMovie(id){
    let moviesStored = await getMoviesSave('@primereact');

    let myMovies = moviesStored.filter( item =>{
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies))
    console.log("Filme deletado com sucesso");
    return myMovies;
}


// Filtrar algum filme se ja esta salvo

export async function hasMovie(movie){
    let moviesStored = await getMoviesSave('@primereact');

    const hasMovie = moviesStored.find(item => item.id === movie.id);

    if(hasMovie){
        return true;
    }
    return false;
}

