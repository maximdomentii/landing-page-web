# AWS S3 Bucket for static website hosting
Quickly deploy your static website from GitHub to AWS S3 with AWS CodePipeline.

## Package and Deploy
```shell
# Make sure there is a valid certificate in us-east-1 region for the domain name and use its arn as param

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
  --parameter-overrides "GithubOAuthToken=???" "CertArn=???"
```