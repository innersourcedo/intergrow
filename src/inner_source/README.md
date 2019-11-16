mysql> CREATE USER 'innersource'@'localhost' IDENTIFIED BY 'innsrc321';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'innersource'@'localhost';
mysql> FLUSH PRIVILEGES;
mysql -u innersource -p
mysql> CREATE DATABASE inner_source;

python manage.py makemigrations
python manage.py showmigrations


super user
python manage.py createsuperuser
admin
admin321