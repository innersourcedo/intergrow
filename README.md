# intergrow
This is a innersource analytical tool to bring up right measurement of it's values 

How to run intergrow
=====================

Prerequisite :

    Django latest version 3.0 or above installed 
    pyhthon 3.0 and above installed
    Having MySQL server installed
    Having pip3 installed
   


Clone the source from the following intergrow git repo
------------------------------------------------------

git@github.com:innersourcedo/intergrow.git

Create your local virtual enviorment 
-----------------------------------------
Installing Virtual machine

$ pip3 install virtualenv

 Creating your local virtual machine 

 $virtualenv innerSourceDo

 Activate your local virtual machine

 $ source innersource/bin/activate
 
What is needed in local virtual enviorment to ran intergrow ?

        python 3 and above with pip
        Django
        intergrow checked out source code
DB
----------------------------
Start up your mySQL server 
 If ubuntu/linux 
  $ sudo /etc/init.d/mysql start

 You need to have the viewes created in your  local mySQL

 Follow the readme for the rest of the DB initial creation and migrations

 Start up intergrow
 ---------------------------
 $ python manage.py run server

 Check out http://localhost:8000/admin
 Log in with user name:admin password admin321

