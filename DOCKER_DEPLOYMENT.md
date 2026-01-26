# KhulaNode Web - Docker Deployment Guide

## Quick Start

### Build and Run with Docker Compose

```bash
# Build the image
docker-compose build

# Start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

## Dokploy Deployment

### Prerequisites
- Dokploy instance running
- Git repository connected to Dokploy

### Environment Variables
Set these in Dokploy before deployment:

```
PLUNK_API_KEY=your_plunk_api_key_here
NODE_ENV=production
```

### Deployment Steps

1. **Connect Repository**: Link this Git repository to Dokploy

2. **Configure Build Settings**:
   - Build Type: `Dockerfile`
   - Dockerfile Path: `./Dockerfile`
   - Port: `3000`

3. **Set Environment Variables**: Add `PLUNK_API_KEY` in the environment section

4. **Deploy**: Click deploy and Dokploy will:
   - Pull the latest code
   - Build the Docker image
   - Start the container
   - Set up reverse proxy

### Port Configuration
The application runs on port 3000 internally. Dokploy will handle external routing.

### Domain Setup
Configure your custom domain in Dokploy's domain settings after deployment.

## Manual Docker Commands

```bash
# Build the image
docker build -t khulanode-web .

# Run the container
docker run -d \
  --name khulanode-web \
  -p 3000:3000 \
  -e PLUNK_API_KEY=your_key_here \
  khulanode-web

# Stop and remove
docker stop khulanode-web
docker rm khulanode-web
```

## Health Check
Once deployed, verify the application is running:
```
curl http://localhost:3000
```

## Troubleshooting

### Container won't start
- Check logs: `docker-compose logs khulanode-web`
- Verify environment variables are set
- Ensure port 3000 is not already in use

### Videos not loading
- Verify videos are in `public/videos/` directory
- Check file permissions

### Email submission not working
- Verify `PLUNK_API_KEY` is set correctly
- Check Dokploy environment variables

## Production Checklist
- [ ] Set `PLUNK_API_KEY` environment variable
- [ ] Configure domain in Dokploy
- [ ] Set up SSL certificate (handled by Dokploy)
- [ ] Test contact form submission
- [ ] Verify video carousel works
- [ ] Check pricing calculator functionality
