# AWS S3 Bucket for static website hosting
Quickly deploy your static website from GitHub to AWS S3 with AWS CodePipeline.

## Package and Deploy
```shell
#aws s3 rm s3://maximdomentii.com --recursive

aws cloudformation delete-stack \
    --stack-name landing-page-web

aws cloudformation package \
  --template-file cloudformation-template.yaml \
  --output-template-file cloudformation-template-output.yaml --s3-bucket cloudformation-tamplates

aws cloudformation deploy \
  --template-file cloudformation-template-output.yaml \
  --stack-name landing-page-web \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides "GithubOAuthToken=???"
```


## What AWS resources does this template use?
* AWS S3 Bucket
* IAM (AWS permissions & users)