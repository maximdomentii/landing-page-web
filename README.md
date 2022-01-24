# AWS S3 Bucket for static website hosting
Quickly deploy your static website from GitHub to AWS S3 with AWS CodePipeline.

## Package and Deploy
```shell
# Find the policy arn and run:
aws iam detach-role-policy \
    --role-name landing-page-web-CodeBuildRole \
    --policy-arn <policy_arn>

aws s3 rm s3://maximdomentii.com-pipeline --recursive
aws s3 rm s3://maximdomentii.com --recursive

aws cloudformation delete-stack \
    --stack-name landing-page-web

aws cloudformation package \
  --template-file cloudformation-template.yaml \
  --output-template-file cloudformation-template-output.yaml --s3-bucket cloudformation-tamplates

aws cloudformation deploy \
  --template-file cloudformation-template-output.yaml \
  --stack-name landing-page-web \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides "GithubOAuthToken=???"
```


## What AWS resources does this template use?
* AWS S3 Bucket
* IAM (AWS permissions & users)