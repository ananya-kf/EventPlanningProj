echo "---------- Install node ------------"
sudo apt-get install -y npm
sudo npm install -g n
sudo n 19

echo "---------- Install node packages required by the project ------------"
npm install
