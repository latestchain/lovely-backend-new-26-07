#!/bin/bash

# Stop the current process
pm2 stop nestjs-bot-app || true

# Copy .env
cp /home/ec2-user/env.staging /home/ec2-user/LovelyLegend_BackEnd/.env

# Install dependenciest
npm install


# Start the Nestjs app with PM2
pm2 start npm --name nestjs-bot-app -- start
