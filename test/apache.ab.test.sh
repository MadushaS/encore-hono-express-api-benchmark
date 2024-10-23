sudo apt install apache2-utils

echo $(ab -n 10000 -c 100 http://localhost:4000/hello)