# scf-redirect
Simple SCF function for redirecting requests.

## Usage
To use this SCF function for redirecting traffic you'll need an API Gateway Service as a trigger. Just create an Service API with the path "/" and deploy it to all environments (Test, Pre-Release, Release). To redirect traffic of a custom domain add the domain either to the API Gateway or create a CDN with the API Gateway as backend. Wildcard domains are only supported when using a CDN and need to be created separately. (One CDN for \*.example.com and one for example.com)

I'll might add terraforming scripts in the future to ease setup.

## Demo
https://beranek.one
