from django.shortcuts import render
from .models import Employee, Team ,TeamEmployee ,TeamGoal , GoalProgress , Help , Response

def index(request):
    return render(request , 'index.html')

def employees(request):
    all_employees = Employee.objects.all()
    return render(request , 'employee/index.html' , {'all_employees' : all_employees})

def employeeDiscription(request, employee_id):
    employee = Employee.objects.get(pk = employee_id)
    return render(request, 'employee/employee_details.html' ,{'employee' : employee})

def teams(request):
    all_teams = Team.objects.all()
    return render(request , 'team/index.html' , {'all_teams' : all_teams}) 

def teamEmployees(request, team_id):
    team_employees = TeamEmployee.objects.filter(team__team_id__contains = team_id)
    return render(request , 'team/team_employees.html' , {'team_employees': team_employees})

def teamGoals(request , team_id):
    team_goals = TeamGoal.objects.filter(team__team_id__contains = team_id)
    return render(request , 'team/team_goals.html', {'team_goals' : team_goals})

def goalProgress(request, goal_id):
    goal_progress = GoalProgress.objects.filter(goal__id__contains = goal_id)
    return render(request , 'team/goal_progress.html', {'goal_progress' : goal_progress})

def requestHelps(request):
    all_helps_request = Help.objects.all()
    return render(request , 'helpRequest/index.html', {'all_helps_request' : all_helps_request})

def requestHelpResponse(request, help_id):
    all_helps_request_response = Response.objects.filter(help_request__id__contains = help_id)
    return render(request , 'helpRequest/help_response.html', {'all_helps_request_response' : all_helps_request_response})