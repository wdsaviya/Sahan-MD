FROM quay.io/kushansewmina/dark-shan-md-1
RUN git clone https://github.com/maduwa2006/Sahan-MD /root/maduwa2006
WORKDIR /root/maduwa2006/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
