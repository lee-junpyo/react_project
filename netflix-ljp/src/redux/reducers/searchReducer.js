let initialState = {
    movies : {},
    genreList : [],
    filters : {
        sort : '',
        year : {
            min : 1990, max : 2023
        },
        score : {
            min: 0, max : 10
        },
        selectedGenre : ''
    },
    loading : true,
    keyword : '',
    filterList : [],
}

function searchReducer(state=initialState, action){
    let { type, payload} = action;
    switch(type) {
        case "GET_MOVIE_LIST_SUCCESS" : 
            return {...state, movies : payload.movies, filterList: payload.movies.results, genreList : payload.genreList.genres, loading: false,
                filters : {sort : '',
                year : {
                    min : 1990, max : 2023
                },
                score : {
                    min: 0, max : 10
                },
                selectedGenre : ''}
            }
        case "GET_MOVIE_LIST_FAILURE" :
            return {...state, loading: false};
        case "GET_SEARCH_LIST_SUCCESS" :
            return {...state, movies : payload.searchList, genreList : payload.genreList.genres, loading: false, filterList : payload.searchList.results,
                filters : {sort : '',
                    year : {
                        min : 1990, max : 2023
                    },
                    score : {
                        min: 0, max : 10
                    },
                    selectedGenre : ''}
            }
        case "GET_SEARCH_LIST_FAILURE" : 
            return {...state, loading: false};
        case "FILTER_SETTING" : 
            //console.log('payload',payload);
            let sortArr = payload.type === 'sort' ? payload.value.split('.') : state.filters.sort.split('.');
            let movieArr = payload.type === 'genre' ? payload.genreMovieList.results : state.movies.results;
            //console.log('movieArr', movieArr);
            let sortList = [];
            if(sortArr[0] === 'release_date'){
                //console.log('release_date');
                if(sortArr[1] === 'desc'){
                    sortList = movieArr.sort((a,b)=> new Date(b[sortArr[0]]) - new Date(a[sortArr[0]]));
                }else{
                    sortList = movieArr.sort((a,b)=> new Date(a[sortArr[0]]) - new Date(b[sortArr[0]]));
                }
            }else{
                if(sortArr[1] === 'desc'){
                    sortList = movieArr.sort((a,b)=> b[sortArr[0]] - a[sortArr[0]]);
                }else{
                    sortList = movieArr.sort((a,b)=> a[sortArr[0]] - b[sortArr[0]]);
                }
            }

            let yearFilterArr = payload.type === 'year' ? (
                sortList.filter((a)=> 
                    new Date(a.release_date) > new Date((payload.value.min-1)+"-12-31") &&
                    new Date(a.release_date) < new Date((payload.value.max+1)+"-01-01")
                    )
            ) : (
                sortList.filter((a)=> 
                    new Date(a.release_date) > new Date((state.filters.year.min-1)+"-12-31") &&
                    new Date(a.release_date) < new Date((state.filters.year.max+1)+"-01-01")
                )
            )
            
            let scoreFilterArr = payload.type === 'score' ? (
                yearFilterArr.filter((b)=>
                b.vote_average > payload.value.min && 
                b.vote_average < payload.value.max
                )
            ) : (
                yearFilterArr.filter((b)=>
                b.vote_average > state.filters.score.min && 
                b.vote_average < state.filters.score.max
                )
            ) 
            if(payload.type === 'sort') return {... state, filters : {...state.filters, sort: payload.value}, filterList : scoreFilterArr};
            if(payload.type === 'year') return {... state, filters : {...state.filters, year: payload.value}, filterList : scoreFilterArr};
            if(payload.type === 'score') return {... state, filters : {...state.filters, score: payload.value}, filterList : scoreFilterArr};
            if(payload.type === 'genre') return {... state, filters : {...state.filters, movieArr: movieArr, selectedGenre: payload.selectedGenre}, filterList : scoreFilterArr};

        case "SET_KEYWORD" :
            return {...state, keyword : payload}
        default :
            return { ...state };
    }
}

export default searchReducer;