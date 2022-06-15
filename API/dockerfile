FROM node:17
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install --production -silent
RUN chown -R node /app
EXPOSE 3000
USER node
CMD ["npm", "start"]