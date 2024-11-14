import About from '../sections/About'
import Projects from '../sections/Posts'

function Home() {
	return (
		<div>
			<main className='p-2'>
				<About />
				<Projects />
			</main>
		</div>
	)
}

export default Home
