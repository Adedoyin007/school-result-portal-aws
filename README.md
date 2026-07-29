# school-result-portal-aws
A cloud-based school result portal deployed on AWS using Terraform

# Bright Future College – Student Result Portal (AWS)

## Live Application

🌐 **Website:** http://3.8.10.238

## GitHub Repository

https://github.com/Adedoyin007/school-result-portal-aws

## Project Overview

This project is a cloud-based Student Result Portal deployed on AWS using Terraform. It allows students to check their academic results online by entering their details.

# 🎓 School Result Portal on AWS using Terraform
## 📌 Project Overview
The **School Result Portal** is a cloud-based web application deployed on **Amazon Web Services (AWS)** using **Terraform Infrastructure as Code (IaC)**.
This project demonstrates how infrastructure provisioning and application deployment can be fully automated. A single `terraform apply` command provisions an EC2 instance, configures networking and security, installs Nginx, deploys the web application, and serves the website automatically.
The project showcases practical cloud engineering skills including Infrastructure as Code, Linux administration, web server configuration, AWS networking, and automated deployments.
---
# Project Objectives
The objective of this project was to:
- Deploy a static school result portal on AWS.
- Automate infrastructure provisioning using Terraform.
- Configure an EC2 instance automatically with User Data.
- Install and configure Nginx.
- Deploy the application without manual file copying.
- Demonstrate repeatable Infrastructure as Code deployment.
- Produce complete project documentation suitable for portfolio presentation.
---
# Technologies Used
- AWS EC2
- AWS Security Groups
- Terraform
- Ubuntu Server
- Bash Scripting
- Nginx
- HTML5
- CSS3
- JavaScript
- JSON
- Git
- GitHub
- Visual Studio Code
---
# Project Architecture
```
                    Internet
                        │
                        ▼
               AWS Security Group
                HTTP (80) / SSH (22)
                        │
                        ▼
                 Ubuntu EC2 Instance
                        │
                 Terraform User Data
                        │
          ┌─────────────┴─────────────┐
          │                           │
      Install Nginx            Copy Web Files
          │                           │
          └─────────────┬─────────────┘
                        ▼
             School Result Portal Website
```
---
# Project Structure
```
school-result-portal-aws/
│
├── app/
│   ├── assets/
│   ├── index.html
│   ├── script.js
│   ├── students.json
│   └── style.css
│
├── diagrams/
│
├── docs/
│   ├── 01-project-overview.md
│   ├── 02-terraform.md
│   ├── 03-deployment.md
│   ├── 04-testing.md
│   └── 05-cost-analysis.md
│
├── screenshots/
│
├── terraform/
│   ├── main.tf
│   ├── provider.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── userdata.sh
│
├── LICENSE
└── README.md
```
---
# Features
- Automated AWS infrastructure deployment
- Infrastructure as Code using Terraform
- Automatic Nginx installation
- Automated website deployment
- Secure access using AWS Security Groups
- Dynamic public IP output
- Website URL output after deployment
- Fully reproducible deployment
---
# Infrastructure Components
The deployment provisions:
- 1 Ubuntu EC2 Instance
- Security Group
- Public IP Address
- Nginx Web Server
- User Data Bootstrap Script
Terraform automatically installs the required software and deploys the web application during instance creation.
---
# Deployment Process
Clone the repository:
```bash
git clone https://github.com/Adedoyin007/school-result-portal-aws.git
```
Navigate into the Terraform directory:
```bash
cd school-result-portal-aws/terraform
```
Initialize Terraform:
```bash
terraform init
```
Review the execution plan:
```bash
terraform plan
```
Deploy the infrastructure:
```bash
terraform apply
```
Confirm by typing:
```
yes
```
Terraform will output:
- Public IP Address
- Website URL
Open the website using:
```
http://PUBLIC-IP
```
---
# Testing
The deployment was validated by confirming:
- EC2 instance launched successfully
- Security Group configured correctly
- Nginx installed automatically
- Website files deployed automatically
- Result portal loaded successfully
- Student result lookup functioning correctly
- Terraform outputs displayed correctly
---
# Cost Analysis
The project was intentionally designed using low-cost AWS resources.
| Resource | Estimated Cost |
|-----------|----------------|
| EC2 t3.micro | Low |
| Security Group | Free |
| Public IP | Included while instance is running |
| Terraform | Free |
| Nginx | Free |
| Ubuntu | Free |
The infrastructure can be destroyed at any time using:
```bash
terraform destroy
```
to avoid unnecessary AWS charges.
---
# Screenshots
The repository includes screenshots showing:
- Terraform Initialization
- Terraform Plan
- Terraform Apply
- AWS EC2 Instance
- AWS Security Group
- Successful Website Deployment
- Project Structure
- Testing Results
---
# Learning Outcomes
This project strengthened practical skills in:
- AWS Cloud Computing
- Infrastructure as Code
- Terraform
- Linux Administration
- Bash Scripting
- Nginx Configuration
- Git Version Control
- GitHub Project Management
- Cloud Deployment Automation
---
# Future Improvements
Potential enhancements include:
- HTTPS using AWS Certificate Manager
- Custom Domain with Route 53
- Application Load Balancer
- Auto Scaling Group
- S3 for Static Assets
- CloudFront CDN
- CI/CD Pipeline using GitHub Actions
- Monitoring with Amazon CloudWatch
---
# Author
**Emmanuel Adedoyin Peter**
Cloud Engineer | AWS | Terraform | Linux | DevOps Enthusiast
GitHub:
https://github.com/Adedoyin007
---
# License
This project is licensed under the MIT License.
---
⭐ If you found this project useful, please consider giving the repository a star.

This README reflects the final version of the project you built, where terraform apply automatically provisions the EC2 instance, installs Nginx, copies the application files, and deploys the School Result Portal with no manual SSH or SCP steps required. It is suitable for both your GitHub portfolio and project submission.