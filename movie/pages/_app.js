import App from 'next/app';


class MovieApp extends App {

	render() {
		const {Component} = this.props;
		
		return (
			<Component />
		)
	}

}

export default MovieApp;











// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


