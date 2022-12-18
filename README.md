# Things that are Good - JS Frameworks Course Assignment

![image](https://res.cloudinary.com/dt8j2ptfq/image/upload/v1671121582/portfolio/projects/Screenshot_2022-12-15_172448_tk8tya.jpg)

Blog-style prototype page made as a first look at NextJS

[Hosted](dynamic-salamander-9a889d.netlify.app) on Netlify

## Description

Course assignment for the Javascript Frameworks module. Ended up being mostly an experiment with making an API with NextJS, and as a first attempt - it didn't end up too bad. The theme of the website is a media review/opinion-piece style blog. The API has two data-collections: media & posts - where each post has an associated media item.
At the time of writing the features of the websites are:

- Display a list of posts
- Display one post
- Add/remove post to favourites
- If env. url variable is set appropriately: Log in to WP admin and receive auth token, log out.

Features that could be added are:

- Search/display posts by associated media item.
- Display posts by author

## Built With

- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:pnbakken/js-frameworks-public.git
```

2. Navigate to the downloaded folder, install the dependencies:

```bash
cd js-frameworks-public && npm install
```

### Running

The site uses Axios to fetch as though from an external API, to meet the assignment requirements.
If running locally: set .env variable NEXT_PUBLIC_BASE_URL to use appropriate port number.

To enable WP login: set .env variable NEXT_PUBLIC_LOCAL_WORDPRESS_URL to your WP url. Does not need to be local.

To run the app, run the following commands:

```bash
npm run dev
```

## Contributing

I'm not looking for contributions at this time.

## Contact

[My LinkedIn page](https://www.linkedin.com/in/p%C3%A5l-bakken-0b2295204/)
