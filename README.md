# **Geekout Serverless Workshop**
## For Windows
AWS - (Windows: https://awscli.amazonaws.com/AWSCLIV2.msi)

Git - (Windows: https://github.com/git-for-windows/git/releases/download/v2.28.0.windows.1/Git-2.28.0-64-bit.exe)

NodeJS - (Windows: https://nodejs.org/dist/v12.19.0/node-v12.19.0-x64.msi)

## Setup for Git Windows
1. Install Git 
2. Leave the default options and run through the installer (if Windows: https://github.com/git-for-windows/git/releases/download/v2.28.0.windows.1/Git-2.28.0-64-bit.exe)
3. Open GitBash
4. Enter `git clone https://github.com/ronaldkan/geekout-serverless.git`
3. Reopen Powershell

## Setup for Git Mac
1. Brew install git
2. Enter `git clone https://github.com/ronaldkan/geekout-serverless.git`

## Setup for AWS
1. Login to AWS Console 
2. Create IAM User
3. Retrieve IAM User Access Key & Secret Key (https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)
4. Installing awscli, Windows: https://awscli.amazonaws.com/AWSCLIV2.msi | Mac: `pip3 install awscli`
5. Setup awscli, enter `aws configure`
6. Test if its set up correctly: `aws sts get-caller-identity`

## Setup for Serverless
1. NodeJS installed (Windows: https://nodejs.org/dist/v12.19.0/node-v12.19.0-x64.msi | Mac: brew install node@12)
2. To install serverless, enter `npm i -g serverless`
3. To test, enter `serverless --version`
---
## Getting started with serverless 
1. Enter `cd geekout-serverless`
2. `serverless deploy`

(if using Windows and running PS scripts for the first time, open Powershell with (Run as Admin) - enter command `Set-ExecutionPolicy Unrestricted`)

## Testing
* `serverless invoke -f list`
* `curl` <the endpoints generated on the `serverless deploy` output>

## To remove all the resoureces created on AWS
1. `serverless remove`

## (BONUS) Integration with a sample Frontend application
- If you would like to see how the serverless APIs can work with a website, you can refer to this [repo](https://github.com/ryanashneil/geekout-frontend) and follow along
