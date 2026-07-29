variable "aws_region" {
  description = "AWS Region where the resources will be deployed"
  type        = string
  default     = "eu-west-2"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "school-result-portal"
}
variable "key_name" {
  description = "AWS Key Pair Name"
  default     = "school-key"
}