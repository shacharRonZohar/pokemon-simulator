# About the project

This side project simulates a simple pokemon encounter, where you can randomly encounter diffrent pokemons from all across the diffrent generations, and try catching them! After 5 failed tries, the pokemon will run away :C
You can view you caught pokemon in the My Pokemon section, where in the future you will be able to interact with your pokemon, play with them, and feed them!

# The Stack

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.
The stack utilises a modular model of operations, where each part is inccrementally adoptable (except for next / typescript, which is a must, thank god), or available all together out of the box using the CLI. It provides you with the necessary boilerplate to get started with it's impressive tech stack, this project uses the following parts:
Next.js with typescript as the main framework
Tailwind as the CSS framework
TRPC & Zod as a backend library, allowing us to write fully typesafe RPC api's

The project also uses MongoDB as a databse, and Atlas as a database provider.
You can view the [deployed project here:](https://pokemon-simulator.vercel.app/)

# Operation Instructions

In order to run the project locally, simply clone the repository, the run

- yarn
- yarn dev

# Deployment Instructions

Any push to the main branch will automatically deploy to vercel, in the future this will happen via a CI/CD pipeline

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app)
