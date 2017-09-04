const request = require("request-promise-native");

const host = process.env.MOVIE_SERVICE || "http://ocalhost:4000";

class MovieService {
    static async getMovieInfoBy(id) {
        return await request.get({
            url: `${host}/movies/${id}`,
            json: true
        });
    }
}

module.exports = MovieService;