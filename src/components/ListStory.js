import React from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native'

import img from '../../images/54583abf39ba185.jpg'

class ListStory extends React.Component{
    constructor(){
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount = () => {
        return fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson.movies)
            this.setState(() => ({
                movies: responseJson.movies
            }))
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    render(){
        return(
            <ImageBackground source={img} style={styles.backgroundContainer}>
                <View>
                    <Text>List Story</Text>
                    {
                        this.state.movies.map((movie) => {
                            return (
                                <View key={movie.id}>
                                    <Text key={movie.id} style={{fontWeight: 'bold', color: 'white'}}>{movie.title}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        width: null,
        height: null,
        alignItems: 'center'
    },
})

export default ListStory