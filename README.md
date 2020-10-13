# **Geekout Serverless Workshop**
## For Windows
AWS - (Windows: https://awscli.amazonaws.com/AWSCLIV2.msi)

Git - (Windows: https://github.com/git-for-windows/git/releases/download/v2.28.0.windows.1/Git-2.28.0-64-bit.exe)

NodeJS - (Windows: https://nodejs.org/dist/v12.19.0/node-v12.19.0-x64.msi)

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
2. Leave the default options and run through the installer (if Windows: https://github.com/git-for-windows/git/releases/download/v2.28.0.windows.1/Git-2.28.0-64-bit.exe)
3. Re-open Powershell 

---
## Prerequisites for AWS
1. Login to AWS Console 
2. Create IAM User
3. Retrieve IAM User Access Key & Secret Key (https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)

## Prerequisites for Serverless
1. NodeJS installed (Windows: https://nodejs.org/dist/v12.19.0/node-v12.19.0-x64.msi)
2. npm i -g serverless 
3. Retrieve IAM User Access Key & Secret Key (https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)

### Configure AWS CLI
1. Install AWS CLI pip module `pip3 install awscli`  (Windows: https://awscli.amazonaws.com/AWSCLIV2.msi)
2. Connect with AWS Programmatic Access via `aws configure` command and fill up with the details retrieved above. 
3. Test if it is setup properly with `aws sts get-caller-identity`

## Getting started with serverless 
1. `serverless create --template aws-nodejs --path geekout-test`
5. `serverless deploy`

(if using Windows and running PS scripts for the first time, open Powershell with (Run as Admin) - enter command `Set-ExecutionPolicy Unrestricted`)

## Testing
* `serverless invoke -f list`
* `curl` <the endpoints generated on the `serverless deploy` output>

## Github Actions
1. Login to Github, navigate to your repository
2. Create Secret for GithubActions (Settings > Secrets)
3. Create `AWS_ACCESS_KEY_ID` && `AWS_SECRET_ACCESS_KEY` as your secrets in step 2.
4. Create workflow (Actions > New Workflow > Nodejs Template)
5. Replace the generated yml with **geekout-serverless/.github/workflows/ci.yml**

## To remove all the resoureces created on AWS
1. `serverless remove`
