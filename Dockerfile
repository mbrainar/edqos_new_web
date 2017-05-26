##
## Dockerfile for Event Driven QoS
## Web front end, version 2 - Ember application version
##
FROM nginx:alpine
MAINTAINER Steven Luzynski <sluzynsk@cisco.com>
EXPOSE 5000

COPY dist /usr/share/nginx/html
