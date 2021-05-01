import Head from 'next/head';

const Meta = () => (
	<Head>
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta charSet='utf-8' />
		<link
			rel='stylesheet'
			href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
		/>
		<link
			rel='stylesheet'
			href='https://fonts.googleapis.com/icon?family=Material+Icons'
		/>

		<link rel='stylesheet' href='/styles/base.css' />
		<link
			rel='shortcut icon'
			type='image/jpg'
			href='/images/favicon-32x32.png'
		/>
		<title> JAL web-connect</title>
	</Head>
);

export default Meta;
