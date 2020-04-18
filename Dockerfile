
# Stage 1 - build the bundle
FROM node:12-alpine AS builder

WORKDIR /opt/build/

# Copy in only what is needed for the npm install
COPY package* ./

RUN npm install --quiet

# Copy in the rest
COPY . ./

RUN npm run-script build

# Stage 1 - put the bundle into a nginx container
FROM nginx:1.16-alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html/
COPY --from=builder /opt/build/dist/ . 
