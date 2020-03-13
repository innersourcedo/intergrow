from django.db import models
from django.contrib.auth.models import User


class RoleEmployee(models.Model):
    is_sup_admin = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_team = models.BooleanField(default=False)
    is_employee = models.BooleanField(default=True)
    role_discription = models.CharField(max_length=100 , unique = True)

    def __str__(self):
        return self.role_discription

class Employee(models.Model):
    employee_id = models.CharField(max_length=100 , unique = True)
    full_name = models.CharField(max_length=150 )
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=30)
    address = models.CharField(max_length=200)
    user = models.OneToOneField(User, 
            on_delete=models.CASCADE,
            blank=True,
            null=True)
    role_employee = models.ForeignKey(RoleEmployee, blank=True, null=True, on_delete=models.CASCADE)
    
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

class DepartmentEmployee(models.Model):
    employee = models.ForeignKey(Employee, on_delete = models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    emp_role = models.CharField(max_length = 50)


#  Team 
class TeamEmployee(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    involved_date = models.DateField(auto_now=False, auto_now_add=False)
    role  = models.CharField(max_length=50)

    def __str__(self):
        return self.employee.first_name
  
class Team(models.Model):
    team_id  = models.CharField(max_length=50)
    team_name = models.CharField(max_length=50)
    leader = models.ForeignKey(Employee, on_delete=models.CASCADE)
    start_date = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.team_name

class TeamAllocation(models.Model):
    team_id  = models.ForeignKey(Team, on_delete=models.CASCADE)
    member_id  = models.ForeignKey(Employee, on_delete=models.CASCADE)
    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)

class TeamGoal(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    goal_discription = models.CharField(max_length=200)
    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)
    is_complete = models.BooleanField(default=False)
    is_inprogress = models.BooleanField(default=True)

    def __str__(self):
        return self.goal_discription
    
class GoalProgress(models.Model):
    goal = models.ForeignKey(TeamGoal, on_delete=models.CASCADE)
    progress_description = models.CharField(max_length=300)
    progress_date = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.progress_discription
    

class IndividualGoal(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    goal_discription = models.CharField(max_length=200)
    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)
    is_complete = models.BooleanField(default=False)
    is_inprogress = models.BooleanField(default=True)


    def __str__(self):
        return self.goal_discription
    
class IndividualGoalProgress(models.Model):
    individual_goal = models.ForeignKey(IndividualGoal, on_delete=models.CASCADE)
    progress_description = models.CharField(max_length=300)
    progress_date = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.progress_discription

