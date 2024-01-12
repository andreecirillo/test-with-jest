import movies from './movies'

describe('Favorite Movies', () => {
    let myMovies = []
    beforeEach(() => {
        myMovies = [{
            title: 'Age of Ultron',
            rate: null
        }]
    })

    test('can add a movie', () => {        
        movies.add(myMovies, 'Avatar')
        expect(myMovies).toMatchSnapshot()
    })

    test('rate a movie', () => {
        const myMovies = [{
            title: 'Age of Ultron',
            rate: null
        }]
        movies.rate(myMovies[0], 5)
        expect(myMovies).toMatchSnapshot()
    })
})