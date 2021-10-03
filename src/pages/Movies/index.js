import React, {useEffect, useState} from "react";

import Header from '../../components/Header'

import {Container, ListMovies} from './styles'
import FavoriteItem from '../../components/FavoriteItem'

function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    let isActive = true;


    //falha 02/10
    async function getFavoriteMovies(){
      const result = await getMoviesSave('@primereact');

      if(isActive){
        setMovies(result);
        console.log(result);
      }

    }
    if(isActive){
      getFavoriteMovies();
    }
    return ()=>{
      isActive = false;
    }

  }, []);


  return (
    <Container>
      <Header title="Meus Filmes"/>
      <ListMovies
      showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={ item => String (item.id)}
        renderItem={({item}) =>(
          <FavoriteItem
            data={item}
          />

        )}

      />

    </Container>
  );
}

export default Movies;