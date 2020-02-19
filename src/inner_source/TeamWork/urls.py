from django.urls import path
from . import views
from .controller import UserController, TeamController, EmployeeController, HelpController, ResponseController, TeamEmployeeController
from .controller import TeamGoalController, GoalProgressController, OrganizationController, DepartmentController, HierarchyController
from .controller import OrgRoleController, SampleController, DepartmentEmployeeController, TeamEmployeeController


# user Authentication**********************
from django.conf.urls import include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', UserController.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
# *****************************************


urlpatterns += [
# url deal with templates
    path('', views.index , name = 'index'),
    path('teamwork/employees/' , views.employees , name = 'employees'),
    path('teamwork/employees/<int:employee_id>' , views.employeeDiscription, name = 'employeeDiscription'),
    
    path('teamwork/teams/' ,  views.teams , name = 'teams' ),
    path('teamwork/teams/<int:team_id>' , views.teamEmployees , name = 'teamEmployees'),
    path('teamwork/teams/goals/<int:team_id>' , views.teamGoals , name= 'teamGoals'),
    path('teamwork/teams/goals/progress/<int:goal_id>', views.goalProgress , name= 'goalProgress'),

    path('teamwork/requesthelps/' , views.requestHelps , name = 'requestHelps'),
    path('teamwork/requesthelps/response/<int:help_id>' ,views.requestHelpResponse , name = 'requestHelpResponse'),

# APIs
# class-based view ==> APIView wrapper used
    path('employees/', EmployeeController.EmployeeList.as_view()),
    path('employee/<int:pk>', EmployeeController.EmployeeDetail.as_view()),

    path('teams/', TeamController.TeamList.as_view()),
    path('team/<str:pk>', TeamController.TeamDetail.as_view()),
    # path('team/<str:pk>', TeamController.TeamDetail.as_view()),

    path('helps/', HelpController.HelpList.as_view()),
    path('help/<int:pk>', HelpController.HelpDetail.as_view()),

    path('responses/', ResponseController.ResponseList.as_view()),
    path('response/<int:pk>', ResponseController.ResponseDetail.as_view()),

    path('team_employees/', TeamEmployeeController.TeamEmployeeList.as_view()),
    path('team_employee/<int:pk>', TeamEmployeeController.TeamEmployeeDetail.as_view()),

    path('team_goals/', TeamGoalController.TeamGoalList.as_view()),
    path('team_goal/<int:pk>', TeamGoalController.TeamGoalDetail.as_view()),
    
    path('goal_progresses/', GoalProgressController.GoalProgressList.as_view()),
    path('goal_progress/<int:pk>', GoalProgressController.GoalProgressDetail.as_view()),

    path('organizations/', OrganizationController.OrganizationList.as_view()),
    path('organization/<int:pk>', OrganizationController.OrganizationDetail.as_view()),
 
    path('departments/', DepartmentController.DepartmentList.as_view()),
    path('department/<int:pk>', DepartmentController.DepartmentDetail.as_view()),

    path('hierarchies/', HierarchyController.HierarchyList.as_view()),
    path('hierarchy/<int:pk>', HierarchyController.HierarchyDetail.as_view()),

    path('org_roles/', OrgRoleController.OrgRoleList.as_view()),
    path('org_role/<int:pk>', OrgRoleController.OrgRoleDetail.as_view()),

    path('dep_emp/', DepartmentEmployeeController.DepartmentEmployeeList.as_view()),
    path('dep_emp/<int:pk>', DepartmentEmployeeController.DepartmentEmployeeDetail.as_view()),

    path('team_emp/', TeamEmployeeController.TeamEmployeeList.as_view()),
    # findbyteamId
    path('team_emp/<int:pk>', TeamEmployeeController.TeamEmployeeDetail.as_view()),

    path('samples_temp_employee/', SampleController.SampleTeamEmployeeList.as_view()),
    
]


# login ****************************************************************************/
# from django.conf.urls import include

# urlpatterns += [
#     path('api-auth/', include('rest_framework.urls')),
# ]
# /******************************************************/


# url suffixes*********************************************************************/
# http http://127.0.0.1:8000/snippets/ Accept:application/json
# http http://127.0.0.1:8000/snippets/ Accept:text/html 
# # POST using form data
# http --form POST http://127.0.0.1:8000/snippets/ code="print(123)"

# url suffixed for crud operations
# from rest_framework.urlpatterns import format_suffix_patterns
# urlpatterns = format_suffix_patterns(urlpatterns)
# /***************************************************/

# Using Routers/*********************************************************************/
# from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
# router = DefaultRouter()
# router.register(r'user', UserController.UserViewSet)

# The API URLs are now determined automatically by the router.
# urlpatterns += [
#     path('', include(router.urls)),
# ]
