# **Geekout Serverless Workshop**

## Directories 
* **github/workflows**
This is the workflows folder automatically created by Github to store all the steps required in Github Actions

* **donations**
This is the folder to store all the API functions 

## Serverless Configuration file
* **serverless.yml**
Contains the configuration we need for the cloud resources to provision for
---
## Prerequisites
1. Login to AWS Console
2. Create IAM User
3. Retrieve IAM User Access Key & Secret Key (https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)
## Getting started with serverless
1. npm -g serverless
2. serverless create --template aws-nodejs --path geekout-serverless
3. Copy the donations folder and serverless.yml into your newly created folder 
4. serverless deploy

## Testing
* serverless invoke -f hello
* curl

## Github Actions
1. Login to Github, navigate to your repository
2. Create Secret for GithubActions (Settings > Secrets)
3. Create AWS_ACCESS_KEY_ID && AWS_SECRET_ACCESS_KEY as your secrets in step 2.
4. Create workflow (Actions > New Workflow > Nodejs Template)
5. Replace the generated yml with **geekout-serverless/.github/workflows/ci.yml**