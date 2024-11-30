# Description
This is a website for a dance school activity in Milan [(Google Maps)](https://maps.app.goo.gl/2aCSy8LbFXoEUWebA)

# Live Test
If you want to try live code, visit the [website](https://www.newstyledance.it/pre-menu).

# Usage and Modify
**0. Prerequisites:**

- Install [Node.js version 18.18.0+](https://nodejs.org/en/download/current) or check if already installed with `node -v`.
- Install [npm version 9.8.1+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or check if already installed with `npm -v`.
- Install [Angular CLI version 16.2.0+](https://angular.io/cli) or check if already installed with `ng v`.

**1. Install Project Dependencies:**
   
- Install all project dependencies specified in the *angular.json* file using `npm install`, a *node_module* folder will be created.

**2. Launch the Application:**

- Host the website on the server or launch your application using `ng serve`.

**3. See result**

- Navigate to `http://localhost:4200/` in your browser to see the result:

**4. Build Angular**

- To transform the Angular project into a static website use the command `ng build`

**5. Host on AWS S3 Bucket**

- On your AWS account create a new S3 Bucket, uncheck `BLOCK PUBLIC ACCESS` so that the public can access it
- Navigate to permission and add the following permission:
```json
{
    "Version": "2012-10-17",
    "Statement": [
   {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::BUCKET_NAME/*"
        }
    ]
}
```
- Navigate to properties and enable `Static website hosting`
  
**6. Custom domain**

- [Follow the guide](https://dev.to/aws-builders/how-to-deploy-a-static-website-on-amazon-s3-with-route-53-3o6p)

Happy coding!
