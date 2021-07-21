terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.50"
    }
  }
}

provider "aws" {
  region                  = "us-east-2"
  shared_credentials_file = "~/.aws/credentials"
}

module "s3-static-site" {
  source = "github.com/Bjorn248/s3-static-site"

  root-domain            = "scca-classifier.com"
  target-domain          = "www.scca-classifier.com"
  cloudfront-price-class = "PriceClass_100"

  global-tags = {
    project = "scca-classifier"
  }
}
