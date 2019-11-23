```shell
mysql> CREATE USER 'innersource'@'localhost' IDENTIFIED BY 'innsrc321';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'innersource'@'localhost';
mysql> FLUSH PRIVILEGES;
mysql -u innersource -p
mysql> CREATE DATABASE inner_source;
```

```shell
python manage.py makemigrations
python manage.py showmigrations
```


## Super User
```shell
python manage.py createsuperuser
```
### Use Name
admin
### Password
admin321