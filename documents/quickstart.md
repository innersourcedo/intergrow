# What is intergrow?
This is an open source analytical tool to bring up right measurement of innersource best practices against the individual engineering team member's enthusiasm to accomplish such best practices with in a team.Further details can be found in the product documentation. It's built on phython based Django framework. 

Quick Start on intergrow
========================
Quck starts guide provides directions to qucikly up and run intergrow in your local.

Prerequisites :
    Django latest version 3.0 or above installed 
    pyhthon 3.0 /pip and above installed
    Having MySQL server installed
    Having pip3 installed
   
Note:Django effectively runs on the local virtual machines, therefore above software needed be installed inside of your local virtual envirment. The reason is when every you create a new local enviorment, it's usually empty.  

Clone the source from the following intergrow git repo
------------------------------------------------------

git@github.com:innersourcedo/intergrow.git

Create your local virtual enviorment 
-----------------------------------------
As stated above, in order to up and run the intergrow, let's beign with installing virtual environment which usally can be installed using pip.For this steps you need to have installed python 3 or above installed with pip.

$ pip3 install virtualenv

 Creating your local virtual machine 

 $virtualenv <Name for your local environment>

 Activate your local virtual machine

 $ source innersource/bin/activate
 
What is needed in local virtual enviorment to ran intergrow ?

        python 3 and above with pip
        Django
        intergrow checked out source code
DB
----------------------------
Intergrow currently uses mySQL DB. Therefore it's required to install it in your local. if you are using linux distribution such as ubuntu. you may use following command to install my SQL.

$sudo apt-get update
$sudo apt-get install mysql-server

Start up your mySQL server 
 If ubuntu/linux 
  $ sudo /etc/init.d/mysql start

 You need to have the viewes created in your  local mySQL

 Follow the src/readme.md for the rest of the DB initial creation and migrations.

 Start up intergrow
 ---------------------------
 $ python manage.py run server

 Check out http://localhost:8000/admin
 Log in with user name:admin password admin321

