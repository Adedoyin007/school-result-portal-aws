#!/bin/bash

# Update server
apt-get update -y

# Install Git and Nginx
apt-get install -y nginx git

# Enable Nginx
systemctl enable nginx
systemctl start nginx

# Remove default webpage
rm -rf /var/www/html/*

# Clone GitHub project
git clone https://github.com/Adedoyin007/school-result-portal-aws.git /tmp/school-result-portal

# Copy website files
cp -r /tmp/school-result-portal/app/* /var/www/html/

# Set permissions
chown -R www-data:www-data /var/www/html

# Restart Nginx
systemctl restart nginx