# **Geekout Serverless Workshop**

## Directories 
* **github/workflows**
This is the workflows folder automatically created by Github to store all the steps required in Github Actions

* **donations**
This is the folder to store all the API functions 

## Serverless Configuration file
* **serverless.yml**
Contains the configuration we need for the cloud resources to provision for

## Git 
1. Install Git 
2. Leave the default options and run through the installer
3. Re-open Powershell

---
## Prerequisites for AWS
1. Login to AWS Console
2. Create IAM User
3. Retrieve IAM User Access Key & Secret Key (https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)

## Prerequisites for Serverless
1. NodeJS installed
2. npm -g serverless 
3. Retrieve IAM User Access Key & Secret Key (https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)

### Configure AWS CLI
1. Install AWS CLI pip module
2. Connect with AWS Programmatic Access via `aws configure` command and fill up with the details retrieved above.
3. Test if it is setup properly with `aws sts get-caller-identity`

## Getting started with serverless 
1. serverless create --template aws-nodejs --path geekout-serverless
2. Copy the donations folder and serverless.yml into your newly created folder 
3. serverless deploy

(if using Windows and running PS scripts for the first time, open Powershell with (Run as Admin) - enter command `Set-ExecutionPolicy Unrestricted`)

## Testing
* serverless invoke -f hello
* curl

## Github Actions
1. Login to Github, navigate to your repository
2. Create Secret for GithubActions (Settings > Secrets)
3. Create AWS_ACCESS_KEY_ID && AWS_SECRET_ACCESS_KEY as your secrets in step 2.
4. Create workflow (Actions > New Workflow > Nodejs Template)
5. Replace the generated yml with **geekout-serverless/.github/workflows/ci.yml**
