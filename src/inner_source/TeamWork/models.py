from django.db import models

class Employee(models.Model):
    employee_id = models.CharField(max_length=100 , unique = True)
    full_name = models.CharField(max_length=150 )
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=30)
    address = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name

    class Meta:
        ordering = ['full_name']

class Help(models.Model):
    mentee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    help_discription = models.CharField(max_length=300)
    help_date = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.help_discription

class Response(models.Model):
    help_request = models.ForeignKey(Help,  on_delete=models.CASCADE)
    mentor = models.ForeignKey(Employee, on_delete=models.CASCADE)
    response_discription = models.CharField(max_length=300)
    response_date = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.response_discription
    

class Team(models.Model):
    team_id  = models.CharField(max_length=50)
    team_name = models.CharField(max_length=50)
    leader = models.ForeignKey(Employee, on_delete=models.CASCADE)
    start_date = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.team_name
    

class TeamEmployee(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    involved_date = models.DateField(auto_now=False, auto_now_add=False)
    role  = models.CharField(max_length=50)

    def __str__(self):
        return self.employee.first_name
    

class TeamGoal(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    goal_discription = models.CharField(max_length=200)
    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.goal_discription
    

class GoalProgress(models.Model):
    goal = models.ForeignKey(TeamGoal, on_delete=models.CASCADE)
    progress_description = models.CharField(max_length=300)
    progress_date = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.progress_discription
    
#Adding org chart models 
class Organization(models.Model):
     org_id = models.CharField(max_length =30)
     org_name = models.CharField(max_length =30)
     org_description = models.TextField(max_length=300)

     def __str__(self):
         return self.org_name

class Department(models.Model):
    department_name = models.CharField(max_length =30)
    department_description =models.TextField(max_length=500)
    department = models.ForeignKey(Organization, on_delete=models.CASCADE)

    def __str__(self):
       return self.department_name


class Hierarchy(models.Model):
    #hierarchy_id = models.CharField(max_length =30)
    hierarchy_name = models.CharField(max_length =30)
    hierarchy_description = models.TextField(max_length=500)
    hierarchy =models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
       return self.hierarchy_name

class OrgRole(models.Model):
    orgRole_name = models.CharField(max_length=30)
    orgRole_description =models.TextField(max_length=500)
    orgRole = models.ForeignKey(Hierarchy, on_delete=models.CASCADE)

    def __str__(self):
       return self.orgRole_name


     
 
