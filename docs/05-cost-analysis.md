# Cost Analysis

## Overview

The Bright Future College Result Portal was deployed on AWS using Terraform with a focus on minimizing operational costs. The infrastructure was designed to remain within the AWS Free Tier where possible while demonstrating Infrastructure as Code (IaC) best practices.

---

## AWS Services Used

| Service | Purpose | Pricing Model | Estimated Cost |
|----------|---------|---------------|----------------|
| Amazon EC2 (t3.micro) | Hosts the web application | Hourly | Free Tier Eligible |
| Amazon VPC | Networking | Free | ₦0 |
| Security Group | Firewall configuration | Free | ₦0 |
| Ubuntu 22.04 AMI | Operating System | Free | ₦0 |
| Elastic IP (attached while running) | Public access | Free | ₦0 |
| Terraform | Infrastructure provisioning | Open Source | ₦0 |

---

## Estimated Monthly Cost

| Resource | Monthly Cost |
|----------|-------------:|
| EC2 t3.micro (Free Tier) | ₦0 |
| VPC | ₦0 |
| Security Groups | ₦0 |
| Ubuntu AMI | ₦0 |
| Terraform | ₦0 |

### Total Estimated Monthly Cost

**₦0 (within AWS Free Tier limits)**

---

## Cost Optimization Techniques

The following practices were implemented to reduce infrastructure costs:

- Used a single EC2 t3.micro instance.
- Used Ubuntu Server, which has no licensing fees.
- Used Terraform (open source) for automated provisioning.
- Avoided managed database services during development.
- No Load Balancer was provisioned.
- No Auto Scaling Group was created.
- No NAT Gateway was deployed.
- Resources can be destroyed instantly using:

terraform destroy

to avoid unnecessary charges.

---

## Cost Considerations Beyond the Free Tier

If the application is deployed outside the AWS Free Tier or experiences significant traffic, costs may be incurred for:

- EC2 compute hours
- EBS storage beyond free allocation
- Data transfer out to the Internet
- Elastic IP addresses not attached to running instances

Monitoring usage through AWS Billing and Cost Explorer is recommended.

---

## Summary

The project demonstrates that Infrastructure as Code can be implemented with virtually zero operational cost by leveraging the AWS Free Tier. Terraform automates the deployment process while keeping the infrastructure simple, repeatable, and cost-effective.