from django.urls import path
from . import views

urlpatterns = [
    path('', views.index , name = 'index'),
    path('teamwork/employees/' , views.employees , name = 'employees'),
    path('teamwork/employees/<int:employee_id>' , views.employeeDiscription, name = 'employeeDiscription'),
    
    path('teamwork/teams/' ,  views.teams , name = 'teams' ),
    path('teamwork/teams/<int:team_id>' , views.teamEmployees , name = 'teamEmployees'),
    path('teamwork/teams/goals/<int:team_id>' , views.teamGoals , name= 'teamGoals'),
    path('teamwork/teams/goals/progress/<int:goal_id>', views.goalProgress , name= 'goalProgress'),

    path('teamwork/requesthelps/' , views.requestHelps , name = 'requestHelps'),
    path('teamwork/requesthelps/response/<int:help_id>' ,views.requestHelpResponse , name = 'requestHelpResponse'),
]

